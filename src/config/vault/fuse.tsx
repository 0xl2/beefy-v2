export const pools = [
  {
    id: "fuse-bifi-gov",
    logo: "single-assets/BIFI.png",
    name: "BIFI Earnings Pool",
    token: "BIFI",
    tokenDescription: "Beefy.Finance",
    tokenAddress: "0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c",
    tokenDecimals: 18,
    tokenDescriptionUrl: "https://docs.beefy.finance/moo/ecosystem/bifi-token/tokenomics-and-governance",
    earnedToken: "WFUSE",
    earnedTokenAddress: "0x0BE9e53fd7EDaC9F859882AfdDa116645287C629",
    earnContractAddress: "0x60a4DedF7fC45F73d9ca46222B016c2d755C79A8",
    poolAddress: "0x60a4DedF7fC45F73d9ca46222B016c2d755C79A8",
    pricePerFullShare: 1,
    isGovVault: true,
    tvl: 0,
    oracle: "tokens",
    oracleId: "BIFI",
    oraclePrice: 0,
    status: "active",
    platform: "Beefy.Finance",
    assets: [
      "BIFI"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_NONE",
      "MCAP_SMALL",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "SingleStake",
    callFee: 0.5,
    withdrawalFee: "0%",
    createdAt: 1641686497,
    network: "fuse"
  },
  {
    id: "fuse-fuse",
    logo: "single-assets/FUSE.svg",
    name: "FUSE",
    token: "FUSE",
    tokenDescription: "Beefy Delegator",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooFuse",
    earnedTokenAddress: "0x2C43DBef81ABa6b95799FD2aEc738Cd721ba77f3",
    earnContractAddress: "0x2C43DBef81ABa6b95799FD2aEc738Cd721ba77f3",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "tokens",
    oracleId: "WFUSE",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Fuse",
    assets: [
      "WFUSE"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_NONE",
      "MCAP_LARGE",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "SingleStake",
    withdrawalFee: "0%",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99",
    network: "fuse"
  },
  {
    id: "sushi-wfuse-weth",
    name: "WETH-FUSE LP",
    token: "WETH-FUSE SLP",
    tokenDescription: "SushiSwap",
    tokenAddress: "0x90c3bA00d2F7F15Cd9FDE087538be3A2865E7E2F",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooSushiFUSE-WETH",
    earnedTokenAddress: "0xd4E241053314254e62050aDC84B271F9d2164a16",
    earnContractAddress: "0xd4E241053314254e62050aDC84B271F9d2164a16",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "sushi-wfuse-weth",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "SushiSwap",
    assets: [
      "WETH",
      "FUSE"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_MEDIUM",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.sushi.com/add/0x0BE9e53fd7EDaC9F859882AfdDa116645287C629/0xa722c13135930332Eb3d749B2F0906559D2C5b99",
    buyTokenUrl: "https://app.sushi.com/swap?inputCurrency=0x0BE9e53fd7EDaC9F859882AfdDa116645287C629&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99",
    network: "fuse"
  },
  {
    id: "sushi-sushi-weth",
    name: "SUSHI-WETH LP",
    token: "SUSHI-WETH LP",
    tokenDescription: "SushiSwap",
    tokenAddress: "0xF9C63E6e21d65ba3Cb6B95790F559E8Da1B38764",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooSushiSUSHI-WETH",
    earnedTokenAddress: "0x202D9EA0AeAC4B30f9f4aABd084Fb8C1DE316840",
    earnContractAddress: "0x202D9EA0AeAC4B30f9f4aABd084Fb8C1DE316840",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "sushi-sushi-weth",
    oraclePrice: 0,
    withdrawalFee: "0%",
    status: "paused",
    platform: "SushiSwap",
    assets: [
      "SUSHI",
      "WETH"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_MEDIUM",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.sushi.com/add/0x90708b20ccc1eb95a4fa7c8b18fd2c22a0ff9e78/0xa722c13135930332Eb3d749B2F0906559D2C5b99",
    buyTokenUrl: "https://app.sushi.com/swap?inputCurrency=0x90708b20ccc1eb95a4fa7c8b18fd2c22a0ff9e78&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99",
    network: "fuse"
  },
  {
    id: "sushi-wfuse-usdc",
    name: "FUSE-USDC LP",
    token: "FUSE-USDC LP",
    tokenDescription: "SushiSwap",
    tokenAddress: "0xba9CA720e314F42E17E80991c1d0AFfE47387108",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooSushiFUSE-USDC",
    earnedTokenAddress: "0x87FFA2E1D232d5B98fd4366C311b568c022aE650",
    earnContractAddress: "0x87FFA2E1D232d5B98fd4366C311b568c022aE650",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "sushi-wfuse-usdc",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "SushiSwap",
    assets: [
      "FUSE",
      "USDC"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_MEDIUM",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.sushi.com/add/0x0BE9e53fd7EDaC9F859882AfdDa116645287C629/0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5",
    buyTokenUrl: "https://app.sushi.com/swap?inputCurrency=0x0BE9e53fd7EDaC9F859882AfdDa116645287C629&outputCurrency=0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5",
    network: "fuse"
  },
  {
    id: "voltage-wfuse-usdc",
    name: "USDC-FUSE LP",
    token: "USDC-FUSE LP",
    tokenDescription: "Voltage",
    tokenAddress: "0x9f17b1895633E855b8b1C1D0Ade9B3B72EB0590C",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooFuseFiUSDC-FUSE",
    earnedTokenAddress: "0x98d3913474fccEDeB63077237914be00202fB007",
    earnContractAddress: "0x98d3913474fccEDeB63077237914be00202fB007",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "voltage-wfuse-usdc",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "Voltage",
    assets: [
      "USDC",
      "FUSE"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_MEDIUM",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.fuse.fi/#/add/FUSE/0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5",
    network: "fuse"
  },
  {
    id: "voltage-wfuse-ust",
    name: "UST-FUSE LP",
    token: "UST-FUSE LP",
    tokenDescription: "Voltage",
    tokenAddress: "0x53B1B8Fb8bE9aA94076e6B29fb9D08bd9ced2D30",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooVoltageFUSE-UST",
    earnedTokenAddress: "0x99b36431E236267D4e8998383fFF6747950311c0",
    earnContractAddress: "0x99b36431E236267D4e8998383fFF6747950311c0",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "voltage-wfuse-ust",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "Voltage",
    assets: [
      "UST",
      "FUSE"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_SMALL",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.fuse.fi/#/add/FUSE/0x0D58a44be3dCA0aB449965dcc2c46932547Fea2f",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0x0D58a44be3dCA0aB449965dcc2c46932547Fea2f",
    network: "fuse"
  },
  {
    id: "voltage-luna-ust",
    name: "LUNA-UST LP",
    token: "LUNA-UST LP",
    tokenDescription: "Voltage",
    tokenAddress: "0x44cB3a602AE57b60A5dc808a44544Ab9ec8dDB36",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooVoltageLUNA-UST",
    earnedTokenAddress: "0x9814b2BDe7b2874C5124B0D6b8C741E81BcEE829",
    earnContractAddress: "0x9814b2BDe7b2874C5124B0D6b8C741E81BcEE829",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "voltage-luna-ust",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "Voltage",
    assets: [
      "LUNA",
      "UST"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_LARGE",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.fuse.fi/#/add/0x588e24DEd8f850b14BB2e62E9c50A7Cd5Ee13Da9/0x0D58a44be3dCA0aB449965dcc2c46932547Fea2f",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=0x0D58a44be3dCA0aB449965dcc2c46932547Fea2f&outputCurrency=0x588e24DEd8f850b14BB2e62E9c50A7Cd5Ee13Da9",
    network: "fuse"
  },
  {
    id: "voltage-wfuse-weth",
    name: "WETH-FUSE LP",
    token: "WETH-FUSE LP",
    tokenDescription: "Voltage",
    tokenAddress: "0x75e24462108E49B71278c93b49B35A5837c0547C",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooFuseFiWETH-FUSE",
    earnedTokenAddress: "0x7c7B7FbccA5699175003ecbe1B41E79F40385469",
    earnContractAddress: "0x7c7B7FbccA5699175003ecbe1B41E79F40385469",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "voltage-wfuse-weth",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "Voltage",
    assets: [
      "WETH",
      "FUSE"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_LARGE",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.fuse.fi/#/add/FUSE/0xa722c13135930332Eb3d749B2F0906559D2C5b99",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99",
    network: "fuse"
  },
  {
    id: "voltage-wfuse-g$",
    name: "G$-FUSE LP",
    token: "G$-FUSE LP",
    tokenDescription: "Voltage",
    tokenAddress: "0x8d441C2Ff54C015A1BE22ad88e5D42EFBEC6C7EF",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooFuseFiG$-FUSE",
    earnedTokenAddress: "0xa5aaE3a55cA356C62b5425AA4bFC212542B17777",
    earnContractAddress: "0xa5aaE3a55cA356C62b5425AA4bFC212542B17777",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "voltage-wfuse-g$",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "Voltage",
    assets: [
      "G",
      "FUSE"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_LARGE",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.fuse.fi/#/add/FUSE/0x495d133B938596C9984d462F007B676bDc57eCEC",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0x495d133B938596C9984d462F007B676bDc57eCEC",
    network: "fuse"
  },
  {
    id: "voltage-fusd-bnb",
    name: "fUSD-BNB LP",
    token: "fUSD-BNB LP",
    tokenDescription: "Voltage",
    tokenAddress: "0x123e18262642a090b209A9CdD5bC5DFA03d734D1",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooFuseFifUSD-BNB",
    earnedTokenAddress: "0x3dE0279f183f9C9eFCD19C60c1f83288B50dB659",
    earnContractAddress: "0x3dE0279f183f9C9eFCD19C60c1f83288B50dB659",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "voltage-fusd-bnb",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "Voltage",
    assets: [
      "fUSD",
      "BNB"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_LARGE",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.fuse.fi/#/add/0x6acb34b1Df86E254b544189Ec32Cf737e2482058/0x249BE57637D8B013Ad64785404b24aeBaE9B098B",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=0x6acb34b1Df86E254b544189Ec32Cf737e2482058&outputCurrency=0x249BE57637D8B013Ad64785404b24aeBaE9B098B",
    network: "fuse"
  },
  {
    id: "voltage-wfuse-busd",
    name: "BUSD-FUSE LP",
    token: "BUSD-FUSE LP",
    tokenDescription: "Voltage",
    tokenAddress: "0x2e7DeDEfC1b40eb2C935A5d07ACDb8F8a9B2A91D",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooFuseFiBUSD-FUSE",
    earnedTokenAddress: "0xF9eBb381dC153D0966B2BaEe776de2F400405755",
    earnContractAddress: "0xF9eBb381dC153D0966B2BaEe776de2F400405755",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "voltage-wfuse-busd",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "Voltage",
    assets: [
      "BUSD",
      "FUSE"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_LARGE",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.fuse.fi/#/add/FUSE/0x6a5F6A8121592BeCd6747a38d67451B310F7f156",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0x6a5F6A8121592BeCd6747a38d67451B310F7f156",
    network: "fuse"
  },
  {
    id: "voltage-wfuse-fusd",
    name: "fUSD-FUSE LP",
    token: "fUSD-FUSE LP",
    tokenDescription: "Voltage",
    tokenAddress: "0xcDd8964BA8963929867CAfFCf5942De4F085bFB7",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooFuseFifUSD-FUSE",
    earnedTokenAddress: "0x9712b6aff7d2dB96097565EB8b2183b75e839130",
    earnContractAddress: "0x9712b6aff7d2dB96097565EB8b2183b75e839130",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "voltage-wfuse-fusd",
    oraclePrice: 0,
    withdrawalFee: "0%",
    depositsPaused: false,
    status: "active",
    platform: "Voltage",
    assets: [
      "fUSD",
      "FUSE"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_LARGE",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.fuse.fi/#/add/FUSE/0x249BE57637D8B013Ad64785404b24aeBaE9B098B",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0x249BE57637D8B013Ad64785404b24aeBaE9B098B",
    network: "fuse"
  },
  {
    id: "voltage-wbtc-weth",
    name: "WETH-WBTC LP",
    token: "WETH-WBTC LP",
    tokenDescription: "Voltage",
    tokenAddress: "0x79FB917292f841Ab64941C04aCDf5F9059aa24E7",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooFuseFiWETH-WBTC",
    earnedTokenAddress: "0x8d81807F19b97FA86EecaB32F1376645FBB4d2F9",
    earnContractAddress: "0x8d81807F19b97FA86EecaB32F1376645FBB4d2F9",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "voltage-wbtc-weth",
    oraclePrice: 0,
    withdrawalFee: "0.01%",
    depositsPaused: false,
    status: "active",
    platform: "Voltage",
    assets: [
      "WETH",
      "WBTC"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "MCAP_LARGE",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://app.fuse.fi/#/add/0x33284f95ccb7B948d9D352e1439561CF83d8d00d/0xa722c13135930332Eb3d749B2F0906559D2C5b99",
    buyTokenUrl: "https://app.fuse.fi/#/swap?inputCurrency=0x33284f95ccb7B948d9D352e1439561CF83d8d00d&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99",
    network: "fuse"
  }
];