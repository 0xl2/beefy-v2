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
    }
}
