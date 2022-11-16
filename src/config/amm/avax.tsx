import { AmmConfig } from '../../features/data/apis/config-types';

export const amms: AmmConfig[] = [
  {
    id: 'arbitrum-pangolin',
    name: 'Pangolin',
    type: 'uniswapv2',
    routerAddress: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
    factoryAddress: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
    pairInitHash: '0x40231f6b438bce0797c9ada29b718a87ea0a5cea3fe9a771abdd76bd41a3e545',
    swapFee: 0.003,
    getAmountOutMode: 'getAmountOut',
  },
  {
    id: 'arbitrum-olive',
    name: 'Olive',
    type: 'uniswapv2',
    routerAddress: '0x0c45FB63001b56a21e29c7dcc1727bfDA273a368',
    factoryAddress: '0x4Fe4D8b01A56706Bc6CaD26E8C59D0C7169976b3',
    pairInitHash: '0xb7145948956af92afd2ae97eff039ada60998237282c1687ca23ce1ad5e1d282',
    swapFee: 0.002,
    getAmountOutMode: 'getAmountOut',
  },
  {
    id: 'arbitrum-joe',
    name: 'Joe',
    type: 'uniswapv2',
    routerAddress: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
    factoryAddress: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
    pairInitHash: '0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91',
    swapFee: 0.003,
    getAmountOutMode: 'getAmountOut',
  },
];
