import { makeStyles } from '@material-ui/core';
import React, { memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchTreasury } from '../data/actions/treasury';
import { selectIsTreasuryLoaded, selectShouldInitTreasury } from '../data/selectors/treasury';
import { DaoExposure } from './components/DaoExposure';
import { DaoHoldings } from './components/DaoHoldings';
import { DaoSummary } from './components/DaoSummary';
import { styles } from './styles';

const useStyles = makeStyles(styles);

export const Treasury = memo(function () {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const shouldInit = useAppSelector(selectShouldInitTreasury);
  const isLoaded = useAppSelector(selectIsTreasuryLoaded);

  useEffect(() => {
    if (shouldInit) {
      dispatch(fetchTreasury());
    }
  }, [dispatch, shouldInit]);

  return (
    <div className={classes.treasury}>
      {isLoaded ? (
        <>
          <DaoSummary />
          <DaoExposure />
          <DaoHoldings />
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
});
