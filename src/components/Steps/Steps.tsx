import React from 'react';
import { Box, IconButton, makeStyles, Snackbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { isEmpty } from '../../helpers/utils';
import { styles } from './styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import clsx from 'clsx';
import { formatBigDecimals } from '../../helpers/format';
import { useAppDispatch, useAppSelector } from '../../store';
import { BridgeInfo } from './components/BridgeInfo';
import { TransactionLink } from './components/TransactionLink';
import { Button } from '../Button';
import { selectMintResult, selectSteperState } from '../../features/data/selectors/stepper';
import { stepperActions } from '../../features/data/reducers/wallet/stepper';

const useStyles = makeStyles(styles);

const _Steps = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const walletActionsState = useAppSelector(state => state.user.walletActions);
  const bridgeModalStatus = useAppSelector(state => state.ui.bridgeModal.status);
  const steps = useAppSelector(selectSteperState);

  const needShowBridgeInfo = bridgeModalStatus === 'loading' || bridgeModalStatus === 'confirming';

  const handleClose = React.useCallback(() => {
    dispatch(stepperActions.reset());
  }, [dispatch]);

  React.useEffect(() => {
    if (
      !isEmpty(steps.items[steps.currentStep]) &&
      steps.modal &&
      steps.items[steps.currentStep].pending === false
    ) {
      dispatch(stepperActions.updateCurrentStep({ pending: true }));
      dispatch(steps.items[steps.currentStep].action);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, steps.currentStep]);

  const isTxInProccess = steps.items.length > 1 && !steps.finished;

  return (
    <>
      {steps && (
        <Snackbar
          key={steps.currentStep}
          open={steps.modal}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          autoHideDuration={6000}
          className={classes.snackbar}
        >
          <Box className={classes.snackbarContainer}>
            <Box className={classes.topBar}>
              <Box
                className={clsx({
                  [classes.progressBar]: true,
                  [classes.progressBar25]: steps.items.length > 1 && !steps.finished,
                  [classes.progressBar50]: bridgeModalStatus === 'loading' || isTxInProccess,
                  [classes.progressBar75]:
                    bridgeModalStatus === 'confirming' ||
                    (isTxInProccess &&
                      walletActionsState.result === 'success_pending' &&
                      steps.items[steps.currentStep].step !== 'bridge'),
                  [classes.errorBar]: walletActionsState.result === 'error',
                  [classes.confirmationBar]: walletActionsState.result === 'success_pending',
                  [classes.successBar]:
                    bridgeModalStatus === 'success' ||
                    (steps.finished && steps.items[steps.currentStep].step !== 'bridge'),
                })}
              />
            </Box>
            <Box className={classes.contentContainer}>
              <Box className={classes.titleContainer}>
                <div className={classes.title}>
                  {/* Error  */}
                  {walletActionsState.result === 'error' && (
                    <>
                      <img
                        className={classes.icon}
                        src={require('../../images/icons/error.svg').default}
                        alt="error"
                      />
                      {t('Transactn-Error')}
                    </>
                  )}
                  {/* Waiting  */}
                  {(needShowBridgeInfo ||
                    (!steps.finished && walletActionsState.result === 'success_pending')) &&
                    t('Transactn-ConfirmPending')}
                  {/* Transactions  */}
                  {!steps.finished &&
                    walletActionsState.result !== 'error' &&
                    walletActionsState.result !== 'success_pending' &&
                    `${steps.currentStep} / ${steps.items.length} ${t('Transactn-Confirmed')} `}

                  {steps.finished && (
                    <>
                      {steps.items[steps.currentStep].step === 'deposit' && t('Deposit-Done')}
                      {steps.items[steps.currentStep].step === 'withdraw' && t('Withdraw-Done')}
                      {steps.items[steps.currentStep].step === 'claim-withdraw' &&
                        t('Withdraw-Done')}
                      {steps.items[steps.currentStep].step === 'claim-unstake' &&
                        t('Claim-Unstake-Done')}
                      {steps.items[steps.currentStep].step === 'stake' && t('Stake-Done')}
                      {steps.items[steps.currentStep].step === 'unstake' && t('Unstake-Done')}
                      {steps.items[steps.currentStep].step === 'claim-boost' && t('Claim-Done')}
                      {steps.items[steps.currentStep].step === 'claim-gov' && t('Claim-Done')}
                      {steps.items[steps.currentStep].step === 'mint' && t('Mint-Done')}
                      {steps.items[steps.currentStep].step === 'burn' && t('Burn-Done')}
                      {steps.items[steps.currentStep].step === 'bridge' &&
                        bridgeModalStatus === 'success' &&
                        t('Bridge-Done')}
                    </>
                  )}
                </div>
                <IconButton className={classes.closeIcon} onClick={handleClose}>
                  <CloseRoundedIcon fontSize="small" htmlColor="#8A8EA8" />
                </IconButton>
              </Box>
              {/* Steps Count Content */}
              {!isEmpty(steps.items[steps.currentStep]) &&
                walletActionsState.result !== 'error' &&
                walletActionsState.result !== 'success_pending' &&
                !steps.finished && (
                  <div className={classes.message}>{steps.items[steps.currentStep].message}</div>
                )}
              {/* Waiting Content */}
              {(needShowBridgeInfo ||
                (!steps.finished && walletActionsState.result === 'success_pending')) && (
                <div className={classes.message}>{t('Transactn-Wait')}</div>
              )}
              {/* Error content */}
              {!steps.finished && walletActionsState.result === 'error' && (
                <>
                  <Box className={clsx(classes.content, classes.errorContent)}>
                    {walletActionsState.data.error.friendlyMessage ? (
                      <div className={classes.friendlyMessage}>
                        {walletActionsState.data.error.friendlyMessage}
                      </div>
                    ) : null}
                    <div className={classes.message}>{walletActionsState.data.error.message}</div>
                  </Box>
                  <Button
                    borderless={true}
                    fullWidth={true}
                    className={classes.closeBtn}
                    onClick={handleClose}
                  >
                    {t('Transactn-Close')}
                  </Button>
                </>
              )}
              {!isEmpty(steps.items[steps.currentStep]) &&
                steps.items[steps.currentStep].step === 'bridge' &&
                (walletActionsState.result === 'success_pending' ||
                  walletActionsState.result === 'success') && <BridgeInfo steps={steps} />}

              {/* Steps finished */}
              {steps.finished && (
                <>
                  {/* Succes deposit */}
                  {steps.items[steps.currentStep].step === 'deposit' &&
                    walletActionsState.result === 'success' && (
                      <>
                        <Box className={clsx(classes.content, classes.successContent)}>
                          <div className={classes.message}>
                            {t('Transactn-Success', {
                              amount: formatBigDecimals(walletActionsState.data.amount, 2),
                              token: walletActionsState.data.token.symbol,
                            })}
                          </div>
                          <TransactionLink />
                        </Box>
                        <Box mt={2}>
                          <div className={classes.message}>
                            <span>{t('Remember')}</span> {t('Remember-Msg')}
                          </div>
                        </Box>
                      </>
                    )}
                  {/* Success Withdraw */}
                  {(steps.items[steps.currentStep].step === 'withdraw' ||
                    steps.items[steps.currentStep].step === 'claim-withdraw') &&
                    walletActionsState.result === 'success' && (
                      <>
                        <Box className={clsx(classes.content, classes.successContent)}>
                          <div className={classes.message}>
                            {t('Transactn-Withdrawal', {
                              amount: formatBigDecimals(walletActionsState.data.amount, 2),
                              token: walletActionsState.data.token.symbol,
                            })}
                          </div>
                          <TransactionLink />
                        </Box>
                      </>
                    )}
                  {/* Boost Success */}
                  {steps.items[steps.currentStep].step === 'stake' &&
                    walletActionsState.result === 'success' && (
                      <>
                        <Box className={clsx(classes.content, classes.successContent)}>
                          <div className={classes.message}>
                            {t('Transactn-Success-Bst', {
                              amount: formatBigDecimals(walletActionsState.data.amount, 2),
                              token: walletActionsState.data.token.symbol,
                            })}
                          </div>
                          <TransactionLink />
                        </Box>
                        <Box pt={2}>
                          <div className={classes.message}>
                            <span>{t('Remember')}</span> {t('Remember-Msg-Bst')}
                          </div>
                        </Box>
                      </>
                    )}
                  {(steps.items[steps.currentStep].step === 'unstake' ||
                    steps.items[steps.currentStep].step === 'claim-unstake') &&
                    walletActionsState.result === 'success' && (
                      <>
                        <Box className={clsx(classes.content, classes.successContent)}>
                          <div className={classes.message}>
                            {t('Transactn-Withdrawal-Boost', {
                              amount: formatBigDecimals(walletActionsState.data.amount, 2),
                              token: walletActionsState.data.token.symbol,
                            })}
                          </div>
                          <TransactionLink />
                        </Box>
                      </>
                    )}
                  {(steps.items[steps.currentStep].step === 'claim-boost' ||
                    steps.items[steps.currentStep].step === 'claim-gov') &&
                    walletActionsState.result === 'success' && (
                      <>
                        <Box className={clsx(classes.content, classes.successContent)}>
                          <div className={classes.message}>
                            {t(
                              steps.items[steps.currentStep].step === 'claim-boost'
                                ? 'Transactn-Claimed-Boost'
                                : 'Transactn-Claimed-Gov',
                              {
                                amount: formatBigDecimals(walletActionsState.data.amount, 2),
                                token: walletActionsState.data.token.symbol,
                              }
                            )}
                          </div>
                          <TransactionLink />
                        </Box>
                      </>
                    )}
                  {steps.items[steps.currentStep].step === 'mint' &&
                    walletActionsState.result === 'success' && (
                      <>
                        <Box className={clsx(classes.content, classes.successContent)}>
                          <div className={classes.message}>
                            {t(
                              selectMintResult(walletActionsState).type === 'buy'
                                ? 'Transactn-Bought'
                                : 'Transactn-Minted',
                              {
                                amount: selectMintResult(walletActionsState).amount,
                                token: walletActionsState.data.token.symbol,
                              }
                            )}
                          </div>
                          <TransactionLink />
                        </Box>
                      </>
                    )}
                  {steps.items[steps.currentStep].step === 'burn' &&
                    walletActionsState.result === 'success' && (
                      <>
                        <Box className={clsx(classes.content, classes.successContent)}>
                          <div className={classes.message}>
                            {t('Transactn-Burned', {
                              amount: formatBigDecimals(walletActionsState.data.amount, 2),
                              token: walletActionsState.data.token.symbol,
                            })}
                          </div>
                          <TransactionLink />
                        </Box>
                      </>
                    )}
                  {/*
                -By Default we show the close button
                -If current step is 'bridge', we don't show the button until all is done
                */}
                  {steps.items[steps.currentStep].step === 'bridge' ? (
                    bridgeModalStatus === 'success' ? (
                      <Button
                        borderless={true}
                        fullWidth={true}
                        className={classes.closeBtn}
                        onClick={handleClose}
                      >
                        {t('Transactn-Close')}
                      </Button>
                    ) : null
                  ) : (
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
              )}
            </Box>
          </Box>
        </Snackbar>
      )}
    </>
  );
};

export const Steps = React.memo(_Steps);
