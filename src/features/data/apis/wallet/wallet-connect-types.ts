import Web3 from 'web3';
import { ChainEntity } from '../../entities/chain';

export interface WalletConnectOptions {
  chains: ChainEntity[];
  onWalletDisconnected: () => Promise<unknown> | unknown;
  onConnect: (chainId: ChainEntity['id'], address: string) => Promise<unknown> | unknown;
  onAccountChanged: (address: string) => Promise<unknown> | unknown;
  // we also need to pass down the address because sometimes
  // when user change chain we receive a "disconnect" event before the "chainChanged" event
  onChainChanged: (chainId: ChainEntity['id'], address: string) => Promise<unknown> | unknown;
  onUnsupportedChainSelected: (
    networkChainId: number | string,
    address: string
  ) => Promise<unknown> | unknown;
}

export interface Provider {
  on?: (eventName: string, handler: () => {}) => {};
  removeAllListeners?: () => {};
  request: (req: { method: string; params: any[] }) => Promise<void>;
}

export type initFromLocalCacheResponse = null | {
  chainId: ChainEntity['id'] | null;
  address: string;
};

export interface IWalletConnectApi {
  initFromLocalCache(): Promise<initFromLocalCacheResponse>;
  askUserToConnectIfNeeded();
  askUserForChainChangeIfNeeded(chainId: ChainEntity['id']);
  disconnect();
  // to be used by wallet actions
  getConnectedWeb3Instance(): Promise<Web3>;
}
