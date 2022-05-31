import { createAsyncThunk } from '@reduxjs/toolkit';
import { BeefyState } from '../../../redux-types';
import { TokenAllowance } from '../apis/allowance/allowance-types';
import { FetchAllBalancesResult } from '../apis/balance/balance-types';
import { BridgeInfoEntity, DestChainEntity, TxDataRes } from '../apis/bridge/bridge-types';
import { getAllowanceApi, getBalanceApi, getBridgeApi } from '../apis/instances';
import { ChainEntity } from '../entities/chain';
import { isTokenErc20 } from '../entities/token';
import { selectChainById } from '../selectors/chains';
import { selectTokenByAddress } from '../selectors/tokens';
import { selectCurrentChainId } from '../selectors/wallet';

export interface FetchBridgeChainDataParams {
  chainId: ChainEntity['id'];
}

export interface FetchBridgeChainPayload {
  destChainInfo: BridgeInfoEntity;
}

export const fetchBridgeChainData = createAsyncThunk<
  FetchBridgeChainPayload,
  FetchBridgeChainDataParams,
  { state: BeefyState }
>('bridge/fetchBridgeChainData', async ({ chainId }, { getState }) => {
  const chain = selectChainById(getState(), chainId);
  const api = getBridgeApi();
  const data: BridgeInfoEntity = await api.getBridgeChainData(chain.networkChainId);
  return { destChainInfo: data };
});

export const getBridgeTxData = async (hash: string) => {
  const api = getBridgeApi();
  const res: TxDataRes = await api.getTxStatus(hash);
  return res;
};

interface InitBridgeFormParams {
  walletAddress: string | null;
}

interface InitBridgeFormPayload {
  chainId: ChainEntity['id'];
  walletAddress: string | null;
  balance: FetchAllBalancesResult;
  allowance: TokenAllowance[];
  destChainId: ChainEntity['id'];
  destChainInfo: BridgeInfoEntity;
  state: BeefyState;
}

export const initiateBridgeForm = createAsyncThunk<
  InitBridgeFormPayload,
  InitBridgeFormParams,
  { state: BeefyState }
>('bridge/initiateBridgeForm', async ({ walletAddress }, { getState }) => {
  const state = getState();
  const chainId = selectCurrentChainId(state);
  const chain = selectChainById(state, chainId ?? 'bsc');
  const destChain = selectChainById(state, chain.id === 'bsc' ? 'fantom' : 'bsc');
  const balanceApi = await getBalanceApi(chain);
  const allowanceApi = await getAllowanceApi(chain);
  const bridgeApi = await getBridgeApi();

  const bridgeDataRes: BridgeInfoEntity = await bridgeApi.getBridgeChainData(chain.networkChainId);

  const spenderInfo: DestChainEntity = Object.values(
    bridgeDataRes.destChains[destChain.networkChainId]
  )[0];

  const spenderAddress = spenderInfo.DepositAddress ?? spenderInfo.routerToken;

  const depositToken = selectTokenByAddress(state, chain.id, bridgeDataRes.address);

  const balanceRes: FetchAllBalancesResult = walletAddress
    ? await balanceApi.fetchAllBalances(state, [depositToken], [], [], walletAddress)
    : { tokens: [], govVaults: [], boosts: [] };

  const allowanceRes =
    walletAddress && spenderAddress && isTokenErc20(depositToken)
      ? await allowanceApi.fetchTokensAllowance(
          state,
          [depositToken],
          walletAddress,
          spenderAddress
        )
      : [];

  return {
    chainId: chain.id,
    destChainId: destChain.id,
    walletAddress,
    allowance: allowanceRes,
    balance: balanceRes,
    destChainInfo: bridgeDataRes,
    state: state,
  };
});
