import { CardContent, Box, Typography, Button, makeStyles } from '@material-ui/core';
import BigNumber from 'bignumber.js';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { walletActions } from '../../../features/data/actions/wallet-actions';
import { selectAllowanceByTokenAddress } from '../../../features/data/selectors/allowances';
import { selectBifiBridgeDataByChainId } from '../../../features/data/selectors/bridge';
import { selectTokenByAddress } from '../../../features/data/selectors/tokens';
import { selectCurrentChainId, selectWalletAddress } from '../../../features/data/selectors/wallet';
import { BeefyState } from '../../../redux-types';
import { useStepper } from '../../Steps/hooks';
import { Step } from '../../Steps/types';
import { styles } from '../styles';

const useStyles = makeStyles(styles as any);

function _Confirm({
  handleModal,
  startStepper,
  isStepping,
}: {
  handleModal: () => void;
  startStepper: any;
  isStepping: boolean;
}) {
  const { t } = useTranslation();
  const classes = useStyles();

  const formState = useSelector((state: BeefyState) => state.ui.bridgeModal);

  const walletAddress = useSelector((state: BeefyState) => selectWalletAddress(state));

  const actualChainId = useSelector((state: BeefyState) => selectCurrentChainId(state));

  const destAmount = formState.amount
    .minus(new BigNumber(formState.destChainInfo.MinimumSwapFee))
    .toFixed(4);

  const selectedToken = useSelector((state: BeefyState) =>
    selectBifiBridgeDataByChainId(state, actualChainId)
  );

  const depositTokenAllowance = useSelector((state: BeefyState) =>
    selectAllowanceByTokenAddress(state, actualChainId, selectedToken.address, selectedToken.router)
  );

  const depositedToken = useSelector((state: BeefyState) =>
    selectTokenByAddress(state, actualChainId, selectedToken.address)
  );

  const handleDeposit = () => {
    const steps: Step[] = [];
    if (depositTokenAllowance.isLessThan(formState.amount) && depositedToken.type !== 'native') {
      steps.push({
        step: 'approve',
        message: t('Vault-ApproveMsg'),
        action: walletActions.approval(depositedToken, selectedToken.router),
        pending: false,
      });
    }

    steps.push({
      step: 'bridge',
      message: t('Vault-TxnConfirm', { type: t('Mint-noun') }),
      action: walletActions.bridge(
        actualChainId,
        formState.destChain,
        selectedToken.router,
        formState.amount
      ),
      pending: false,
    });

    handleModal();
    startStepper(steps);
  };

  return (
    <CardContent className={classes.content}>
      <Box>
        <Typography variant="body1">{t('Bridge-Confirm-Content')}</Typography>
      </Box>
      <Box className={classes.fees}>
        <Box mb={1}>
          <Typography variant="body2" className={classes.label}>
            {t('FROM')}
          </Typography>
        </Box>
        <Box mb={1.5} className={classes.flexContainer}>
          <Box className={classes.networkContainer}>
            <img
              className={classes.icon}
              alt=""
              src={require(`../../../images/networks/${actualChainId}.svg`).default}
            />
            <Typography className={classes.chainName} variant="body1">
              BNB Chain
            </Typography>
          </Box>
          <Typography className={classes.bridgedValue} variant="body1">
            - {formState.formattedInput} BIFI
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" className={classes.address}>
            {t('Address')}: <span>{walletAddress}</span>
          </Typography>
        </Box>
      </Box>
      <Box className={classes.customDivider}>
        <Box className={classes.line} />
        <img alt="arrowDown" src={require('../../../images/arrowDown.svg').default} />
        <Box className={classes.line} />
      </Box>
      <Box className={clsx(classes.fees, classes.lastMarginFees)}>
        <Box mb={1}>
          <Typography variant="body2" className={classes.label}>
            {t('TO')}
          </Typography>
        </Box>
        <Box mb={2} className={classes.flexContainer}>
          <Box className={classes.networkContainer}>
            <img
              className={classes.icon}
              alt=""
              src={require(`../../../images/networks/${formState.destChain}.svg`).default}
            />
            <Typography className={classes.chainName} variant="body1">
              Fantom
            </Typography>
          </Box>
          <Typography className={classes.bridgedValue} variant="body1">
            + {destAmount} BIFI
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" className={classes.address}>
            {t('Address')}: <span>{walletAddress}</span>
          </Typography>
        </Box>
      </Box>
      <Box mb={1} className={classes.flexContainer}>
        <Typography variant="body2" className={classes.advice1}>
          {t('Bridge-Crosschain')}:
        </Typography>
        <Typography variant="body2" className={classes.value}>
          {formState.destChainInfo.SwapFeeRatePerMillion}%
        </Typography>
      </Box>
      <Box mb={1} className={classes.flexContainer}>
        <Typography variant="body2" className={classes.advice1}>
          {t('Bridge-Gas')}:
        </Typography>
        <Typography variant="body2" className={classes.value}>
          {formState.destChainInfo.MinimumSwapFee} BIFI
        </Typography>
      </Box>
      <Box mb={3} className={classes.flexContainer}>
        <Typography variant="body2" className={classes.advice1}>
          {t('Bridge-EstimatedTime')}
        </Typography>
        <Typography variant="body2" className={classes.value}>
          3 - 30 min
        </Typography>
      </Box>
      <Button onClick={handleDeposit} disabled={isStepping} className={classes.btn}>
        {t('Confirm')}
      </Button>
    </CardContent>
  );
}

export const Confirm = React.memo(_Confirm);
