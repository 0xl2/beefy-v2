import { OneInchZapConfig } from '../../features/data/apis/config-types';
import { ZapFee } from '../../features/data/apis/transact/transact-types';

// Note: Applying fee not yet implemented
const fee: ZapFee = {
  original: 0.05 / 100, // 0.05%
  discounted: 0,
};

export const zaps: OneInchZapConfig[] = [
  {
    zapAddress: '0xF815E5f5Ed70f8a88F5f17a5a3F4f1C9c829776B',
    chainId: 'polygon',
    fee,
    depositFromTokens: ['MATIC', 'WMATIC', 'USDC', 'USDT', 'DAI', 'MAI', 'ETH', 'WBTC'],
    withdrawToTokens: ['MATIC', 'BIFI', 'USDC', 'USDT', 'DAI', 'MAI', 'ETH', 'WBTC'],
    blockedTokens: [
      'S*USDC',
      'S*USDT',
      'SOLACE',
      'beQI',
      'jCAD',
      'TOMB',
      'cxADA',
      'cxDOGE',
      'jSGD',
      '4EUR',
      'jJPY',
      'jNZD',
    ],
    blockedVaults: [],
  },
  {
    zapAddress: '0xddcAF38D2Ae216f7B86af7A12A174CbE168B034b',
    chainId: 'fantom',
    fee,
    depositFromTokens: ['FTM', 'WFTM', 'USDC', 'fUSDT', 'DAI', 'MIM', 'MAI', 'WETH', 'WBTC'],
    withdrawToTokens: ['FTM', 'BIFI', 'USDC', 'fUSDT', 'DAI', 'MIM', 'MAI', 'WETH', 'WBTC'],
    blockedTokens: ['SOLACE', 'binSPIRIT', 'S*USDC', 'USDL', 'FTML'],
    blockedVaults: ['geist-ftm'],
  },
  {
    zapAddress: '0x7B4d6d79DE44Fe034f75BD4525a13aaEFAF4597F',
    chainId: 'optimism',
    fee,
    depositFromTokens: ['ETH', 'WETH', 'OP', 'USDC', 'USDT', 'DAI', 'MAI', 'sUSD', 'sETH', 'WBTC'],
    withdrawToTokens: ['ETH', 'OP', 'BIFI', 'USDC', 'USDT', 'DAI', 'MAI', 'sUSD', 'sETH', 'WBTC'],
    blockedTokens: [
      'SNX-hSNX LP',
      'ETH-hETH LP',
      'DAI-hDAI LP',
      'USDC-hUSDC LP',
      'USDT-hUSDT LP',
      'beVELO',
      'beOPX',
      'S*USDC',
      'S*ETH',
      'jEUR',
    ],
    blockedVaults: ['aavev3-op-eth'],
  },
  {
    zapAddress: '0x4B0A66dEe9ff557f9b0c25c3e57086495f570e65',
    chainId: 'avax',
    fee,
    depositFromTokens: ['AVAX', 'WAVAX', 'USDC', 'USDT', 'DAI', 'MIM', 'MAI', 'ETH', 'WBTC'],
    withdrawToTokens: ['AVAX', 'BIFI', 'USDC', 'USDT', 'DAI', 'MIM', 'MAI', 'ETH', 'WBTC'],
    blockedTokens: ['beJOE', 'S*USDC', 'S*USDT', 'AVAXL', 'FIEF'],
    blockedVaults: ['aavev3-avax'],
  },
  {
    zapAddress: '0xb80318Aab313D54274358EEC637f18aFfd03DF8b',
    chainId: 'arbitrum',
    fee,
    depositFromTokens: ['ETH', 'WETH', 'USDC', 'USDT', 'DAI', 'MIM', 'WBTC'],
    withdrawToTokens: ['ETH', 'BIFI', 'USDC', 'USDT', 'DAI', 'MIM', 'WBTC'],
    blockedTokens: ['S*ETH', 'S*USDC', 'S*USDT', 'FISH'],
    blockedVaults: [],
  },
  {
    zapAddress: '0xD586Fc2cD0075e272142B76192a17693c4662fc4',
    chainId: 'bsc',
    fee,
    depositFromTokens: ['BNB', 'WBNB', 'BUSD', 'USDC', 'USDT', 'DAI', 'ETH', 'BTCB'],
    withdrawToTokens: ['BNB', 'BIFI', 'BUSD', 'USDC', 'USDT', 'DAI', 'ETH', 'BTCB'],
    blockedTokens: [
      'beltBTC',
      'beltBNB',
      'beltETH',
      'S*USDT',
      'S*BUSD',
      'TOFY',
      'PALM',
      'sALPACA',
      'ibALPACA',
      'ZBTC',
      'mCOIN',
      'ICA',
      'SWTH',
      'TEN',
      'GOLD',
      'CRUSH',
      'GOLDCOIN',
      'LONG',
      'AURO',
      'pOPEN',
      'GOAL',
      'SALT',
      'FET',
      'jBRL',
      'BRZw',
      'jCHF',
    ],
    blockedVaults: ['venus-bnb', 'venus-wbnb'],
  },
  {
    zapAddress: '0x6b7886D72436522CE9664b5d77B6745f1A726C96',
    chainId: 'aurora',
    fee,
    depositFromTokens: ['ETH', 'WETH', 'USDC', 'USDT', 'WBTC'],
    withdrawToTokens: ['ETH', 'BIFI', 'USDC', 'USDT', 'WBTC'],
    blockedTokens: [],
    blockedVaults: [],
  },
  {
    zapAddress: '0x46c7308567B527647853d3F94d40Ce82ed27f325',
    chainId: 'ethereum',
    fee,
    depositFromTokens: ['ETH', 'WETH', 'USDC', 'USDT', 'DAI', 'WBTC', 'MIM'],
    withdrawToTokens: ['ETH', 'USDC', 'USDT', 'WBTC', 'DAI', 'MIM'],
    blockedTokens: [],
    blockedVaults: [],
  },
];
