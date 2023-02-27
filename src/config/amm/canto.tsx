import { AmmConfig } from '../../features/data/apis/config-types';

export const amms: AmmConfig[] = [
  {
    id: 'canto-canto',
    name: 'Canto Dex',
    type: 'solidly',
    routerAddress: '0xa252eEE9BDe830Ca4793F054B506587027825a8e',
    factoryAddress: '0xE387067f12561e579C5f7d4294f51867E0c1cFba',
    pairInitHash: '0x97653931c50be3c0550346c96798d2d21ba0ebddcbc1a6debaa0669b70bb5735',
    minimumLiquidity: '1000',
    swapFeeNumerator: '0', // DYNAMIC factory.getFee(stable);
    swapFeeDenominator: '1',
    getAmountOutMode: 'getAmountOut', // router.getAmountsOut(uint amountIn, route[] memory routes) public view returns (uint[] memory amounts) or pair.getAmountOut(uint256 amountIn, address tokenIn) view returns (uint256)
  },
  {
    id: 'canto-velocimeter',
    name: 'Velocimeter',
    type: 'solidly',
    routerAddress: '0x9B2920e72dF6E1A7053bEa7235c65079F5104398',
    factoryAddress: '0xb12aF64E128A1D4489D13314eB4Df81cBCE126aC',
    pairInitHash: '0x75c20cfd874bd4a16cbb1ed7160d44fd79b9f428a6dcebc43211efda0084b849',
    minimumLiquidity: '1000',
    swapFeeNumerator: '3', // DYNAMIC factory.getFee(stable);
    swapFeeDenominator: '10000',
    getAmountOutMode: 'getAmountOut', // router.getAmountsOut(uint amountIn, route[] memory routes) public view returns (uint[] memory amounts) or pair.getAmountOut(uint256 amountIn, address tokenIn) view returns (uint256)
  },
];
