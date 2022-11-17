import React, { memo, useCallback } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { styles } from './styles';
import { Clear } from '@material-ui/icons';
import { useAppDispatch, useAppSelector } from '../../store';
import { filteredVaultsActions } from '../../features/data/reducers/filtered-vaults';
import { selectFilterPopinFilterCount } from '../../features/data/selectors/filtered-vaults';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

export const ProposalBanner = memo(function ProposalBanner() {
  const classes = useStyles();

  const [showProposalBanner, setShowProposalBanner] = React.useState(() => {
    try {
      const storageValue = localStorage.getItem('hideEthBanner');
      return storageValue !== 'true';
    } catch {
      return true;
    }
  });

  const closeBanner = React.useCallback(() => {
    setShowProposalBanner(false);
    try {
      localStorage.setItem('hideEthBanner', 'true');
    } catch (error) {
      // swallow error
    }
  }, [setShowProposalBanner]);

  return (
    <>
      {showProposalBanner ? (
        <div className={classes.container}>
          <Container maxWidth="lg">
            <div className={classes.box}>
              <div className={classes.content}>
                <img
                  className={classes.icon}
                  src={require(`../../images/networks/ethereum.svg`).default}
                  alt="eth"
                />
                <div>
                  Beefy is now deployed on <Eth />! New autocompounding vaults from Convex, Aura and
                  Stargate are already available and more are coming soon.
                </div>
              </div>
              <Clear onClick={closeBanner} className={classes.cross} />
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
});

const Eth = memo(function () {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectFilterPopinFilterCount);
  const { t } = useTranslation();

  const filterEthereum = useCallback(() => {
    if (count > 0) {
      dispatch(filteredVaultsActions.reset());
    }
    dispatch(filteredVaultsActions.setChainIds(['ethereum']));
  }, [count, dispatch]);

  return (
    <span className={classes.link} onClick={filterEthereum}>
      {t('Ethereum')}
    </span>
  );
});
