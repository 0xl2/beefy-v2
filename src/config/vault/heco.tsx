export const pools = [
  {
    id: 'heco-bifi-maxi',
    logo: 'single-assets/BIFI.png',
    name: 'BIFI Maxi',
    token: 'BIFI',
    tokenDescription: 'Beefy.Finance',
    tokenAddress: '0x765277EebeCA2e31912C9946eAe1021199B39C61',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooHecoBIFI',
    earnedTokenAddress: '0x688724Fb44cD7eabF209Ca2B225880033e9563d2',
    earnContractAddress: '0x688724Fb44cD7eabF209Ca2B225880033e9563d2',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BIFI',
    oraclePrice: 0,
    status: 'active',
    platform: 'Beefy.Finance',
    assets: ['BIFI'],
    withdrawalFee: '0.05%',
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Maxi',
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71edc38d189767582c38a3145b5873052c3e47a&outputCurrency=0x765277eebeca2e31912c9946eae1021199b39c61',
    network: 'heco',
  },
  {
    id: 'heco-bifi-gov',
    logo: 'single-assets/BIFI.png',
    name: 'BIFI Earnings Pool',
    token: 'BIFI',
    tokenDescription: 'Beefy.Finance',
    tokenAddress: '0x765277EebeCA2e31912C9946eAe1021199B39C61',
    tokenDecimals: 18,
    tokenDescriptionUrl:
      'https://docs.beefy.finance/moo/ecosystem/bifi-token/tokenomics-and-governance',
    earnedToken: 'HT',
    earnedTokenAddress: '0x5f7347fedfD0b374e8CE8ed19Fc839F59FB59a3B',
    earnContractAddress: '0x5f7347fedfD0b374e8CE8ed19Fc839F59FB59a3B',
    poolAddress: '0x5f7347fedfD0b374e8CE8ed19Fc839F59FB59a3B',
    excluded: 'heco-bifi-maxi',
    pricePerFullShare: 1,
    isGovVault: true,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BIFI',
    oraclePrice: 0,
    status: 'active',
    platform: 'Beefy.Finance',
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
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71edc38d189767582c38a3145b5873052c3e47a&outputCurrency=0x765277eebeca2e31912c9946eae1021199b39c61',
    createdAt: 1623706144,
    network: 'heco',
  },
  {
    id: 'lendhub-btc',
    logo: 'single-assets/HBTC.png',
    name: 'HBTC',
    token: 'HBTC',
    tokenDescription: 'Lendhub',
    tokenAddress: '0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooLendhubBTC',
    earnedTokenAddress: '0xd7C6E2425be8aEE964793C6A192f8cb953fe49cA',
    earnContractAddress: '0xd7C6E2425be8aEE964793C6A192f8cb953fe49cA',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BTC',
    oraclePrice: 0,
    status: 'active',
    platform: 'Lendhub',
    assets: ['BTC'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f&outputCurrency=0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa',
    stratType: 'SingleStake',
    network: 'heco',
  },
  {
    id: 'lendhub-dot',
    logo: 'single-assets/DOT.png',
    name: 'HDOT',
    token: 'HDOT',
    tokenDescription: 'Lendhub',
    tokenAddress: '0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooLendhubDOT',
    earnedTokenAddress: '0x1658C01F9C4D76c80E65Fa6eD4D1f3099F6cDf00',
    earnContractAddress: '0x1658C01F9C4D76c80E65Fa6eD4D1f3099F6cDf00',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'DOT',
    oraclePrice: 0,
    status: 'active',
    platform: 'Lendhub',
    assets: ['DOT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f&outputCurrency=0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    stratType: 'SingleStake',
    network: 'heco',
  },
  {
    id: 'lendhub-eth',
    logo: 'single-assets/ETH.svg',
    name: 'ETH',
    token: 'ETH',
    tokenDescription: 'Lendhub',
    tokenAddress: '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooLendhubETH',
    earnedTokenAddress: '0x9be8485ff97257Aea98A3a9FcfFfD9799F76DeeE',
    earnContractAddress: '0x9be8485ff97257Aea98A3a9FcfFfD9799F76DeeE',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'ETH',
    oraclePrice: 0,
    status: 'active',
    platform: 'Lendhub',
    assets: ['ETH'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f&outputCurrency=0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    stratType: 'SingleStake',
    network: 'heco',
  },
  {
    id: 'lendhub-lhb-wht',
    logo: 'heco/LHB-WHT.png',
    name: 'LHB-WHT LP',
    token: 'LHB-WHT LP',
    tokenDescription: 'Lendhub',
    tokenAddress: '0x8c31344A6cdadEA60715d06b55790F21d967d8D2',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooLendhubLHB-WHT',
    earnedTokenAddress: '0x11AE409Debb169097F984E6BFf2e4c2b6e2F2CAB',
    earnContractAddress: '0x11AE409Debb169097F984E6BFf2e4c2b6e2F2CAB',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'lendhub-lhb-wht',
    oraclePrice: 0,
    status: 'active',
    platform: 'Lendhub',
    assets: ['LHB', 'WHT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F&outputCurrency=0x8F67854497218043E1f72908FFE38D0Ed7F24721',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F/0x8F67854497218043E1f72908FFE38D0Ed7F24721',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'lendhub-lhb-usdt',
    logo: 'usdt-pairs/LHB-USDT.png',
    name: 'LHB-USDT LP',
    token: 'LHB-USDT LP',
    tokenDescription: 'Lendhub',
    tokenAddress: '0x023f375a51Af8645D7446ba5942BAeDc53B0582D',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooLendhubLHB-USDT',
    earnedTokenAddress: '0x19164Be31A34E94F1Bb25D8AD6042af950B89D2B',
    earnContractAddress: '0x19164Be31A34E94F1Bb25D8AD6042af950B89D2B',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'lendhub-lhb-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Lendhub',
    assets: ['LHB', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x8F67854497218043E1f72908FFE38D0Ed7F24721',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71edc38d189767582c38a3145b5873052c3e47a/0x8F67854497218043E1f72908FFE38D0Ed7F24721',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-mdx',
    logo: 'single-assets/MDX.png',
    name: 'MDX',
    token: 'MDX',
    tokenDescription: 'Mdex',
    tokenAddress: '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexMDX',
    earnedTokenAddress: '0xfABDB29A8C1AE335bC65A7505311F8A48223eFaA',
    earnContractAddress: '0xfABDB29A8C1AE335bC65A7505311F8A48223eFaA',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'MDX',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['MDX'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f&outputCurrency=0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c',
    stratType: 'SingleStake',
    network: 'heco',
  },
  {
    id: 'mdex-shib-usdt',
    logo: 'usdt-pairs/SHIB-USDT.png',
    name: 'SHIB-USDT LP',
    token: 'SHIB-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x1c85dD9E5FeE4c40786bd6278255D977946A364b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexSHIB-USDT',
    earnedTokenAddress: '0x951120891258A9F2A6F3c5764E6eb21a948Ab99C',
    earnContractAddress: '0x951120891258A9F2A6F3c5764E6eb21a948Ab99C',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-shib-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['SHIB', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0xc38072aa3f8e049de541223a9c9772132bb48634',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71edc38d189767582c38a3145b5873052c3e47a/0xc38072aa3f8e049de541223a9c9772132bb48634',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-bifi-usdt',
    logo: 'usdt-pairs/BIFI-USDT.png',
    name: 'BIFI-USDT LP',
    token: 'BIFI-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0xe6F7b06ad8B93A21f78E4aCD59f2dac169eA704B',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexBIFI-USDT',
    earnedTokenAddress: '0xD34A51815892368fE96D9730376b2CEdE99F83D8',
    earnContractAddress: '0xD34A51815892368fE96D9730376b2CEdE99F83D8',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-bifi-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['BIFI', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x765277EebeCA2e31912C9946eAe1021199B39C61',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0x765277EebeCA2e31912C9946eAe1021199B39C61/0xa71EdC38d189767582C38A3145b5873052c3e47a',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'hfi-hfi-ht-eol',
    logo: 'heco/HFI-HT.png',
    name: 'HFI-HT LP',
    token: 'HFI-HT LP',
    tokenDescription: 'HFI',
    tokenAddress: '0x0bcCa165E0b6BD92C01c582A822Dc2c87eac4BEC',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooHFIHFI-HT',
    earnedTokenAddress: '0xe8188B9701E6DB1Fe24c75783474D22e5957BBEF',
    earnContractAddress: '0xe8188B9701E6DB1Fe24c75783474D22e5957BBEF',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'hfi-hfi-ht',
    oraclePrice: 0,
    status: 'eol',
    platform: 'HFI',
    assets: ['HFI', 'WHT'],
    withdrawalFee: '0%',
    retireReason: 'rewards',
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f&outputCurrency=0x98fc3b60ed4a504f588342a53746405e355f9347',
    removeLiquidityUrl:
      'https://ht.mdex.com/#/remove/0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f/0x98fc3b60ed4a504f588342a53746405e355f9347',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'hfi-hfi-husd-eol',
    logo: 'heco/HFI-HUSD.png',
    name: 'HFI-HUSD LP',
    token: 'HFI-HUSD LP',
    tokenDescription: 'HFI',
    tokenAddress: '0x8e5A5186c282252c1298c9e3fFB3F944416108f7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooHFIHFI-HUSD',
    earnedTokenAddress: '0xD5ff0aCA943C918EEE069b1E80Ee0D9d016b2F98',
    earnContractAddress: '0xD5ff0aCA943C918EEE069b1E80Ee0D9d016b2F98',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'hfi-hfi-husd',
    oraclePrice: 0,
    status: 'eol',
    platform: 'HFI',
    assets: ['HFI', 'HUSD'],
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0x0298c2b32eae4da002a15f36fdf7615bea3da047&outputCurrency=0x98fc3b60ed4a504f588342a53746405e355f9347',
    removeLiquidityUrl:
      'https://ht.mdex.com/#/remove/0x0298c2b32eae4da002a15f36fdf7615bea3da047/0x98fc3b60ed4a504f588342a53746405e355f9347',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'lava-lava-eol',
    logo: 'heco/LAVA.png',
    name: 'LAVA',
    token: 'LAVA',
    tokenDescription: 'Lavaswap',
    tokenAddress: '0x56f95662E71f30b333b456439248c6dE589082a4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooLavaLAVA',
    earnedTokenAddress: '0xCd22A841e82fdd42FCFFF44ED689fDf6f6ECDEF9',
    earnContractAddress: '0xCd22A841e82fdd42FCFFF44ED689fDf6f6ECDEF9',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'LAVA',
    oraclePrice: 0,
    status: 'eol',
    platform: 'Lavaswap',
    assets: ['LAVA'],
    buyTokenUrl:
      'https://exchange.lavaswap.com/#/swap?inputCurrency=0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f&outputCurrency=0x56f95662e71f30b333b456439248c6de589082a4',
    stratType: 'SingleStake',
    network: 'heco',
  },
  {
    id: 'lava-lava-usdt-eol',
    logo: 'heco/LAVA-USDT.svg',
    name: 'LAVA-USDT LP',
    token: 'LAVA-USDT LP',
    tokenDescription: 'Lavaswap',
    tokenAddress: '0x3f15F2075Aa11bE4757Aa522d133c0DbC7E878Ce',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooLavaLAVA-USDT',
    earnedTokenAddress: '0xc44d493B6219A7f5C286724b74c158CEBd7fB6f7',
    earnContractAddress: '0xc44d493B6219A7f5C286724b74c158CEBd7fB6f7',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'lava-lava-usdt',
    oraclePrice: 0,
    status: 'eol',
    platform: 'Lavaswap',
    assets: ['LAVA', 'USDT'],
    buyTokenUrl:
      'https://exchange.lavaswap.com/#/swap?inputCurrency=0x56f95662e71f30b333b456439248c6de589082a4&outputCurrency=0xa71edc38d189767582c38a3145b5873052c3e47a',
    addLiquidityUrl:
      'https://exchange.lavaswap.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x56f95662E71f30b333b456439248c6dE589082a4',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'lava-lava-wht-eol',
    logo: 'heco/LAVA-HT.svg',
    name: 'LAVA-WHT LP',
    token: 'LAVA-WHT LP',
    tokenDescription: 'Lavaswap',
    tokenAddress: '0xcA65940b931272833307245c0D56aD86087e80a4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooLavaLAVA-WHT',
    earnedTokenAddress: '0xD35ca4abBA932D6d94A3eEe73CaD1F6684cB95Ae',
    earnContractAddress: '0xD35ca4abBA932D6d94A3eEe73CaD1F6684cB95Ae',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'lava-lava-wht',
    oraclePrice: 0,
    status: 'eol',
    platform: 'Lavaswap',
    assets: ['LAVA', 'WHT'],
    buyTokenUrl:
      'https://exchange.lavaswap.com/#/swap?inputCurrency=0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f&outputCurrency=0x56f95662e71f30b333b456439248c6de589082a4',
    addLiquidityUrl:
      'https://exchange.lavaswap.com/#/add/ETH/0x56f95662E71f30b333b456439248c6dE589082a4',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-hbtc-wht',
    logo: 'heco/HBTC-WHT.svg',
    name: 'HBTC-WHT LP',
    token: 'HBTC-WHT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0xBFff969A85e355eE0851b019Dba1e87C7780F40d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexHBTC-WHT',
    earnedTokenAddress: '0xFDafEA4529d609901E6E6CC65b3e2C1C822e223d',
    earnContractAddress: '0xFDafEA4529d609901E6E6CC65b3e2C1C822e223d',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-hbtc-wht',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['HBTC', 'WHT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=HT&outputCurrency=0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    addLiquidityUrl: 'https://ht.mdex.com/#/add/HT/0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-eth-wht',
    logo: 'heco/ETH-WHT.svg',
    name: 'ETH-WHT LP',
    token: 'ETH-WHT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x53E458aD1CFEB9582736db6BdE9aF89948e3bc3d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexETH-WHT',
    earnedTokenAddress: '0x07AD2C13a0D735FA4F8788DC0B6355AaaB2f3407',
    earnContractAddress: '0x07AD2C13a0D735FA4F8788DC0B6355AaaB2f3407',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-eth-wht',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['ETH', 'WHT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=HT&outputCurrency=0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    addLiquidityUrl: 'https://ht.mdex.com/#/add/HT/0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-husd-usdt',
    logo: 'heco/HUSD-USDT.svg',
    name: 'HUSD-USDT LP',
    token: 'HUSD-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0xdff86B408284dff30A7CAD7688fEdB465734501C',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexHUSD-USDT',
    earnedTokenAddress: '0xe6CcE165Aa3e52B2cC55F17b1dBC6A8fe5D66610',
    earnContractAddress: '0xe6CcE165Aa3e52B2cC55F17b1dBC6A8fe5D66610',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-husd-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['HUSD', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-hltc-usdt',
    logo: 'heco/HLTC-USDT.svg',
    name: 'HLTC-USDT LP',
    token: 'HTLC-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x060B4bfcE16D15A943ec83C56C87940613e162eB',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexHLTC-USDT',
    earnedTokenAddress: '0x41D44B276904561Ac51855159516FD4cB2c90968',
    earnContractAddress: '0x41D44B276904561Ac51855159516FD4cB2c90968',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-hltc-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['HLTC', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-hbch-usdt',
    logo: 'heco/HBCH-USDT.svg',
    name: 'HBCH-USDT LP',
    token: 'HBCH-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x1f0eC8e0096e145f2bf2Cb4950Ed7b52d1cbd35f',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexHBCH-USDT',
    earnedTokenAddress: '0xdf68Bf80D427A5827Ff2c06A9c70D407e17DC041',
    earnContractAddress: '0xdf68Bf80D427A5827Ff2c06A9c70D407e17DC041',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-hbch-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['HBCH', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-hdot-usdt',
    logo: 'heco/HDOT-USDT.svg',
    name: 'HDOT-USDT LP',
    token: 'HDOT-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x5484ab0DF3E51187f83F7f6b1a13f7a7Ee98C368',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexHDOT-USDT',
    earnedTokenAddress: '0x2a30C5e0d577108F694d2A96179cd73611Ee069b',
    earnContractAddress: '0x2a30C5e0d577108F694d2A96179cd73611Ee069b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-hdot-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['HDOT', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-hfil-usdt',
    logo: 'heco/HFIL-USDT.svg',
    name: 'HFIL-USDT LP',
    token: 'HFIL-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x600072aF0470d9Ed1D83885D03d17368943fF22A',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexHFIL-USDT',
    earnedTokenAddress: '0x1433c4a55449c8B96cf5Ac0cF395cBd8dc8e5f60',
    earnContractAddress: '0x1433c4a55449c8B96cf5Ac0cF395cBd8dc8e5f60',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-hfil-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['HFIL', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-hpt-usdt',
    logo: 'heco/HPT-USDT.svg',
    name: 'HPT-USDT LP',
    token: 'HPT-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0xdE5b574925EE475c41b99a7591EC43E92dCD2fc1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexHPT-USDT',
    earnedTokenAddress: '0x7a670e849DB824364d1031DEAfB4cD603144F23D',
    earnContractAddress: '0x7a670e849DB824364d1031DEAfB4cD603144F23D',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-hpt-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['HPT', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0xE499Ef4616993730CEd0f31FA2703B92B50bB536',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0xE499Ef4616993730CEd0f31FA2703B92B50bB536',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-lhb-usdt',
    logo: 'heco/LHB-USDT.svg',
    name: 'LHB-USDT LP',
    token: 'LHB-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x023f375a51Af8645D7446ba5942BAeDc53B0582D',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexLHB-USDT',
    earnedTokenAddress: '0x945b2379E29F503a78dBcaB2feEFFE74a6c31E2b',
    earnContractAddress: '0x945b2379E29F503a78dBcaB2feEFFE74a6c31E2b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-lhb-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['LHB', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x8F67854497218043E1f72908FFE38D0Ed7F24721',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x8F67854497218043E1f72908FFE38D0Ed7F24721',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-aave-usdt',
    logo: 'heco/AAVE-USDT.svg',
    name: 'AAVE-USDT LP',
    token: 'AAVE-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0xfAfeAafeFc5F92F22415506e78D9AB1E33C03257',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexAAVE-USDT',
    earnedTokenAddress: '0x6169551074826724CAcd8Deb452BF133403c2036',
    earnContractAddress: '0x6169551074826724CAcd8Deb452BF133403c2036',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-aave-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['AAVE', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x202b4936fE1a82A4965220860aE46d7d3939Bb25',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x202b4936fE1a82A4965220860aE46d7d3939Bb25',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-snx-usdt',
    logo: 'heco/SNX-USDT.svg',
    name: 'SNX-USDT LP',
    token: 'SNX-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0xc7A4C808a29fc8Cd3A8a6848f7F18bED9924C692',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexSNX-USDT',
    earnedTokenAddress: '0x8B1Ca7f3F0838dCd23DA8CFe223eA313739193cb',
    earnContractAddress: '0x8B1Ca7f3F0838dCd23DA8CFe223eA313739193cb',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-snx-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['SNX', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x777850281719d5a96C29812ab72f822E0e09F3Da',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x777850281719d5a96C29812ab72f822E0e09F3Da',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-link-usdt',
    logo: 'heco/LINK-USDT.svg',
    name: 'LINK-USDT LP',
    token: 'LINK-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x52a342015BAa2496A90A9bB6069D7692564132e6',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexLINK-USDT',
    earnedTokenAddress: '0x044e87f30bd9bD961c04028aC69155493E1b9eD0',
    earnContractAddress: '0x044e87f30bd9bD961c04028aC69155493E1b9eD0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-link-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['LINK', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x9e004545c59D359F6B7BFB06a26390b087717b42',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x9e004545c59D359F6B7BFB06a26390b087717b42',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-bal-usdt',
    logo: 'heco/BAL-USDT.svg',
    name: 'BAL-USDT LP',
    token: 'BAL-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0xB6A77CDD31771A4F439622aA36b20cb53C19868C',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexBAL-USDT',
    earnedTokenAddress: '0x666c0b9D37A20235C232081C1C6B2edc70ecC7F3',
    earnContractAddress: '0x666c0b9D37A20235C232081C1C6B2edc70ecC7F3',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-bal-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['BAL', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x045De15Ca76e76426E8Fc7cba8392A3138078D0F',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x045De15Ca76e76426E8Fc7cba8392A3138078D0F',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-yfi-usdt',
    logo: 'heco/YFI-USDT.svg',
    name: 'YFI-USDT LP',
    token: 'YFI-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x64Af3564C6D6BEc5883358c560211EcD0f8d1AC7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexYFI-USDT',
    earnedTokenAddress: '0xbF7421bd2f79643a671b70d1DDE57D452C110CF8',
    earnContractAddress: '0xbF7421bd2f79643a671b70d1DDE57D452C110CF8',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-yfi-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['YFI', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0xB4F019bEAc758AbBEe2F906033AAa2f0F6Dacb35',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0xB4F019bEAc758AbBEe2F906033AAa2f0F6Dacb35',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-uni-usdt',
    logo: 'heco/UNI-USDT.svg',
    name: 'UNI-USDT LP',
    token: 'UNI-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x84455d880af684eb29997B82832dd71EF29c1354',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexUNI-USDT',
    earnedTokenAddress: '0xC422261EdC5dB679CAd9BC403e886351De540e77',
    earnContractAddress: '0xC422261EdC5dB679CAd9BC403e886351De540e77',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-uni-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['UNI', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x22C54cE8321A4015740eE1109D9cBc25815C46E6',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x22C54cE8321A4015740eE1109D9cBc25815C46E6',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-mdx-usdt',
    logo: 'heco/MDX-USDT.png',
    name: 'MDX-USDT LP',
    token: 'MDX-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x615E6285c5944540fd8bd921c9c8c56739Fd1E13',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexMDX-USDT',
    earnedTokenAddress: '0x5c2197149ce7CAb038aB09C45087a09070E32C73',
    earnContractAddress: '0x5c2197149ce7CAb038aB09C45087a09070E32C73',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-mdx-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['MDX', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-mdx-wht',
    logo: 'heco/MDX-WHT.png',
    name: 'MDX-WHT LP',
    token: 'MDX-WHT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x6Dd2993B50b365c707718b0807fC4e344c072eC2',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexMDX-WHT',
    earnedTokenAddress: '0xd93A86BbF40454A7BCD339614fB46C67bE31B908',
    earnContractAddress: '0xd93A86BbF40454A7BCD339614fB46C67bE31B908',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-mdx-wht',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['MDX', 'WHT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=HT&outputCurrency=0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    addLiquidityUrl: 'https://ht.mdex.com/#/add/HT/0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-wht-usdt',
    logo: 'heco/WHT-USDT.png',
    name: 'WHT-USDT LP',
    token: 'WHT-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x499B6E03749B4bAF95F9E70EeD5355b138EA6C31',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexWHT-USDT',
    earnedTokenAddress: '0x2f536faCbC780B9ccA02545d2aA71021d7308c5E',
    earnContractAddress: '0x2f536faCbC780B9ccA02545d2aA71021d7308c5E',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-wht-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['WHT', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=HT&outputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a',
    addLiquidityUrl: 'https://ht.mdex.com/#/add/HT/0xa71EdC38d189767582C38A3145b5873052c3e47a',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-hbtc-usdt',
    logo: 'heco/HBTC-USDT.png',
    name: 'HBTC-USDT LP',
    token: 'HBTC-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0xFBe7b74623e4be82279027a286fa3A5b5280F77c',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexHBTC-USDT',
    earnedTokenAddress: '0x1Ff05E1Fb13931eBE19363441bF10f8c5dCc963E',
    earnContractAddress: '0x1Ff05E1Fb13931eBE19363441bF10f8c5dCc963E',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-hbtc-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['HBTC', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa',
    stratType: 'StratLP',
    network: 'heco',
  },
  {
    id: 'mdex-eth-usdt',
    logo: 'heco/ETH-USDT.png',
    name: 'ETH-USDT LP',
    token: 'ETH-USDT LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0x78C90d3f8A64474982417cDB490E840c01E516D4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMdexETH-USDT',
    earnedTokenAddress: '0x56Fb7dA3025f76d2128Ef1b0D2EEA47Dd45e7C2a',
    earnContractAddress: '0x56Fb7dA3025f76d2128Ef1b0D2EEA47Dd45e7C2a',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-eth-usdt',
    oraclePrice: 0,
    status: 'active',
    platform: 'Mdex',
    assets: ['ETH', 'USDT'],
    buyTokenUrl:
      'https://ht.mdex.com/#/swap?inputCurrency=0xa71EdC38d189767582C38A3145b5873052c3e47a&outputCurrency=0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    addLiquidityUrl:
      'https://ht.mdex.com/#/add/0xa71EdC38d189767582C38A3145b5873052c3e47a/0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    stratType: 'StratLP',
    network: 'heco',
  },
];