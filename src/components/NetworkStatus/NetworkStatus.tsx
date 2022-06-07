import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { isEqual, sortedUniq, uniq } from 'lodash';
import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChainEntity } from '../../features/data/entities/chain';
import {
  dataLoaderActions,
  DataLoaderState,
  isPending,
  isRejected,
  LoaderState,
} from '../../features/data/reducers/data-loader';
import { selectBoostById } from '../../features/data/selectors/boosts';
import { selectVaultById } from '../../features/data/selectors/vaults';
import { BeefyState } from '../../redux-types';
import { styles } from './styles';
import { Floating } from '../Floating';
import { useAppDispatch, useAppSelector } from '../../store';

const useStyles = makeStyles(styles);

export function NetworkStatus() {
  const classes = useStyles({});

  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const anchorEl = useRef();
  const open = useAppSelector(state => state.ui.dataLoader.statusIndicator.open);
  const chainsById = useAppSelector(state => state.entities.chains.byId);
  const handleClose = useCallback(() => dispatch(dataLoaderActions.closeIndicator()), [dispatch]);
  const handleToggle = useCallback(
    () => dispatch(open ? dataLoaderActions.closeIndicator() : dataLoaderActions.openIndicator()),
    [dispatch, open]
  );

  const rpcErrors = useNetStatus(findChainIdMatching, isRejected);
  const rpcPending = useNetStatus(findChainIdMatching, isPending);
  const beefyErrors = useNetStatus(findBeefyApiMatching, isRejected);
  const beefyPending = useNetStatus(findBeefyApiMatching, isPending);
  const configErrors = useNetStatus(findConfigMatching, isRejected);
  const configPending = useNetStatus(findConfigMatching, isPending);

  const hasAnyError = rpcErrors.length > 0 || beefyErrors.length > 0 || configErrors.length > 0;
  const hasAnyLoading =
    rpcPending.length > 0 || beefyPending.length > 0 || configPending.length > 0;

  const colorClasses = {
    success: !hasAnyError && !hasAnyLoading,
    warning: hasAnyError,
    loading: hasAnyLoading,
    notLoading: !hasAnyLoading,
  };
  const pulseClassName = clsx(classes.pulseCircle, colorClasses);

  return (
    <div>
      <button
        ref={anchorEl}
        className={clsx({ [classes.container]: true, open: open })}
        onClick={handleToggle}
      >
        <Box className={clsx(classes.circle, colorClasses)}>
          <Box style={{ animationDelay: '0s' }} className={pulseClassName} />
          <Box style={{ animationDelay: '1s' }} className={pulseClassName} />
          <Box style={{ animationDelay: '2s' }} className={pulseClassName} />
          <Box style={{ animationDelay: '3s' }} className={pulseClassName} />
        </Box>
      </button>
      <Floating
        open={open}
        placement="bottom-start"
        anchorEl={anchorEl}
        autoWidth={false}
        autoHeight={false}
        autoHide={false}
        className={classes.floating}
      >
        <Box className={classes.popoverSpacer} />
        <Box className={classes.popover}>
          <Box className={classes.closeButton} onClick={handleClose}>
            <Box className={classes.X} />
          </Box>
          {hasAnyError ? (
            <>
              <Typography className={classes.popoverTitle}>
                {t('NetworkStatus-Title-RpcError')}
              </Typography>
              {rpcErrors.map(chainId => (
                <Box className={classes.popoverLine} key={chainId}>
                  <Box className={clsx([classes.circle, 'warning', 'circle'])} />
                  <Typography>
                    {t('NetworkStatus-RpcError', { chain: chainsById[chainId].name })}
                  </Typography>
                </Box>
              ))}
              {(beefyErrors.length > 0 || configErrors.length > 0) && (
                <Box className={classes.popoverLine}>
                  <Box className={clsx([classes.circle, 'warning', 'circle'])} />
                  <Typography>{t('NetworkStatus-BeefyError')}</Typography>
                </Box>
              )}
              <Typography className={clsx(classes.popoverLine, classes.popoverHelpText)}>
                {t('NetworkStatus-HelpText-Error')}
              </Typography>
            </>
          ) : hasAnyLoading ? (
            <>
              <Typography className={classes.popoverTitle}>
                {t('NetworkStatus-Title-Loading')}
              </Typography>
            </>
          ) : (
            <>
              <Typography className={classes.popoverTitle}>
                {t('NetworkStatus-Title-OK')}
              </Typography>
            </>
          )}
        </Box>
      </Floating>
    </div>
  );
}

function useNetStatus<
  R extends string[],
  S extends (state: BeefyState, matcher: (state: LoaderState) => boolean) => R,
  M extends (state: LoaderState) => boolean
>(selector: S, matcher: M) {
  return useAppSelector(
    state => selector(state, matcher),
    // since we are returning a new array each time we select
    // use a comparator to avoid useless re-renders
    stringArrCompare
  );
}

const stringArrCompare = (left: string[], right: string[]) => {
  return isEqual(sortedUniq(left), sortedUniq(right));
};

const findChainIdMatching = (state: BeefyState, matcher: (loader: LoaderState) => boolean) => {
  const chainIds: ChainEntity['id'][] = [];
  for (const [chainId, loader] of Object.entries(state.ui.dataLoader.byChainId)) {
    if (
      matcher(loader.balance) ||
      matcher(loader.allowance) ||
      matcher(loader.addressBook) ||
      matcher(loader.contractData)
    ) {
      chainIds.push(chainId);
    }
  }
  if (matcher(state.ui.dataLoader.global.boostForm) && state.ui.boostModal.boostId) {
    const boost = selectBoostById(state, state.ui.boostModal.boostId);
    chainIds.push(boost.chainId);
  }
  if (matcher(state.ui.dataLoader.global.depositForm) && state.ui.deposit.vaultId) {
    const vault = selectVaultById(state, state.ui.deposit.vaultId);
    chainIds.push(vault.chainId);
  }
  if (matcher(state.ui.dataLoader.global.withdrawForm) && state.ui.withdraw.vaultId) {
    const vault = selectVaultById(state, state.ui.withdraw.vaultId);
    chainIds.push(vault.chainId);
  }

  return uniq(chainIds);
};

const findBeefyApiMatching = (state: BeefyState, matcher: (loader: LoaderState) => boolean) => {
  const matchingKeys: (keyof DataLoaderState['global'])[] = [];
  const beefyKeys: (keyof DataLoaderState['global'])[] = ['apy', 'prices'];
  for (const key of beefyKeys) {
    if (matcher(state.ui.dataLoader.global[key])) {
      matchingKeys.push(key);
    }
  }
  return matchingKeys;
};

const findConfigMatching = (state: BeefyState, matcher: (loader: LoaderState) => boolean) => {
  const matchingKeys: (keyof DataLoaderState['global'])[] = [];
  const configKeys: (keyof DataLoaderState['global'])[] = ['chainConfig', 'boosts', 'vaults'];
  for (const key of configKeys) {
    if (matcher(state.ui.dataLoader.global[key])) {
      matchingKeys.push(key);
    }
  }
  return matchingKeys;
};
