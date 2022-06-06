export const pools = [
  {
    id: 'arbi-bifi-gov',
    logo: 'single-assets/BIFI.png',
    name: 'BIFI Earnings Pool',
    token: 'BIFI',
    tokenDescription: 'Beefy.Finance',
    tokenAddress: '0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE',
    tokenDecimals: 18,
    tokenDescriptionUrl:
      'https://docs.beefy.finance/moo/ecosystem/bifi-token/tokenomics-and-governance',
    earnedToken: 'WETH',
    earnedTokenAddress: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    earnedTokenDecimals: 18,
    earnContractAddress: '0x48F4634c8383aF01BF71AefBC125eb582eb3C74D',
    pricePerFullShare: 1,
    isGovVault: true,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BIFI',
    oraclePrice: 0,
    status: 'active',
    platform: 'Beefy.Finance',
    excluded: 'arbi-bifi-maxi',
    assets: ['BIFI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_SMALL',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    callFee: 0.5,
    withdrawalFee: '0%',
    createdAt: 1623706144,
    network: 'arbitrum',
  },
  {
    id: 'spell-mim-crv',
    logo: 'uncategorized/MIM2CRV.svg',
    name: 'MIM/USDC/USDT',
    token: 'MIM2CRV',
    tokenDescription: 'Curve (MIM)',
    tokenAddress: '0x30dF229cefa463e991e29D42DB0bae2e122B2AC7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooAbrcdbrMIM-2CRV',
    earnedTokenAddress: '0xDa2307A45D298e855415675bF388e2bd64351D5b',
    earnContractAddress: '0xDa2307A45D298e855415675bF388e2bd64351D5b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-arb-mim',
    oraclePrice: 0,
    status: 'active',
    platform: 'MIM',
    assets: ['MIM', 'USDC', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
      'OVER_COLLAT_ALGO_STABLECOIN',
    ],
    stratType: 'StratMultiLP',
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://arbitrum.curve.fi/factory/0/deposit',
    network: 'arbitrum',
    createdAt: 1633276273,
  },
  {
    id: 'sushi-arb-spell-weth',
    name: 'SPELL-ETH LP',
    token: 'SPELL-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x8f93Eaae544e8f5EB077A1e09C1554067d9e2CA8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiSPELL-WETH',
    earnedTokenAddress: '0x149f3dDeB5FF9bE7342D07C35D6dA19Df3F790af',
    earnContractAddress: '0x149f3dDeB5FF9bE7342D07C35D6dA19Df3F790af',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-spell-weth',
    oraclePrice: 0,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['SPELL', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    network: 'arbitrum',
    createdAt: 1632254179,
  },
  {
    id: 'sushi-arb-weth-mim',
    name: 'MIM-ETH LP',
    token: 'MIM-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xb6DD51D5425861C808Fd60827Ab6CFBfFE604959',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiMIM-WETH',
    earnedTokenAddress: '0x80514CfB7cb438F1f997Ab62fFD1314c1a1c0f12',
    earnContractAddress: '0x80514CfB7cb438F1f997Ab62fFD1314c1a1c0f12',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-weth-mim',
    oraclePrice: 0,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['MIM', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
      'OVER_COLLAT_ALGO_STABLECOIN',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    network: 'arbitrum',
    createdAt: 1632254301,
  },
  {
    id: 'sushi-arb-eth-usdc',
    name: 'USDC-ETH LP',
    token: 'USDC-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x905dfCD5649217c42684f23958568e533C711Aa3',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiWETH-USDC',
    earnedTokenAddress: '0x07Db98358D58Ba9bE90cd0A18cd86AF807ac3B4E',
    earnContractAddress: '0x07Db98358D58Ba9bE90cd0A18cd86AF807ac3B4E',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-eth-usdc',
    oraclePrice: 0,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['USDC', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    network: 'arbitrum',
    createdAt: 1632243592,
  },
  {
    id: 'curve-arb-tricrypto',
    logo: 'uncategorized/ATRICRYPTO.png',
    name: 'TriCrypto',
    token: 'crv3crypto',
    tokenDescription: 'Curve',
    tokenAddress: '0x8e0B8c8BB9db49a46697F3a5Bb8A308e744821D2',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCurveTriCrypto',
    earnedTokenAddress: '0xF26C10811D602e39580C9448944ddAe7b183fD95',
    earnContractAddress: '0xF26C10811D602e39580C9448944ddAe7b183fD95',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-arb-tricrypto',
    oraclePrice: 0,
    status: 'active',
    platform: 'Curve',
    assets: ['USDT', 'WBTC', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratMultiLP',
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://arbitrum.curve.fi/tricrypto/deposit',
    network: 'arbitrum',
    createdAt: 1652662923,
  },
  {
    id: 'curve-arb-2pool',
    logo: 'uncategorized/crv2pool.png',
    name: 'USDC/USDT',
    token: '2CRV',
    tokenDescription: 'Curve',
    tokenAddress: '0x7f90122BF0700F9E7e1F688fe926940E8839F353',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCurve2Pool',
    earnedTokenAddress: '0xEc7c0205a6f426c2Cb1667d783B5B4fD2f875434',
    earnContractAddress: '0xEc7c0205a6f426c2Cb1667d783B5B4fD2f875434',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-arb-2pool',
    oraclePrice: 0,
    status: 'active',
    platform: 'Curve',
    assets: ['USDT', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratMultiLP',
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://arbitrum.curve.fi/2pool/deposit',
    network: 'arbitrum',
    createdAt: 1652662923,
  },
  {
    id: 'curve-arb-ren',
    logo: 'single-assets/renBTC.svg',
    name: 'WBTC/renBTC',
    token: 'btcCRV',
    tokenDescription: 'Curve',
    tokenAddress: '0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCurveRenBTC',
    earnedTokenAddress: '0x14d07853560436aEe38BE12DD66d944B07D5E59F',
    earnContractAddress: '0x14d07853560436aEe38BE12DD66d944B07D5E59F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-arb-ren',
    oraclePrice: 0,
    status: 'active',
    platform: 'Curve',
    assets: ['WBTC', 'renBTC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratMultiLP',
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://arbitrum.curve.fi/ren/deposit',
    network: 'arbitrum',
    createdAt: 1652662923,
  },
  {
    id: 'sushi-arb-wbtc-weth',
    name: 'WBTC-ETH LP',
    token: 'WBTC-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x515e252b2b5c22b4b2b6Df66c2eBeeA871AA4d69',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiWBTC-WETH',
    earnedTokenAddress: '0xfcDD5a02C611ba6Fe2802f885281500EC95805d7',
    earnContractAddress: '0xfcDD5a02C611ba6Fe2802f885281500EC95805d7',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-wbtc-weth',
    oraclePrice: 0,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['WBTC', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    network: 'arbitrum',
    createdAt: 1632169397,
  },
  {
    id: 'sushi-arb-sushi-eth',
    name: 'SUSHI-ETH LP',
    token: 'SUSHI-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x3221022e37029923aCe4235D812273C5A42C322d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiSUSHI-WETH',
    earnedTokenAddress: '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5',
    earnContractAddress: '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-sushi-eth',
    oraclePrice: 0,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['SUSHI', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0xd4d42f0b6def4ce0383636770ef773390d85c61a/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0xd4d42f0b6def4ce0383636770ef773390d85c61af&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    network: 'arbitrum',
    createdAt: 1632173780,
  },
  {
    id: 'sushi-arb-weth-usdt',
    name: 'USDT-ETH LP',
    token: 'USDT-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xCB0E5bFa72bBb4d16AB5aA0c60601c438F04b4ad',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiUSDT-WETH',
    earnedTokenAddress: '0xE99c8A590c98c7Ae9FB3B7ecbC115D2eBD533B50',
    earnContractAddress: '0xE99c8A590c98c7Ae9FB3B7ecbC115D2eBD533B50',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-weth-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['USDT', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    network: 'arbitrum',
    createdAt: 1632173316,
  },
  {
    id: 'arbi-bifi-maxi',
    logo: 'single-assets/BIFI.png',
    name: 'BIFI Maxi',
    token: 'BIFI',
    tokenDescription: 'Beefy',
    tokenAddress: '0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooArbitrumBIFI',
    earnedTokenAddress: '0x78AB636351c1C5f117C1442B82d14aB3a92F8464',
    earnContractAddress: '0x78AB636351c1C5f117C1442B82d14aB3a92F8464',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BIFI',
    oraclePrice: 0,
    status: 'active',
    platform: 'Beefy',
    assets: ['BIFI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Maxi',
    withdrawalFee: '0.05%',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE',
    network: 'arbitrum',
    createdAt: 1636764972,
  },
  {
    id: 'sushi-arb-magic-weth',
    name: 'MAGIC-ETH LP',
    token: 'MAGIC-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xB7E50106A5bd3Cf21AF210A755F9C8740890A8c9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiMAGIC-ETH',
    earnedTokenAddress: '0x8cbaAC87FDD9Bb6C3FdB5b3C870b2443D0284fa6',
    earnContractAddress: '0x8cbaAC87FDD9Bb6C3FdB5b3C870b2443D0284fa6',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-magic-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['MAGIC', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x539bdE0d7Dbd336b79148AA742883198BBF60342',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&outputCurrency=0x539bdE0d7Dbd336b79148AA742883198BBF60342',
    network: 'arbitrum',
    createdAt: 1639146591,
  },
  {
    id: 'sushi-arb-weth-gohm',
    name: 'gOHM-ETH LP',
    token: 'gOHM-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xaa5bD49f2162ffdC15634c87A77AC67bD51C6a6D',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushigOHM-ETH',
    earnedTokenAddress: '0xD295d690b9BF17bd217B94BC50C12729762C1862',
    earnContractAddress: '0xD295d690b9BF17bd217B94BC50C12729762C1862',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-weth-gohm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['gOHM', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&outputCurrency=0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1',
    network: 'arbitrum',
    createdAt: 1639146342,
  },
  {
    id: 'sushi-arb-weth-link-eol',
    name: 'LINK-ETH LP',
    token: 'LINK-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x7050A8908E2a60899D8788015148241f0993a3FD',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiWETH-LINK',
    earnedTokenAddress: '0xf785Ef43A082C85ABbe19CA888f91748AA604ac5',
    earnContractAddress: '0xf785Ef43A082C85ABbe19CA888f91748AA604ac5',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-weth-link',
    oraclePrice: 0,
    status: 'eol',
    platform: 'SushiSwap',
    assets: ['LINK', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0xf97f4df75117a78c1A5a0DBb814Af92458539FB4/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0xf97f4df75117a78c1A5a0DBb814Af92458539FB4&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    network: 'arbitrum',
    createdAt: 1632249714,
    retireReason: 'rewards',
  },
];
