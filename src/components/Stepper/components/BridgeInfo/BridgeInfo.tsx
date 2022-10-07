import { Box, Button as MuiButton, CircularProgress, makeStyles } from '@material-ui/core';
import React, { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { selectChainById } from '../../../../features/data/selectors/chains';
import { selectCurrentChainId } from '../../../../features/data/selectors/wallet';
import { formatBigNumberSignificant } from '../../../../helpers/format';
import { TransactionLink } from '../TransactionLink';
import { getBridgeTxData } from '../../../../features/data/actions/bridge';
import { bridgeActions } from '../../../../features/data/reducers/wallet/bridge';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
import { AlertWarning } from '../../../Alerts';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { styles } from './styles';
import { selectStepperCurrentStepData } from '../../../../features/data/selectors/stepper';
import { isEmpty } from '../../../../helpers/utils';
import { selectBridgeState, selectBridgeStatus } from '../../../../features/data/selectors/bridge';
import { Button } from '../../../Button';
import { StepContent, stepperActions } from '../../../../features/data/reducers/wallet/stepper';
import { walletActions } from '../../../../features/data/actions/wallet-actions';
import { Title } from '../Title';

const useStyles = makeStyles(styles);

interface TxStateInterface {
  error: string | null;
  swapTx: string | null;
  status: 0 | 3 | 10 | 8 | 9 | 12 | 14;
}

const BridgeTxProgress = memo(function () {
  const [txData, setTxData] = React.useState<TxStateInterface>({
    error: null,
    swapTx: null,
    status: 0,
  });
  const classes = useStyles();
  const { t } = useTranslation();
  const walletActionsState = useAppSelector(state => state.user.walletActions);
  const currentChaindId = useAppSelector(state => selectCurrentChainId(state));
  const bridgeState = useAppSelector(selectBridgeState);
  const bridgeStatus = useAppSelector(selectBridgeStatus);
  const chain = useAppSelector(state => selectChainById(state, currentChaindId));
  const destChain = useAppSelector(state => selectChainById(state, bridgeState.destChainId));
  const dispatch = useAppDispatch();

  const handleClose = React.useCallback(() => {
    dispatch(stepperActions.reset());
    dispatch(walletActions.resetWallet());
  }, [dispatch]);

  // Use a ref to keep track of a stateful value that doesn't affect rendering,
  // the `setInterval` ID in this case.
  const intervalRef: any = useRef();

  const hash =
    walletActionsState.result === 'success'
      ? walletActionsState.data.receipt.transactionHash
      : walletActionsState.result === 'success_pending'
      ? walletActionsState.data.hash
      : '';

  //TX DATA IS REFRESH EVERY 5 SECONDS
  React.useEffect(() => {
    const getTxData = () => {
      dispatch(bridgeActions.setStatus({ status: 'loading' }));
      getBridgeTxData(hash)
        .then(res => {
          if (res.msg === 'Error') {
            setTxData({
              error: res.error,
              swapTx: null,
              status: 0,
            });
          }
          if (res.msg === 'Success') {
            setTxData({
              swapTx: res.info.swaptx,
              error: null,
              status: res.info.status,
            });
            // STATUS 8 = Confirming \ STATUS 9 = Swapping
            if (res.info.status === 8 || res.info.status === 9) {
              dispatch(bridgeActions.setStatus({ status: 'confirming' }));
            }
            //STATUS 10 = Success
            //FOR MORE INFO WATCH https://github.com/anyswap/CrossChain-Router/wiki/How-to-integrate-AnySwap-Router POINTN 4
            if (res.info.status === 10) {
              dispatch(bridgeActions.setStatus({ status: 'success' }));
              clearInterval(intervalRef.current);
            }
            //STATUS 14= Failure
            if (res.info.status === 14) {
              dispatch(bridgeActions.setStatus({ status: 'idle' }));
              clearInterval(intervalRef.current);
            }
          }
        })
        .catch(err => {
          setTxData({
            swapTx: null,
            error: `Request Error ${err}`,
            status: 14,
          });
        });
    };

    intervalRef.current = setInterval(getTxData, 5000);

    // Clear the interval when this hook/component unmounts so it doesn't keep
    // running when this component is gone.
    return () => {
      clearInterval(intervalRef.current);
      dispatch(bridgeActions.setStatus({ status: 'idle' }));
    };
  }, [dispatch, hash]);

  return (
    <>
      {bridgeStatus === 'success' && (
        <Box className={classes.successContainer}>
          <div className={classes.textSuccess}>
            {t('bridge-Success-Content', {
              amount: formatBigNumberSignificant(bridgeState.amount, 4),
              chain: destChain.name,
            })}
          </div>
        </Box>
      )}
      {txData?.status === 14 && (
        <AlertWarning className={classes.errorMessage}>{t('Multichain-Error')}</AlertWarning>
      )}
      <Box className={classes.chainContainer}>
        <Box mb={1} className={classes.statusContainer}>
          <Box className={classes.chainStatusContainer}>
            <img
              className={classes.icon}
              alt={chain.id}
              src={require(`../../../../images/networks/${chain.id}.svg`).default}
            />
            <div className={classes.chainName}>{chain.name}</div>
          </Box>
          <Box className={classes.chainStatusContainer}>
            {walletActionsState.result === 'success_pending' && <CircularProgress size={16} />}
            {walletActionsState.result === 'success' && (
              <img
                style={{ height: '16px' }}
                alt="check"
                src={require(`../../../../images/icons/check.svg`).default}
              />
            )}
            <div className={classes.statusText}>
              {walletActionsState.result === 'success_pending' && t('Pending')}
              {walletActionsState.result === 'success' && t('Success')}
            </div>
          </Box>
        </Box>
        <TransactionLink />
      </Box>
      <Box className={classes.chainContainer}>
        <Box className={classes.statusContainer}>
          <Box className={classes.chainStatusContainer}>
            <img
              className={classes.icon}
              alt={chain.id}
              src={require(`../../../../images/networks/${destChain.id}.svg`).default}
            />
            <div className={classes.chainName}>{destChain.name}</div>
          </Box>
          {walletActionsState.result === 'success' && (
            <Box className={classes.chainStatusContainer}>
              {bridgeStatus !== 'success' && <CircularProgress size={20} />}
              {bridgeStatus === 'success' && (
                <img
                  style={{ height: '16px' }}
                  alt="check"
                  src={require(`../../../../images/icons/check.svg`).default}
                />
              )}
              <div className={classes.statusText}>
                {bridgeStatus === 'loading' && t('Pending')}
                {bridgeStatus === 'confirming' && t('Confirming')}
                {bridgeStatus === 'success' && t('Success')}
              </div>
            </Box>
          )}
        </Box>
        {!txData.error && txData.swapTx && (
          <MuiButton
            className={classes.redirectLinkSuccess}
            href={destChain.explorerUrl + '/tx/' + txData.swapTx}
            target="_blank"
          >
            {t('Transactn-View')} {<OpenInNewRoundedIcon htmlColor="#59A662" fontSize="inherit" />}
          </MuiButton>
        )}
      </Box>
      {hash && (
        <MuiButton
          className={classes.redirectLinkSuccess}
          href={`https://anyswap.net/explorer/tx?params=${hash}`}
          target="_blank"
        >
          {t('Transactn-ViewMultichain')}{' '}
          {<OpenInNewRoundedIcon htmlColor="#59A662" fontSize="inherit" />}
        </MuiButton>
      )}
      {bridgeStatus === 'success' && (
        <Button
          borderless={true}
          fullWidth={true}
          className={classes.closeBtn}
          onClick={handleClose}
        >
          {t('Transactn-Close')}
        </Button>
      )}
    </>
  );
});

export const BridgeInfo = memo(function () {
  const walletActionsStateResult = useAppSelector(state => state.user.walletActions.result);
  const currentStepData = useAppSelector(selectStepperCurrentStepData);

  return (
    <>
      {!isEmpty(currentStepData) &&
        currentStepData.step === 'bridge' &&
        (walletActionsStateResult === 'success_pending' ||
          walletActionsStateResult === 'success') && <BridgeTxProgress />}
    </>
  );
});
