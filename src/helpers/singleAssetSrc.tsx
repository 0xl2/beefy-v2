import { TokenEntity } from '../features/data/entities/token';
import { ChainEntity } from '../features/data/entities/chain';

const singleAssetRequire = require.context('../images/single-assets', true, /\.(svg|webp|png)$/);
const singleAssets = Object.fromEntries(
  singleAssetRequire.keys().map(path => [path.substring(2, path.lastIndexOf('.')), path])
);
const singleAssetCache = {};

//Regex expression to get a token that does exist but contains a dot (.) in the name; eg WETH.e
const Regex = new RegExp('[.]');

export function getSingleAssetSrc(symbol: TokenEntity['id'], chainId?: ChainEntity['id']) {
  symbol = symbol.replace(Regex, '');
  const ids = chainId ? [`${chainId}/${symbol}`, symbol] : [symbol];

  for (const id of ids) {
    if (id in singleAssetCache) {
      return singleAssetCache[id];
    }

    if (id in singleAssets) {
      const asset = singleAssetRequire(singleAssets[id]).default;
      return (singleAssetCache[id] = asset);
    }
  }
}

export function singleAssetExists(symbol: TokenEntity['id'], chainId?: ChainEntity['id']): boolean {
  const ids = chainId ? [`${chainId}/${symbol}`, symbol] : [symbol];

  for (const id of ids) {
    if (id in singleAssets) {
      return true;
    }
  }

  return false;
}
