export const config = {
  bsc: {
    name: 'BSC',
    chainId: 56,
    rpc: [
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
    ],
    explorerUrl: 'https://bscscan.com',
    multicallAddress: '0xB94858b0bB5437498F5453A16039337e5Fdc269C',
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
      'DAIe',
      'USDCe',
      'MAI',
      'FRAX',
      'MIM',
    ],
  },
  polygon: {
    name: 'Polygon',
    chainId: 137,
    rpc: ['https://polygon-rpc.com'],
    explorerUrl: 'https://polygonscan.com',
    multicallAddress: '0xC3821F0b56FA4F4794d5d760f94B812DE261361B',
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
      'PAR',
      'EURS',
      'jJPY',
      'JPYC',
    ],
  },
  fantom: {
    name: 'Fantom',
    chainId: 250,
    rpc: ['https://rpcapi.fantom.network'],
    explorerUrl: 'https://ftmscan.com',
    multicallAddress: '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982',
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
    stableCoins: ['USDC', 'USDT', 'DAI', 'fUSDT', 'MIM', 'FRAX', 'MAI', 'DOLA', 'TUSD', 'UST'],
  },
  harmony: {
    name: 'Harmony',
    chainId: 1666600000,
    rpc: ['https://api.s0.t.hmny.io'],
    explorerUrl: 'https://explorer.harmony.one',
    multicallAddress: '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5',
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
    stableCoins: ['BUSD', 'bscBUSD', 'USDC', 'USDT', 'UST', 'DAI', 'FRAX', 'cUSD'],
  },
  arbitrum: {
    name: 'Arbitrum',
    chainId: 42161,
    rpc: ['https://arb1.arbitrum.io/rpc'],
    explorerUrl: 'https://arbiscan.io',
    multicallAddress: '0x13aD51a6664973EbD0749a7c84939d973F247921',
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
    stableCoins: ['cUSD', 'cEUR', 'DAI'],
  },
  moonriver: {
    name: 'Moonriver',
    chainId: 1285,
    rpc: ['https://rpc.moonriver.moonbeam.network'],
    explorerUrl: 'https://blockscout.moonriver.moonbeam.network',
    multicallAddress: '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460',
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
    explorerUrl: 'https://explorer.mainnet.aurora.dev',
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
      blockExplorerUrls: ['https://explorer.mainnet.aurora.dev/'],
    },
    stableCoins: ['USDC', 'USDT'],
  },
};
