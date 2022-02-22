export const config = {
  bsc: {
    name: 'BNB Chain',
    chainId: 56,
    rpc: [
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
    ],
    explorerUrl: 'https://bscscan.com',
    multicallAddress: '0xB94858b0bB5437498F5453A16039337e5Fdc269C',
    fetchContractDataAddress: '0x2e91CfcC1608D4aa278c9D14D6d43C76B43aD42C',
    fetchBalancesAddress: '0xFBB45a5d064556668ae55A3FDa3ccd78Fc515186',
    supportedWallets: [
      'injected',
      'walletconnect',
      'custom-clover',
      'custom-binance',
      'custom-math',
      'custom-twt',
      'custom-safepal',
      'custom-coinbase',
    ],
    providerName: 'binance',
    walletSettings: {
      chainId: `0x${parseInt('56', 10).toString(16)}`,
      chainName: 'BSC Mainnet',
      nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed.binance.org'],
      blockExplorerUrls: ['https://bscscan.com/'],
    },
    stableCoins: [
      'BUSD',
      'USDT',
      'USDC',
      'DAI',
      'VAI',
      'QUSD',
      'UST',
      'VENUS BLP',
      '3EPS',
      'fUSDT',
      '4BELT',
      'IRON',
      'DOLLY',
      'TUSD',
      'USDN',
      'WUSD',
      'USDO',
    ],
  },
  heco: {
    name: 'HECO',
    chainId: 128,
    rpc: ['https://http-mainnet.hecochain.com'],
    explorerUrl: 'https://hecoinfo.com',
    multicallAddress: '0x2776CF9B6E2Fa7B33A37139C3CB1ee362Ff0356e',
    fetchContractDataAddress: '0xA624Ac7824c5038AF0aEf333A6Eedc674E45bF56',
    fetchBalancesAddress: '0xd3C0A4AB6F68e3c12DEc753255b9f769E0bA615b',
    supportedWallets: ['injected', 'custom-clover', 'custom-math', 'custom-wallet-connect'],
    providerName: 'heco',
    walletSettings: {
      chainId: `0x${parseInt('128', 10).toString(16)}`,
      chainName: 'HECO Mainnet',
      nativeCurrency: {
        name: 'Huobi Token',
        symbol: 'HT',
        decimals: 18,
      },
      rpcUrls: ['https://http-mainnet.hecochain.com'],
      blockExplorerUrls: ['https://scan.hecochain.com/'],
    },
    stableCoins: ['USDT', 'HUSD'],
  },
  avax: {
    name: 'Avalanche',
    chainId: 43114,
    rpc: ['https://api.avax.network/ext/bc/C/rpc'],
    explorerUrl: 'https://cchain.explorer.avax.network',
    multicallAddress: '0x6FfF95AC47b586bDDEea244b3c2fe9c4B07b9F76',
    fetchContractDataAddress: '0xeCD68D935Fd331EbA27381929845737346577943',
    fetchBalancesAddress: '0x10c096DD0858a577EBC943F3094341def68834c2',
    supportedWallets: ['injected', 'custom-coinbase', 'custom-wallet-connect'],
    providerName: 'avalanche',
    walletSettings: {
      chainId: `0x${parseInt('43114', 10).toString(16)}`,
      chainName: 'Avalanche C-Chain',
      nativeCurrency: {
        name: 'AVAX',
        symbol: 'AVAX',
        decimals: 18,
      },
      rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
      blockExplorerUrls: ['https://cchain.explorer.avax.network/'],
    },
    stableCoins: [
      'USDT',
      'DAI',
      'BUSD',
      'zDAI',
      'zUSDT',
      'USDTe',
      'BUSDe',
      'USDC',
      'USDCe',
      'DAIe',
      'MAI',
      'FRAX',
      'MIM',
      'nUSD',
    ],
  },
  polygon: {
    name: 'Polygon',
    chainId: 137,
    rpc: ['https://polygon-rpc.com'],
    explorerUrl: 'https://polygonscan.com',
    multicallAddress: '0xC3821F0b56FA4F4794d5d760f94B812DE261361B',
    fetchContractDataAddress: '0x9e369f477F2009394D947ea7571b1E6582Bb0511',
    // could not make it work for polygon, idk why
    //fetchBalancesAddress: '0xEF03BC4C3711bb039c85189f536a35f4d72bC415',
    supportedWallets: ['injected', 'custom-clover', 'walletconnect', 'custom-coinbase'],
    providerName: 'polygon',
    walletSettings: {
      chainId: `0x${parseInt('137', 10).toString(16)}`,
      chainName: 'Polygon Mainnet',
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://rpc-mainnet.matic.network'],
      blockExplorerUrls: ['https://polygonscan.com/'],
    },
    stableCoins: [
      'USDC',
      'USDT',
      'maUSDC',
      'DAI',
      'IRON',
      'MAI',
      'FRAX',
      'rUSD',
      'UST',
      'WUSD',
      'jEUR',
      'jGBP',
      'jCHF',
      'EURt',
      'TUSD',
      'PAR',
      'EURS',
      '4EUR',
      'agEUR',
      'jJPY',
      'JPYC',
      'jCAD',
      'CADC',
    ],
  },
  fantom: {
    name: 'Fantom',
    chainId: 250,
    rpc: ['https://rpcapi.fantom.network'],
    explorerUrl: 'https://ftmscan.com',
    multicallAddress: '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982',
    fetchContractDataAddress: '0x37FF9b4612b9e80E4082e3aC3f5149adDA2d2f21',
    // could not make it work for fantom, idk why
    //fetchBalancesAddress: '0x6cA0E431678979cB9Ffa317310D5db7131345058',
    supportedWallets: ['injected', 'custom-clover', 'custom-coinbase', 'custom-wallet-connect'],
    providerName: 'fantom',
    walletSettings: {
      chainId: `0x${parseInt('250', 10).toString(16)}`,
      chainName: 'Fantom Opera',
      nativeCurrency: {
        name: 'FTM',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: ['https://rpcapi.fantom.network'],
      blockExplorerUrls: ['https://ftmscan.com/'],
    },
    stableCoins: [
      'USDC',
      'USDT',
      'DAI',
      'fUSDT',
      'MIM',
      'FRAX',
      'MAI',
      'DOLA',
      'TUSD',
      'UST',
      'asUSDC',
      'LAMBDA',
    ],
  },
  harmony: {
    name: 'Harmony',
    chainId: 1666600000,
    rpc: ['https://api.s0.t.hmny.io'],
    explorerUrl: 'https://explorer.harmony.one',
    multicallAddress: '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5',
    fetchBalancesAddress: '0xDc34b7e0f1F1512f088D1854a54EAFfD4dCaC7Bd',
    supportedWallets: ['injected', 'custom-wallet-connect'],
    providerName: 'harmony',
    walletSettings: {
      chainId: `0x${parseInt('1666600000', 10).toString(16)}`,
      chainName: 'Harmony One',
      nativeCurrency: {
        name: 'HARMONY',
        symbol: 'ONE',
        decimals: 18,
      },
      rpcUrls: ['https://api.s0.t.hmny.io/'],
      blockExplorerUrls: ['https://explorer.harmony.one/'],
    },
    stableCoins: ['BUSD', 'bscBUSD', 'USDC', 'USDT', 'UST', 'DAI', 'FRAX'],
  },
  arbitrum: {
    name: 'Arbitrum',
    chainId: 42161,
    rpc: ['https://arb1.arbitrum.io/rpc'],
    explorerUrl: 'https://arbiscan.io',
    multicallAddress: '0x13aD51a6664973EbD0749a7c84939d973F247921',
    fetchContractDataAddress: '0xe8EeDE3a063AdF991096E317e916d9AF56cb11B2',
    fetchBalancesAddress: '0xFAC875b16e740c661621fD3A8e3b345ccF3C1eD4',
    supportedWallets: ['injected', 'custom-coinbase', 'custom-wallet-connect'],
    providerName: 'Arbitrum',
    walletSettings: {
      chainId: `0x${parseInt('42161', 10).toString(16)}`,
      chainName: 'Arbitrum One',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://arb1.arbitrum.io/rpc'],
      blockExplorerUrls: ['https://arbiscan.io/'],
    },
    stableCoins: ['USDC', 'USDT', 'MIM'],
  },
  celo: {
    name: 'Celo',
    chainId: 42220,
    rpc: ['https://forno.celo.org'],
    explorerUrl: 'https://explorer.celo.org',
    multicallAddress: '0xa9E6E271b27b20F65394914f8784B3B860dBd259',
    fetchContractDataAddress: '0xB88a3FbB5136d3F1B96aF208ddce5a103D9EaE7A',
    fetchBalancesAddress: '0x18cdaD261A96e7b7F4c5742f4400Bf538A9d6F57',
    supportedWallets: ['injected', 'custom-wallet-connect'],
    providerName: 'Celo',
    walletSettings: {
      chainId: `0x${parseInt('42220', 10).toString(16)}`,
      chainName: 'Celo',
      nativeCurrency: {
        name: 'CELO',
        symbol: 'CELO',
        decimals: 18,
      },
      rpcUrls: ['https://forno.celo.org'],
      blockExplorerUrls: ['https://explorer.celo.org/'],
    },
    stableCoins: ['cUSD', 'cEUR', 'DAI', 'USDC', 'USDT'],
  },
  moonriver: {
    name: 'Moonriver',
    chainId: 1285,
    rpc: ['https://rpc.moonriver.moonbeam.network'],
    explorerUrl: 'https://blockscout.moonriver.moonbeam.network',
    multicallAddress: '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460',
    fetchContractDataAddress: '0xfbD63fadb7B13E0599c3643405276f97217147B2',
    fetchBalancesAddress: '0xA4afDf57663951C6204E5110EE1741e8dfb0F3ec',
    supportedWallets: ['injected', 'custom-wallet-connect'],
    providerName: 'Moonriver',
    walletSettings: {
      chainId: `0x${parseInt('1285', 10).toString(16)}`,
      chainName: 'Moonriver',
      nativeCurrency: {
        name: 'Moonriver',
        symbol: 'MOVR',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.moonriver.moonbeam.network'],
      blockExplorerUrls: ['https://blockscout.moonriver.moonbeam.network/'],
    },
    stableCoins: ['USDC', 'USDT', 'DAI', 'BUSD', 'MAI', 'MIM', 'FRAX'],
  },
  cronos: {
    name: 'Cronos',
    chainId: 25,
    rpc: ['https://evm-cronos.crypto.org'],
    explorerUrl: 'https://cronos.crypto.org/explorer',
    multicallAddress: '0x13aD51a6664973EbD0749a7c84939d973F247921',
    fetchContractDataAddress: '0x985024de164CbBd5BCFD0bBE48Ac3e16374c0449',
    fetchBalancesAddress: '0xbdF080a701C1ee3335d379B5FB946b63C052ef43',
    supportedWallets: ['injected', 'custom-wallet-connect'],
    providerName: 'Cronos',
    walletSettings: {
      chainId: `0x${parseInt('25', 10).toString(16)}`,
      chainName: 'Cronos',
      nativeCurrency: {
        name: 'CRO',
        symbol: 'CRO',
        decimals: 18,
      },
      rpcUrls: ['https://evm-cronos.crypto.org'],
      blockExplorerUrls: ['https://cronos.crypto.org/explorer/'],
    },
    stableCoins: ['USDC', 'USDT', 'DAI', 'BUSD'],
  },
  fuse: {
    name: 'Fuse',
    chainId: 122,
    rpc: ['https://rpc.fuse.io'],
    explorerUrl: 'https://explorer.fuse.io',
    multicallAddress: '0x4f22BD7CE44b0e0B2681A28e300A7285319de3a0',
    fetchContractDataAddress: '0x9ba7CF356E12369040E3329a906FaA29C0bd9f1A',
    fetchBalancesAddress: '0x51b454309B72665f23B7e5e80479d871231002d3',
    supportedWallets: ['injected', 'custom-wallet-connect'],
    providerName: 'Fuse',
    walletSettings: {
      chainId: `0x${parseInt('122', 10).toString(16)}`,
      chainName: 'Fuse',
      nativeCurrency: {
        name: 'FUSE',
        symbol: 'FUSE',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.fuse.io'],
      blockExplorerUrls: ['https://explorer.fuse.io/'],
    },
    stableCoins: ['fUSD', 'BUSD', 'USDC'],
  },
  metis: {
    name: 'Metis',
    chainId: 1088,
    rpc: ['https://andromeda.metis.io/?owner=1088'],
    explorerUrl: 'https://andromeda-explorer.metis.io',
    multicallAddress: '0x4fd2e1c2395dc088F36cab06DCe47F88A912fC85',
    fetchContractDataAddress: '0xA624Ac7824c5038AF0aEf333A6Eedc674E45bF56',
    fetchBalancesAddress: '0xd3C0A4AB6F68e3c12DEc753255b9f769E0bA615b',
    supportedWallets: ['injected', 'custom-wallet-connect'],
    providerName: 'Metis',
    walletSettings: {
      chainId: `0x${parseInt('1088', 10).toString(16)}`,
      chainName: 'Metis',
      nativeCurrency: {
        name: 'METIS',
        symbol: 'METIS',
        decimals: 18,
      },
      rpcUrls: ['https://andromeda.metis.io/?owner=1088'],
      blockExplorerUrls: ['https://andromeda-explorer.metis.io/'],
    },
    stableCoins: ['mUSDT', 'mUSDC'],
  },
  aurora: {
    name: 'Aurora',
    chainId: 1313161554,
    rpc: ['https://mainnet.aurora.dev'],
    explorerUrl: 'https://aurorascan.dev',
    multicallAddress: '0x55f46144bC62e9Af4bAdB71842B62162e2194E90',
    supportedWallets: ['injected'],
    providerName: 'Aurora',
    walletSettings: {
      chainId: `0x${parseInt('1313161554', 10).toString(16)}`,
      chainName: 'Aurora Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.aurora.dev'],
      blockExplorerUrls: ['https://aurorascan.dev/'],
    },
    stableCoins: ['USDC', 'USDT'],
  },
  moonbeam: {
    name: 'Moonbeam',
    chainId: 1284,
    rpc: ['https://rpc.api.moonbeam.network'],
    explorerUrl: 'https://moonscan.io',
    multicallAddress: '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982',
    supportedWallets: ['injected'],
    providerName: 'Moonbeam',
    walletSettings: {
      chainId: `0x${parseInt('1284', 10).toString(16)}`,
      chainName: 'Moonbeam',
      nativeCurrency: {
        name: 'GLMR',
        symbol: 'GLMR',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.api.moonbeam.network'],
      blockExplorerUrls: ['https://moonscan.io/'],
    },
    stableCoins: ['USDC', 'USDT', 'DAI', 'BUSD'],
  },
};

/*
 BOILERPLATE NEW CHAIN
name: '',
chainId:0 ,
rpc: [''],
explorerUrl: '',
multicallAddress: '',
supportedWallets: [''],
providerName: '',
walletSettings: {
chainId: `0x${parseInt('', 10).toString(16)}`,
chainName: '',
nativeCurrency: {
name: '',
symbol: '',
decimals: 0,
},
rpcUrls: [''],
blockExplorerUrls: [''],
},
stableCoins: [''],
 */
