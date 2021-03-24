import {MultiCall} from 'eth-multicall';
import {HOME_FETCH_POOLS_BEGIN, HOME_FETCH_POOLS_SUCCESS, HOME_FETCH_POOLS_SUCCESS_WDATA} from "../constants";
import BigNumber from "bignumber.js";
import {config} from '../../../config/config';

const vaultAbi = require('../../../config/abi/vault.json');

const getPoolsForNetwork = async (network) => {
    const p = await import('../../../config/vault/' + network);
    return getFormattedPools(p.pools);
}

const getFormattedPools = (pools) => {
    for (let key in pools) {

        pools[key].deposited = 0;
        pools[key].balance = 0;
        pools[key].daily = 0;
        pools[key].apy = 0;
        pools[key].tvl = 0;
        pools[key].lastUpdated = 0;
    }

    return pools;
}

const getPoolData = async (state, dispatch) => {
    const web3 = state.walletReducer.rpc;
    const pools = state.vaultReducer.pools;
    const prices = state.pricesReducer.prices;
    const apy = state.pricesReducer.apy;
    const isDataLoading = state.vaultReducer.isDataLoading;

    if(Object.keys(prices).length === 0 || isDataLoading) {
        return false;
    }

    console.log('redux getPoolData() processing...');

    const multicall = new MultiCall(web3, config[state.walletReducer.network].multicallAddress);
    const calls = [];

    for (let key in pools) {
        const tokenContract = new web3.eth.Contract(vaultAbi, pools[key].earnedTokenAddress);
        calls.push({id: pools[key].id, balance: tokenContract.methods.balance()});
    }

    const response = await multicall.all([calls]);
    let totalTvl = 0;

    for (let key in pools) {
        const balance = new BigNumber(response[0][key].balance);
        const price = (pools[key].oracleId in prices) ? prices[pools[key].oracleId] : 0;
        pools[key].tvl = balance.times(price).dividedBy(new BigNumber(10).exponentiatedBy(pools[key].tokenDecimals));
        pools[key].apy = apy[pools[key].id];
        totalTvl = new BigNumber(totalTvl).plus(pools[key].tvl);
    }

    dispatch({
        type: HOME_FETCH_POOLS_SUCCESS_WDATA,
        payload: {
            pools: pools,
            totalTvl: totalTvl,
            isPoolsLoading: false,
            isDataLoading: false,
            lastUpdated: new Date().getTime()
        }
    });

    return true;
}

const fetchPools = () => {
    console.log('redux fetchPools() called.');
    return async (dispatch, getState) => {
        dispatch({
            type: HOME_FETCH_POOLS_BEGIN,
        });

        const state = getState();
        let pools = await getPoolsForNetwork(state.walletReducer.network);

        dispatch({
            type: HOME_FETCH_POOLS_SUCCESS,
            payload: {pools: pools, isDataLoading: false}
        });
    };
}

const fetchPoolsData = () => {
    return async (dispatch, getState) => {
        const fetch = async () => {
            console.log('redux getPoolData() called.');
            const state = getState();
            return state.walletReducer.rpc ? await getPoolData(state, dispatch) : false;
        }

        const start = async () => {
            const state = getState();
            const done = await fetch();
            console.log('done', done, Object.keys(state.pricesReducer.prices).length);

            if(!done) {
                setTimeout(async () => {
                    await start();
                }, 500);
            }
        }

        return await start();
    };
}

const obj = {
    fetchPools,
    fetchPoolsData,
}

export default obj
