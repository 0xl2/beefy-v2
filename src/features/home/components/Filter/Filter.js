import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import styles from './styles';
import LabeledDropdown from 'components/LabeledDropdown';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { getAvailableNetworks } from 'helpers/utils';
import { ToggleButton } from '@material-ui/lab';

const useStyles = makeStyles(styles);

const Filter = ({ sortConfig, setSortConfig, defaultFilter, platforms, vaultCount }) => {
  const classes = useStyles();
  const t = useTranslation().t;
  const [filterOpen, setFilterOpen] = useState(false);

  const handleCheckbox = event => {
    setSortConfig({
      ...sortConfig,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (name, value) => {
    setSortConfig({ ...sortConfig, [name]: value });
  };

  const getPlatformTypes = () => {
    return {
      all: t('Filter-DropdwnDflt'),
      ...platforms,
    };
  };

  const getVaultTypes = () => {
    return {
      all: t('Filter-DropdwnDflt'),
      single: t('Filter-AsstSingle'),
      stable: t('Filter-AsstStableLP'),
      stables: t('Filter-AsstStables'),
    };
  };

  const getNetworkTypes = () => {
    return {
      all: t('Filter-DropdwnDflt'),
      ...getAvailableNetworks(),
    };
  };

  return (
    <>
      <Grid container spacing={2} className={classes.categories}>
        <Grid item xs={12}>
          <Typography variant={'h4'}>{t('Filter-Categories')}</Typography>
        </Grid>
        <Grid item xs>
          <Button
            className={sortConfig.category === 'all' ? classes.selected : classes.all}
            fullWidth={true}
            disabled={sortConfig.category === 'all'}
            onClick={() => handleChange('category', 'all')}
          >
            <Typography className={classes.text}>{t('Filter-CatgryAll')}</Typography>
            {sortConfig.category === 'all' ? <ArrowDropDownIcon /> : ''}
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            className={sortConfig.category === 'stable' ? classes.selected : classes.stable}
            fullWidth={true}
            disabled={sortConfig.category === 'stable'}
            onClick={() => handleChange('category', 'stable')}
          >
            <Typography className={classes.text}>{t('Filter-CatgryStabl')}</Typography>
            {sortConfig.category === 'stable' ? <ArrowDropDownIcon /> : ''}
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            className={sortConfig.category === 'beefy' ? classes.selected : classes.recent}
            fullWidth={true}
            disabled={sortConfig.category === 'beefy'}
            onClick={() => handleChange('category', 'beefy')}
          >
            <Typography className={classes.text}>{t('Filter-CatgryBeefy')}</Typography>
            {sortConfig.category === 'beefy' ? <ArrowDropDownIcon /> : ''}
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            className={sortConfig.category === 'bluechip' ? classes.selected : classes.bluechip}
            fullWidth={true}
            disabled={sortConfig.category === 'bluechip'}
            onClick={() => handleChange('category', 'bluechip')}
          >
            <Typography className={classes.text}>{t('Filter-CatgryBlue')}</Typography>
            {sortConfig.category === 'bluechip' ? <ArrowDropDownIcon /> : ''}
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            className={sortConfig.category === 'low' ? classes.selected : classes.low}
            fullWidth={true}
            disabled={sortConfig.category === 'low'}
            onClick={() => handleChange('category', 'low')}
          >
            <Typography className={classes.text}>{t('Filter-CatgryLowRsk')}</Typography>
            {sortConfig.category === 'low' ? <ArrowDropDownIcon /> : ''}
          </Button>
        </Grid>
      </Grid>
      <Box className={classes.filtersContainer}>
        <Box className={classes.searchContainer}>
          <TextField
            className={classes.searchInput}
            size="small"
            variant="outlined"
            label={t('Filter-Search')}
            value={sortConfig.keyword}
            onChange={e => handleChange('keyword', e.target.value)}
            InputProps={{ className: classes.input }}
          />
        </Box>
        <Box className={classes.sortByContainer}>
          <LabeledDropdown
            list={{
              default: t('Filter-SortDflt'),
              apy: t('APY'),
              tvl: t('TVL'),
              safetyScore: t('Filter-SortSafety'),
            }}
            selected={sortConfig.key}
            handler={e => handleChange('key', e.target.value)}
            label={t('Filter-Sort')}
            selectStyle={{ minWidth: 230 }}
          />
        </Box>
        <Box className={classes.btnFilter}>
          <ToggleButton
            className={classes.blockBtn}
            value={filterOpen}
            selected={filterOpen}
            onChange={() => {
              setFilterOpen(!filterOpen);
            }}
          >
            {t('Filter-Btn')}
            {filterOpen ? <ArrowDropDownIcon /> : ''}
          </ToggleButton>
        </Box>
      </Box>
      <AnimateHeight duration={500} height={filterOpen ? 'auto' : 0}>
        <Box className={classes.filters}>
          <Box display="flex">
            <Box className={classes.checkboxes}>
              <FormGroup row>
                <FormControlLabel
                  label={t('Filter-HideZero')}
                  control={
                    <Checkbox
                      checked={sortConfig.zero}
                      onChange={handleCheckbox}
                      name="zero"
                      color="primary"
                    />
                  }
                />
                <FormControlLabel
                  label={t('Filter-Retired')}
                  control={
                    <Checkbox
                      checked={sortConfig.retired}
                      onChange={handleCheckbox}
                      name="retired"
                      color="primary"
                    />
                  }
                />
                <FormControlLabel
                  label={t('Filter-Deposited')}
                  control={
                    <Checkbox
                      checked={sortConfig.deposited}
                      onChange={handleCheckbox}
                      name="deposited"
                      color="primary"
                    />
                  }
                />
                <FormControlLabel
                  label={t('Filter-Boost')}
                  control={
                    <Checkbox
                      checked={sortConfig.boost}
                      onChange={handleCheckbox}
                      name="boost"
                      color="primary"
                    />
                  }
                />
              </FormGroup>
            </Box>
            <Box className={classes.lblShowing}>
              {t('Filter-Showing', {
                number: vaultCount.showing,
                count: vaultCount.total,
              })}
            </Box>
          </Box>

          <Box className={classes.filtersContainer}>
            <Box className={classes.selectors}>
              <Box className={classes.selector}>
                <LabeledDropdown
                  list={getPlatformTypes()}
                  selected={sortConfig.platform}
                  handler={e => handleChange('platform', e.target.value)}
                  label={t('Filter-Platform')}
                />
              </Box>
              <Box className={classes.selector}>
                <LabeledDropdown
                  list={getVaultTypes()}
                  selected={sortConfig.vault}
                  handler={e => handleChange('vault', e.target.value)}
                  label={t('Filter-Type')}
                />
              </Box>
              <Box className={classes.selector}>
                <LabeledDropdown
                  list={getNetworkTypes()}
                  selected={sortConfig.blockchain}
                  handler={e => handleChange('blockchain', e.target.value)}
                  label={t('Filter-Blockchn')}
                />
              </Box>
            </Box>
            <Box className={classes.btnFilter}>
              <Button
                className={classes.btnReset}
                variant={'contained'}
                onClick={() => {
                  setSortConfig(defaultFilter);
                }}
              >
                {t('Filter-Reset')}
              </Button>
            </Box>
          </Box>
        </Box>
      </AnimateHeight>
    </>
  );
};

export default Filter;
