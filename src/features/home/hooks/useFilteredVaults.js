import useLocalStorage from '../../../hooks/useLocalStorage';
import { isEmpty, isObject } from '../../../helpers/utils';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const FILTER_STORAGE_KEY = 'homeSortConfig';
export const FILTER_DEFAULT = {
  version: 2, // Bump+1 to force end user reset (e.g. if keys change)
  key: 'default',
  direction: 'desc',
  keyword: '',
  retired: false,
  zero: false,
  deposited: false,
  boost: false,
  platform: 'all',
  vault: 'all',
  blockchain: 'all',
  category: 'all',
};

const SORT_COMPARE_FUNCTIONS = {
  apy: compareNumber,
  safetyScore: compareNumberCoerced,
  tvl: compareBigNumber,
  name: compareStringCaseInsensitive,
};

function compareNumber(a, b) {
  return (a > b) - (a < b);
}

function compareNumberCoerced(a, b) {
  return compareNumber(parseFloat(a), parseFloat(b));
}

function compareStringCaseInsensitive(a, b) {
  const lowercaseA = a.toLowerCase();
  const lowercaseB = b.toLowerCase();
  return (lowercaseA > lowercaseB) - (lowercaseA < lowercaseB);
}

function compareBigNumber(a, b) {
  if (a.lt(b)) return -1;
  if (a.gt(b)) return 1;
  return 0;
}

function isStoredConfigValid(stored) {
  if (!isObject(stored)) {
    return false;
  }

  return !(!stored.version || stored.version < FILTER_DEFAULT.version);
}

function selectVaults(state) {
  return state.vaultReducer.pools;
}

function selectAddress(state) {
  return state.walletReducer.address;
}

function selectTokenBalances(state) {
  return state.balanceReducer.tokens;
}

function selectSortValue(key, vault) {
  switch (key) {
    case 'apy': {
      return vault.apy?.totalApy ?? 0;
    }
    default: {
      return vault[key];
    }
  }
}

function sortVaults(vaults, key, direction) {
  if (key in SORT_COMPARE_FUNCTIONS) {
    return vaults.sort((a, b) => {
      const valueA = selectSortValue(key, a);
      const valueB = selectSortValue(key, b);
      return SORT_COMPARE_FUNCTIONS[key](valueA, valueB) * (direction === 'asc' ? 1 : -1);
    });
  }

  return vaults;
}

function hasWalletBalance(token, tokenBalances) {
  if (token in tokenBalances) {
    const balance256 = tokenBalances[token].balance;
    // shortcut instead of byDecimals
    if (balance256 && balance256 !== '0') {
      return true;
    }
  }

  return false;
}

function keepVault(vault, config, address, tokenBalances) {
  if (config.retired) {
    // hide non-retired
    if (vault.status !== 'eol') {
      return false;
    }
  } else {
    // hide retired
    if (vault.status === 'eol') {
      return false;
    }
  }

  // hide when no wallet balance of deposit token
  if (config.zero && address && !hasWalletBalance(vault.token, tokenBalances)) {
    return false;
  }

  // hide when not deposited in vault (i.e. have no mooToken)
  if (config.deposited && address && !hasWalletBalance(vault.earnedToken, tokenBalances)) {
    return false;
  }

  // hide when vault is not boosted
  // TODO handle once boost implemented
  if (config.boost && !vault.boost) {
    return false;
  }

  // hide when selected platform does not match
  if (
    config.platform !== 'all' &&
    (isEmpty(vault.platform) || config.platform.toLowerCase() !== vault.platform.toLowerCase())
  ) {
    return false;
  }

  // hide when vault type does not match
  if (config.vault !== 'all' && config.vault !== vault.vaultType) {
    return false;
  }

  // hide network does not match
  if (config.blockchain !== 'all' && vault.network !== config.blockchain) {
    return false;
  }

  // hide when category/tag does not match
  if (config.category !== 'all' && !vault.tags.includes(config.category)) {
    return false;
  }

  // hide when name does not include keyword
  if (!vault.name.toLowerCase().includes(config.keyword)) {
    return false;
  }

  // default show
  return true;
}

function useSortedVaults(vaults, key, direction) {
  return useMemo(() => {
    return sortVaults(vaults, key, direction);
  }, [vaults, key, direction]);
}

function useFilteredVaults(vaults, config, address, tokenBalances) {
  return useMemo(() => {
    return vaults.filter(vault => keepVault(vault, config, address, tokenBalances));
  }, [vaults, config, address, tokenBalances]);
}

function useVaultsArray() {
  const allVaults = useSelector(selectVaults);
  return useMemo(() => Object.values(allVaults), [allVaults]);
}

function useVaults() {
  const allVaults = useVaultsArray();
  const address = useSelector(selectAddress);
  const tokenBalances = useSelector(selectTokenBalances);
  const [config, setConfig] = useLocalStorage(
    FILTER_STORAGE_KEY,
    FILTER_DEFAULT,
    isStoredConfigValid
  );
  const filteredVaults = useFilteredVaults(allVaults, config, address, tokenBalances);
  const sortedVaults = useSortedVaults(filteredVaults, config.key, config.direction);

  return [sortedVaults, config, setConfig, filteredVaults.length, allVaults.length];
}

export default useVaults;
