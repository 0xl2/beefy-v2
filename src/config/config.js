export const config = {
    "bsc": {
        name: 'Binance Smart Chain',
        chainId: 56,
        rpc: [
            'https://bsc-dataseed.binance.org',
            'https://bsc-dataseed1.defibit.io',
            'https://bsc-dataseed1.ninicoin.io',
        ],
        multicallAddress: '0xB94858b0bB5437498F5453A16039337e5Fdc269C',
        supportedWallets: ['injected', 'walletconnect', 'custom-binance', 'custom-math', 'custom-twt', 'custom-safepal'],
        providerName: 'binance',
        walletSettings: {
            chainId: `0x${parseInt(56, 10).toString(16)}`,
            chainName: 'BSC Mainnet',
            nativeCurrency: {
                name: 'Binance Coin',
                symbol: 'BNB',
                decimals: 18,
            },
            rpcUrls: ['https://bsc-dataseed.binance.org'],
            blockExplorerUrls: ['https://bscscan.com/'],
        },
        stableCoins: ['BUSD', 'USDT', 'USDC', 'DAI', 'VAI', 'QUSD', 'UST', 'VENUS BLP', '3EPS', 'fUSDT', '4BELT'],
    },
    "heco": {
        name: 'Huobi ECO Chain',
        chainId: 128,
        rpc: [
            'https://http-mainnet.hecochain.com',
        ],
        multicallAddress: '0x2776CF9B6E2Fa7B33A37139C3CB1ee362Ff0356e',
        supportedWallets: ['injected', 'walletconnect', 'custom-math'],
        providerName: 'heco',
        walletSettings: {
            chainId: `0x${parseInt(128, 10).toString(16)}`,
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
    "avax": {
        name: 'Avalanche Chain',
        chainId: 43114,
        rpc: [
            'https://api.avax.network/ext/bc/C/rpc',
        ],
        multicallAddress: '0x6FfF95AC47b586bDDEea244b3c2fe9c4B07b9F76',
        supportedWallets: ['injected', 'walletconnect'],
        providerName: 'avalanche',
        walletSettings: {
            chainId: `0x${parseInt(43114, 10).toString(16)}`,
            chainName: 'Avalanche C-Chain',
            nativeCurrency: {
                name: 'AVAX',
                symbol: 'AVAX',
                decimals: 18,
            },
            rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
            blockExplorerUrls: ['https://cchain.explorer.avax.network/'],
        },
        stableCoins: ['USDT', 'DAI', 'BUSD'],
    },
    "matic": {
        name: 'Polygon Chain',
        chainId: 137,
        rpc: [
            'https://rpc-mainnet.maticvigil.com',
        ],
        multicallAddress: '0xC3821F0b56FA4F4794d5d760f94B812DE261361B',
        supportedWallets: ['injected', 'walletconnect'],
        providerName: 'avalanche',
        walletSettings: {
            chainId: `0x${parseInt(137, 10).toString(16)}`,
            chainName: 'Polygon Mainnet',
            nativeCurrency: {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18,
            },
            rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
            blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com/'],
        },
        stableCoins: ['USDC', 'USDT', 'maUSDC'],
    },
    "ftm": {
        name: 'Fantom',
        chainId: 250,
        rpc: [
            'https://rpcapi.fantom.network',
        ],
        multicallAddress: '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982',
        supportedWallets: ['injected', 'walletconnect'],
        providerName: 'fantom',
        walletSettings: {
            chainId: `0x${parseInt(250, 10).toString(16)}`,
            chainName: 'Fantom Opera',
            nativeCurrency: {
                name: 'FTM',
                symbol: 'FTM',
                decimals: 18,
            },
            rpcUrls: ['https://rpcapi.fantom.network'],
            blockExplorerUrls: ['https://ftmscan.com/'],
        },
        stableCoins: ['USDC', 'USDT', 'DAI', 'fUSDT'],
    },
}
