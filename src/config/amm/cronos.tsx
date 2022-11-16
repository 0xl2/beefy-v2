import { AmmConfig } from '../../features/data/apis/config-types';

export const amms: AmmConfig[] = [
  {
    id: 'cronos-vvs',
    name: 'VVS',
    type: 'uniswapv2',
    routerAddress: '0x145863Eb42Cf62847A6Ca784e6416C1682b1b2Ae',
    factoryAddress: '0x3B44B2a187a7b3824131F8db5a74194D0a42Fc15',
    pairInitHash: '0xa77ee1cc0f39570ddde947459e293d7ebc2c30ff4e8fc45860afdcb2c2d3dc17',
    swapFee: 0.003,
    getAmountOutMode: 'getAmountOut',
  },
  {
    id: 'cronos-cronaswap',
    name: 'CronaSwap',
    type: 'uniswapv2',
    routerAddress: '0xcd7d16fB918511BF7269eC4f48d61D79Fb26f918',
    factoryAddress: '0x73A48f8f521EB31c55c0e1274dB0898dE599Cb11',
    pairInitHash: '0xc93158cffa5b575e32566e81e847754ce517f8fa988d3e25cf346d916216e06f',
    swapFee: 0.0025,
    getAmountOutMode: 'getAmountOut',
  },
  {
    id: 'cronos-mmf',
    name: 'MMF',
    type: 'uniswapv2',
    routerAddress: '0x145677FC4d9b8F19B5D56d1820c48e0443049a30',
    factoryAddress: '0xd590cC180601AEcD6eeADD9B7f2B7611519544f4',
    pairInitHash: '0x7ae6954210575e79ea2402d23bc6a59c4146a6e6296118aa8b99c747afec8acf',
    swapFee: 0.0017,
    getAmountOutMode: 'getAmountsOut',
  },
];
