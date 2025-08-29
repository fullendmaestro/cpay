interface RootObject {
  app: App;
  asset: Asset;
  blockchains: Blockchains;
  dapps: Dapps2;
  fiat: Fiat;
  migrations: Migrations;
  nft: Nft;
  notification: any[];
  sdkFeatures: SdkFeatures;
  settings: Settings;
  staking: Staking;
  swap: Swap;
  tx: Tx;
  wallet: Wallet;
}

interface Wallet {
  accounts: Rates;
  accountsPerWallet: AccountsPerWallet;
  addressBook: Rates;
  balancesPerWallet: Rates;
  balancesPerWalletAccount: BalancesPerWalletAccount;
  refreshLastRun: number;
  refreshingBalance: boolean;
  selectedAccountId: string;
  switching: boolean;
  walletId: string;
  wallets: Wallets;
}

interface Wallets {
  "3320ad3f-89e6-47f1-93c5-ae0ba885871a": _3320ad3f89e647f193c5ae0ba885871a5;
  "8214dced-a77c-4866-a59f-0c5f978fe366": _3320ad3f89e647f193c5ae0ba885871a5;
}

interface _3320ad3f89e647f193c5ae0ba885871a5 {
  balance: string;
  id: string;
  isImported: boolean;
  name: string;
  registered: boolean;
  seedPhraseBackupRequired: boolean;
  type: string;
  warning: Warning;
}

interface Warning {
  showModal: boolean;
  showWarning: boolean;
}

interface BalancesPerWalletAccount {
  "3320ad3f-89e6-47f1-93c5-ae0ba885871a": _3320ad3f89e647f193c5ae0ba885871a4;
  "8214dced-a77c-4866-a59f-0c5f978fe366": _8214dceda77c4866a59f0c5f978fe3664;
}

interface _8214dceda77c4866a59f0c5f978fe3664 {
  "60d58efc-1bbd-4a05-a901-8bdb02b4857a": _60d58efc1bbd4a05a9018bdb02b4857a2;
  "92fa8dc6-1d7e-406a-b884-6a116e7286e9": _92fa8dc61d7e406ab8846a116e7286e92;
}

interface _92fa8dc61d7e406ab8846a116e7286e92 {
  "48257cec-05a1-48d7-953e-67f30113e328": _48257cec05a148d7953e67f30113e328;
  "4e179581-3625-4b0f-90ef-d9bd96dfd74f": _4e17958136254b0f90efd9bd96dfd74f;
  "a9ce0da4-0a2e-4f15-91ab-2e1583aefe98": _4e17958136254b0f90efd9bd96dfd74f;
  c0: _4e17958136254b0f90efd9bd96dfd74f;
  c19000118: _4e17958136254b0f90efd9bd96dfd74f;
  c20000714: _2092f7886f6841dc9a1a51976f6e2b38;
  c20000714_t0x4B0F1812e5Df2A09796481Ff14017e6005508003: C1024tong;
  c60: _2092f7886f6841dc9a1a51976f6e2b38;
  c966: _4e17958136254b0f90efd9bd96dfd74f;
  "e929ef84-44b6-4e1e-a41d-4a350830e570": _4e17958136254b0f90efd9bd96dfd74f;
}

interface _4e17958136254b0f90efd9bd96dfd74f {
  balance: string;
  bandwidth: Bandwidth;
  blockchainId: string;
  blocked: string;
  claimable: string;
  coinId: number;
  energy: Bandwidth;
  frozen: string;
  inscription: string;
  pending: string;
  reserved: string;
  rewards: string;
  staked: string;
}

interface _48257cec05a148d7953e67f30113e328 {
  balance: string;
  bandwidth: Bandwidth;
  blocked: string;
  claimable: string;
  coinId: number;
  energy: Bandwidth;
  frozen: string;
  inscription: string;
  locked: string;
  pending: string;
  reserved: string;
  rewards: string;
  staked: string;
  transferable: string;
}

interface _60d58efc1bbd4a05a9018bdb02b4857a2 {
  "a9ce0da4-0a2e-4f15-91ab-2e1583aefe98": _2092f7886f6841dc9a1a51976f6e2b38;
  c0: C0;
  c10000025: C0;
  c10000060: C0;
  c10000070: C0;
  c10000100: C0;
  c10000118: C0;
  c10000146: C0;
  c10000250: C0;
  c10000288: C0;
  c10000321: C0;
  c10000324: C0;
  c10000553: C0;
  c10001088: C0;
  c10001101: C0;
  c10001284: C0;
  c10001285: C0;
  c10002020: C0;
  c10002222: C0;
  c10004689: C0;
  c10007000: C0;
  c10008217: C0;
  c10009000: C0;
  c10009001: C0;
  c1001: _2092f7886f6841dc9a1a51976f6e2b38;
  c10042221: C0;
  c1023: C0;
  c1024: _2092f7886f6841dc9a1a51976f6e2b38;
  c1024_tong: C1024tong;
  c1030: C0;
  c118: C0;
  c1323161554: C0;
  c133: C0;
  c136: C0;
  c14: C0;
  c144: C0;
  c145: C0;
  c148: C0;
  c165: _2092f7886f6841dc9a1a51976f6e2b38;
  c169: C0;
  c17: C0;
  c17000118: C0;
  c1729: _2092f7886f6841dc9a1a51976f6e2b38;
  c175: C0;
  c1815: C0;
  c19000118: C0;
  c19167: C0;
  c195: C0;
  c2: C0;
  c20: C0;
  c20000118: C0;
  c20000714: _2092f7886f6841dc9a1a51976f6e2b38;
  c20000714_t0x4B0F1812e5Df2A09796481Ff14017e6005508003: C1024tong;
  c20007000: C0;
  c20009001: C0;
  c204: C0;
  c223: C0;
  c2301: C0;
  c235: C0;
  c242: _2092f7886f6841dc9a1a51976f6e2b38;
  c245022934: C0;
  c2718: C0;
  c283: _2092f7886f6841dc9a1a51976f6e2b38;
  c3: C0;
  c30000118: C0;
  c313: C0;
  c330: C0;
  c354: C0;
  c394: C0;
  c397: _2092f7886f6841dc9a1a51976f6e2b38;
  c40000118: C0;
  c42: C0;
  c4200: C0;
  c425: C0;
  c434: _2092f7886f6841dc9a1a51976f6e2b38;
  c457: C0;
  c459: C0;
  c461: _2092f7886f6841dc9a1a51976f6e2b38;
  c5: C0;
  c500: C0;
  c5000: _2092f7886f6841dc9a1a51976f6e2b38;
  c50000118: C0;
  c500_ttfuel: C500ttfuel;
  c501: C0;
  c508: _2092f7886f6841dc9a1a51976f6e2b38;
  c52752: C0;
  c534352: C0;
  c5600: C0;
  c564: C0;
  c5718350: C0;
  c5741564: C0;
  c59144: C0;
  c60: C0;
  c6001: C0;
  c6060: C0;
  c607: _2092f7886f6841dc9a1a51976f6e2b38;
  c61: _2092f7886f6841dc9a1a51976f6e2b38;
  c637: _2092f7886f6841dc9a1a51976f6e2b38;
  c714: C0;
  c74: _2092f7886f6841dc9a1a51976f6e2b38;
  c784: _2092f7886f6841dc9a1a51976f6e2b38;
  c810180: C0;
  c81457: C0;
  c818: _2092f7886f6841dc9a1a51976f6e2b38;
  c818_t0x0000000000000000000000000000456E65726779: C1024tong;
  c820: C0;
  c8453: _2092f7886f6841dc9a1a51976f6e2b38;
  c889: _2092f7886f6841dc9a1a51976f6e2b38;
  c90000118: C0;
  c931: C0;
  c966: _2092f7886f6841dc9a1a51976f6e2b38;
  "e929ef84-44b6-4e1e-a41d-4a350830e570": _2092f7886f6841dc9a1a51976f6e2b38;
}

interface _3320ad3f89e647f193c5ae0ba885871a4 {
  "56a011fc-7297-4f61-be88-1e347a22e133": _56a011fc72974f61be881e347a22e1332;
}

interface _56a011fc72974f61be881e347a22e1332 {
  "2092f788-6f68-41dc-9a1a-51976f6e2b38": _2092f7886f6841dc9a1a51976f6e2b38;
  c0: C0;
  c10000025: C0;
  c10000060: C0;
  c10000070: C0;
  c10000100: C0;
  c10000118: C0;
  c10000146: C0;
  c10000250: _2092f7886f6841dc9a1a51976f6e2b38;
  c10000288: _2092f7886f6841dc9a1a51976f6e2b38;
  c10000321: C0;
  c10000324: C0;
  c10000553: C0;
  c10001088: C0;
  c10001101: C0;
  c10001284: C0;
  c10001285: C0;
  c10002020: C0;
  c10002222: C0;
  c10004689: C0;
  c10007000: C0;
  c10008217: C0;
  c10009000: _2092f7886f6841dc9a1a51976f6e2b38;
  c10009001: _2092f7886f6841dc9a1a51976f6e2b38;
  c1001: C0;
  c10042221: _2092f7886f6841dc9a1a51976f6e2b38;
  c1023: _2092f7886f6841dc9a1a51976f6e2b38;
  c1024: _2092f7886f6841dc9a1a51976f6e2b38;
  c1024_tong: C1024tong;
  c1030: _2092f7886f6841dc9a1a51976f6e2b38;
  c118: C0;
  c1323161554: _2092f7886f6841dc9a1a51976f6e2b38;
  c133: C0;
  c136: C0;
  c14: C0;
  c144: C0;
  c145: _2092f7886f6841dc9a1a51976f6e2b38;
  c148: C0;
  c165: _2092f7886f6841dc9a1a51976f6e2b38;
  c169: C0;
  c17: C0;
  c17000118: _2092f7886f6841dc9a1a51976f6e2b38;
  c1729: C0;
  c175: C0;
  c1815: C0;
  c19000118: C0;
  c19167: C0;
  c195: C0;
  c2: C0;
  c20: _2092f7886f6841dc9a1a51976f6e2b38;
  c20000118: C0;
  c20000714: C0;
  c20000714_t0x4B0F1812e5Df2A09796481Ff14017e6005508003: C1024tong;
  c20007000: C0;
  c20009001: C0;
  c204: C0;
  c223: _2092f7886f6841dc9a1a51976f6e2b38;
  c2301: C0;
  c235: C0;
  c242: C0;
  c245022934: C0;
  c2718: C0;
  c283: _2092f7886f6841dc9a1a51976f6e2b38;
  c3: C0;
  c30000118: C0;
  c313: C0;
  c330: C0;
  c354: C0;
  c394: C0;
  c397: C0;
  c40000118: C0;
  c42: C0;
  c4200: C0;
  c425: _2092f7886f6841dc9a1a51976f6e2b38;
  c434: C0;
  c457: C0;
  c459: C0;
  c461: _2092f7886f6841dc9a1a51976f6e2b38;
  c5: C0;
  c500: C0;
  c5000: C0;
  c50000118: C0;
  c500_ttfuel: C500ttfuel;
  c501: C0;
  c508: C0;
  c52752: _2092f7886f6841dc9a1a51976f6e2b38;
  c534352: C0;
  c5600: C0;
  c564: _2092f7886f6841dc9a1a51976f6e2b38;
  c5718350: C0;
  c5741564: C0;
  c59144: C0;
  c60: C0;
  c6001: _2092f7886f6841dc9a1a51976f6e2b38;
  c6060: C0;
  c607: C0;
  c61: _2092f7886f6841dc9a1a51976f6e2b38;
  c637: _2092f7886f6841dc9a1a51976f6e2b38;
  c714: C0;
  c74: C0;
  c784: C0;
  c810180: C0;
  c81457: _2092f7886f6841dc9a1a51976f6e2b38;
  c818: C0;
  c818_t0x0000000000000000000000000000456E65726779: C1024tong;
  c820: _2092f7886f6841dc9a1a51976f6e2b38;
  c8453: _2092f7886f6841dc9a1a51976f6e2b38;
  c889: C0;
  c90000118: C0;
  c931: C0;
  c966: C0;
  "cc40457e-c214-40bd-a067-8e2808ce0d0b": _2092f7886f6841dc9a1a51976f6e2b38;
}

interface C500ttfuel {
  address: string;
  balance: string;
  blockchainId: string;
  blocked: string;
  claimable: string;
  coinId: number;
  frozen: string;
  pending: string;
  reserved: string;
  rewards: string;
  staked: string;
}

interface C1024tong {
  address: string;
  balance: string;
  bandwidth: Bandwidth;
  blockchainId: string;
  blocked: string;
  claimable: string;
  coinId: number;
  energy: Bandwidth;
  frozen: string;
  pending: string;
  reserved: string;
  rewards: string;
  staked: string;
}

interface C0 {
  balance: string;
  blockchainId: string;
  blocked: string;
  claimable: string;
  coinId: number;
  frozen: string;
  pending: string;
  reserved: string;
  rewards: string;
  staked: string;
}

interface _2092f7886f6841dc9a1a51976f6e2b38 {
  balance: string;
  bandwidth: Bandwidth;
  blockchainId: string;
  blocked: string;
  claimable: string;
  coinId: number;
  energy: Bandwidth;
  frozen: string;
  pending: string;
  reserved: string;
  rewards: string;
  staked: string;
}

interface Bandwidth {
  amount: string;
  limit: string;
}

interface AccountsPerWallet {
  "3320ad3f-89e6-47f1-93c5-ae0ba885871a": _3320ad3f89e647f193c5ae0ba885871a3;
  "8214dced-a77c-4866-a59f-0c5f978fe366": _8214dceda77c4866a59f0c5f978fe3663;
}

interface _8214dceda77c4866a59f0c5f978fe3663 {
  "60d58efc-1bbd-4a05-a901-8bdb02b4857a": _60d58efc1bbd4a05a9018bdb02b4857a;
  "92fa8dc6-1d7e-406a-b884-6a116e7286e9": _92fa8dc61d7e406ab8846a116e7286e9;
}

interface _92fa8dc61d7e406ab8846a116e7286e9 {
  coinsRegistered: boolean;
  coinsRegisteredMap: CoinsRegisteredMap2;
  derivationIndex: number;
  id: string;
  items: Items3;
  name: string;
  registered: boolean;
}

interface Items3 {
  "0": _0;
  "2": _0;
  "3": _0;
  "5": _0;
  "14": _0;
  "17": _0;
  "20": _0;
  "22": _0;
  "60": _0;
  "61": _0;
  "74": _0;
  "118": _0;
  "133": _0;
  "136": _0;
  "144": _0;
  "145": _0;
  "148": _0;
  "156": _0;
  "165": _0;
  "169": _0;
  "175": _0;
  "194": _0;
  "195": _0;
  "204": _0;
  "223": _0;
  "235": _0;
  "242": _0;
  "283": _0;
  "304": _0;
  "309": _0;
  "313": _0;
  "330": _0;
  "354": _0;
  "394": _0;
  "396": _0;
  "397": _0;
  "425": _0;
  "434": _0;
  "457": _0;
  "459": _0;
  "461": _0;
  "474": _0;
  "483": _0;
  "494": _0;
  "500": _0;
  "501": _0;
  "508": _0;
  "564": _0;
  "607": _0;
  "637": _0;
  "714": _0;
  "784": _0;
  "818": _0;
  "820": _0;
  "888": _0;
  "889": _0;
  "899": _0;
  "931": _0;
  "966": _0;
  "996": _0;
  "1001": _0;
  "1023": _0;
  "1024": _0;
  "1030": _0;
  "1729": _0;
  "1815": _0;
  "2017": _0;
  "2301": _0;
  "2718": _0;
  "4200": _0;
  "5000": _0;
  "5600": _0;
  "6001": _0;
  "6060": _0;
  "8453": _0;
  "8964": _0;
  "18000": _0;
  "19167": _0;
  "52752": _0;
  "59144": _0;
  "81457": _0;
  "534352": _0;
  "810180": _0;
  "5718350": _0;
  "5741564": _0;
  "10000025": _0;
  "10000060": _0;
  "10000070": _0;
  "10000100": _0;
  "10000118": _0;
  "10000145": _0;
  "10000146": _0;
  "10000250": _0;
  "10000288": _0;
  "10000321": _0;
  "10000324": _0;
  "10000330": _0;
  "10000553": _0;
  "10000714": _0;
  "10001088": _0;
  "10001101": _0;
  "10001284": _0;
  "10001285": _0;
  "10002020": _0;
  "10002222": _0;
  "10004689": _0;
  "10007000": _0;
  "10008217": _0;
  "10009000": _0;
  "10009001": _0;
  "10042221": _0;
  "17000118": _0;
  "19000118": _0;
  "20000118": _0;
  "20000714": _0;
  "20007000": _0;
  "20009001": _0;
  "30000118": _0;
  "30000714": _0;
  "40000118": _0;
  "50000118": _0;
  "90000118": _0;
  "245022934": _0;
  "1323161554": _0;
}

interface CoinsRegisteredMap2 {
  "60": boolean;
  "10042221": boolean;
}

interface _60d58efc1bbd4a05a9018bdb02b4857a {
  coinsRegistered: boolean;
  coinsRegisteredMap: CoinsRegisteredMap;
  derivationIndex: number;
  id: string;
  items: Items2;
  name: string;
  registered: boolean;
}

interface CoinsRegisteredMap {
  "60": boolean;
  "19000118": boolean;
}

interface _3320ad3f89e647f193c5ae0ba885871a3 {
  "56a011fc-7297-4f61-be88-1e347a22e133": _56a011fc72974f61be881e347a22e133;
}

interface _56a011fc72974f61be881e347a22e133 {
  coinsRegistered: boolean;
  derivationIndex: number;
  id: string;
  items: Items2;
  name: string;
  registered: boolean;
}

interface Items2 {
  "0": _0;
  "2": _0;
  "3": _0;
  "5": _0;
  "14": _0;
  "17": _0;
  "20": _0;
  "22": _0;
  "42": _0;
  "60": _0;
  "61": _0;
  "74": _0;
  "118": _0;
  "133": _0;
  "136": _0;
  "144": _0;
  "145": _0;
  "148": _0;
  "156": _0;
  "165": _0;
  "169": _0;
  "175": _0;
  "194": _0;
  "195": _0;
  "204": _0;
  "223": _0;
  "235": _0;
  "242": _0;
  "283": _0;
  "304": _0;
  "309": _0;
  "313": _0;
  "330": _0;
  "354": _0;
  "394": _0;
  "396": _0;
  "397": _0;
  "425": _0;
  "434": _0;
  "457": _0;
  "459": _0;
  "461": _0;
  "474": _0;
  "483": _0;
  "494": _0;
  "500": _0;
  "501": _0;
  "508": _0;
  "564": _0;
  "607": _0;
  "637": _0;
  "714": _0;
  "784": _0;
  "818": _0;
  "820": _0;
  "888": _0;
  "889": _0;
  "899": _0;
  "931": _0;
  "966": _0;
  "996": _0;
  "1001": _0;
  "1023": _0;
  "1024": _0;
  "1030": _0;
  "1729": _0;
  "1815": _0;
  "2017": _0;
  "2301": _0;
  "2718": _0;
  "4200": _0;
  "5000": _0;
  "5600": _0;
  "6001": _0;
  "6060": _0;
  "8453": _0;
  "8964": _0;
  "18000": _0;
  "19167": _0;
  "52752": _0;
  "59144": _0;
  "81457": _0;
  "534352": _0;
  "810180": _0;
  "5718350": _0;
  "5741564": _0;
  "10000025": _0;
  "10000060": _0;
  "10000070": _0;
  "10000100": _0;
  "10000118": _0;
  "10000145": _0;
  "10000146": _0;
  "10000250": _0;
  "10000288": _0;
  "10000321": _0;
  "10000324": _0;
  "10000330": _0;
  "10000553": _0;
  "10000714": _0;
  "10001088": _0;
  "10001101": _0;
  "10001284": _0;
  "10001285": _0;
  "10002020": _0;
  "10002222": _0;
  "10004689": _0;
  "10007000": _0;
  "10008217": _0;
  "10009000": _0;
  "10009001": _0;
  "10042221": _0;
  "17000118": _0;
  "19000118": _0;
  "20000118": _0;
  "20000714": _0;
  "20007000": _0;
  "20009001": _0;
  "30000118": _0;
  "30000714": _0;
  "40000118": _0;
  "50000118": _0;
  "90000118": _0;
  "245022934": _0;
  "1323161554": _0;
}

interface _0 {
  address: string;
  coin: number;
  publicKey: string;
}

interface Tx {
  fetchedAllChainsTransactionPeriods: Rates;
  fetchedAllChainsTransactionPeriodsByAccount: Rates;
  fetchedTransactionPeriodsByAccount: Rates;
  gasFees: GasFees;
  items: any[];
  itemsPerWallet: Rates;
  itemsPerWalletAccount: ItemsPerWalletAccount;
}

interface ItemsPerWalletAccount {
  "3320ad3f-89e6-47f1-93c5-ae0ba885871a": _3320ad3f89e647f193c5ae0ba885871a2;
  "8214dced-a77c-4866-a59f-0c5f978fe366": _8214dceda77c4866a59f0c5f978fe3662;
}

interface _8214dceda77c4866a59f0c5f978fe3662 {
  "60d58efc-1bbd-4a05-a901-8bdb02b4857a": any[];
}

interface _3320ad3f89e647f193c5ae0ba885871a2 {
  "56a011fc-7297-4f61-be88-1e347a22e133": any[];
}

interface GasFees {
  baseFeeTrend: string;
  estimatedBaseFee: string;
  high: High;
  historicalBaseFeeRange: any[];
  historicalPriorityFeeRange: any[];
  latestPriorityFeeRange: any[];
  low: High;
  medium: High;
  networkCongestion: number;
  priorityFeeTrend: string;
}

interface High {
  maxWaitTimeEstimate: number;
  minWaitTimeEstimate: number;
  suggestedMaxFeePerGas: string;
  suggestedMaxPriorityFeePerGas: string;
}

interface Swap {
  assets: Assets;
  isP2PBannerClosed: boolean;
  settings: Settings2;
}

interface Settings2 {
  environment: string;
  mev: boolean;
  solanaTurboSwaps: boolean;
  thorchainStreams: boolean;
}

interface Assets {
  fromAsset: null;
  toAsset: null;
}

interface Staking {
  delegations: Rates;
  stakingList: StakingList[];
  validators: Rates;
  validatorsLastSync: Rates;
}

interface StakingList {
  assetId: string;
  blockchain: string;
  description: string;
  id: string;
  image_url: string;
  metadata: Metadata;
  name: string;
  type: string;
  url: string;
}

interface Metadata {
  asset: Asset2;
  value: number;
}

interface Asset2 {
  name: string;
  symbol: string;
}

interface Settings {
  baseCurrency: string;
  developerSettings: DeveloperSettings;
  isDefaultWallet: boolean;
  isPasswordGenerated: boolean;
  loadingTranslations: boolean;
  locale: string;
  passkeyId: null;
  preferSidePanel: boolean;
  privacy: Privacy;
  pushNotifications: PushNotifications;
  translations: Translations;
  translationsLastFetch: TranslationsLastFetch;
  ui: Ui;
}

interface Ui {
  colorMode: string;
}

interface TranslationsLastFetch {
  en: number;
}

interface Translations {
  en: En;
}

interface En {
  "GENERIC.ALPHA": string;
  HideDetails: string;
  PriceImpactDescription: string;
  ProviderFeeDesc: string;
  QuoteExpired: string;
  ViewDetails: string;
  "account_verify_authenticator.confirmation-sub-heading": string;
  "account_verify_authenticator.creation-caution-description": string;
  "account_verify_authenticator.creation-caution-heading": string;
  "account_verify_authenticator.creation-content-manual": string;
  "account_verify_authenticator.creation-content-scan": string;
  "account_verify_authenticator.creation-info": string;
  "account_verify_authenticator.creation-proceed": string;
  "account_verify_authenticator.creation-sub-heading": string;
  "account_verify_authenticator.heading": string;
  "account_verify_authenticator.mobile-otp-heading": string;
  "account_verify_authenticator.mobile-otp-sub-heading": string;
  "account_verify_mobile_otp.error": string;
  "account_verify_mobile_otp.heading": string;
  "account_verify_mobile_otp.resendOTP": string;
  "account_verify_mobile_otp.subheading": string;
  "account_verify_mobile_otp.success_msg": string;
  "account_verify_mobile_otp.verifying": string;
  "account_verify_new_device.description": string;
  "account_verify_new_device.heading": string;
  "account_verify_new_device.options": string;
  "account_verify_new_device.reset-account": string;
  "account_verify_new_device.subheading": string;
  "account_verify_options.email": string;
  "account_verify_options.heading": string;
  "account_verify_options.mobile-otp": string;
  "account_verify_options.recovery-factor": string;
  "account_verify_options.reset-account": string;
  "account_verify_options.subheading": string;
  "account_verify_recoveryFactor.error": string;
  "account_verify_recoveryFactor.heading": string;
  "account_verify_recoveryFactor.subheading": string;
  "acknowledge-facts.fact1-new.text": string;
  "acknowledge-facts.fact1.text": string;
  "acknowledge-facts.fact2-new.text": string;
  "acknowledge-facts.fact2.text": string;
  "acknowledge-facts.fact3-new.text": string;
  "acknowledge-facts.fact3.text": string;
  "acknowledge-facts.heading": string;
  "acknowledge-facts.mnemonic.heading": string;
  "acknowledge-facts.mnemonic.subheading": string;
  "add-asset.btn-add-asset": string;
  "add-asset.btn-add-token-manually": string;
  "add-asset.decimals": string;
  "add-asset.desc": string;
  "add-asset.register-error": string;
  "add-asset.symbol": string;
  "add-asset.title": string;
  "add-asset.warning": string;
  "add-custom-asset.title": string;
  "add-network.block-explorer": string;
  "add-network.chain-id": string;
  "add-network.connecting": string;
  "add-network.currency-symbol": string;
  "add-network.desc": string;
  "add-network.network-name": string;
  "add-network.rpc-url": string;
  "add-network.title": string;
  "address-and-memo-input.address.label": string;
  "address-and-memo-input.address.placeholder": string;
  "address-and-memo-input.button.label": string;
  "address-and-memo-input.memo.label": string;
  "address-and-memo-input.memo.placeholder": string;
  "address-and-memo-input.tag.label": string;
  "address-and-memo-input.tag.placeholder": string;
  "address-book-modal.add-wallet.title": string;
  "address-book-modal.cancel-confirmation.discard": string;
  "address-book-modal.cancel-confirmation.keep-editing": string;
  "address-book-modal.edit-address-and-memo.title": string;
  "address-book-modal.input-address-and-memo.title": string;
  "address-book-modal.select-asset.title": string;
  "address-book-modal.title": string;
  "airdrop.tasks": string;
  "airdrops.0.step-0": string;
  "airdrops.0.step-1": string;
  "airdrops.0.step-2": string;
  "airdrops.0.step-3": string;
  "airdrops.0.step-4": string;
  "airdrops.0.step-5": string;
  "airdrops.0.step-6": string;
  "airdrops.0.step-7": string;
  "airdrops.1.step-0": string;
  "airdrops.1.step-1": string;
  "airdrops.1.step-2": string;
  "airdrops.1.step-3": string;
  "airdrops.1.step-4": string;
  "airdrops.1.step-5": string;
  "airdrops.1.step-6": string;
  "airdrops.2.step-0": string;
  "airdrops.2.step-1": string;
  "airdrops.2.step-2": string;
  "airdrops.2.step-3": string;
  "airdrops.2.step-4": string;
  "airdrops.2.step-5": string;
  "airdrops.2.step-6": string;
  "airdrops.2.step-7": string;
  "airdrops.2.step-8": string;
  "airdrops.2.step-9": string;
  "airdrops.description": string;
  "airdrops.link": string;
  "airdrops.title": string;
  "alert.account-activation-fee": string;
  "analytics.btn-accept": string;
  "analytics.btn-decline": string;
  "analytics.heading": string;
  "analytics.list1": string;
  "analytics.list2": string;
  "analytics.list3": string;
  "analytics.privacy-policy": string;
  "analytics.subheading": string;
  "approve-notification.confirmation-modal-cancel": string;
  "approve-notification.confirmation-modal-confirm": string;
  "approve-notification.confirmation-modal-content": string;
  "approve-notification.confirmation-modal-content-high-default": string;
  "approve-notification.confirmation-modal-header": string;
  "approve-notification.spending-limit": string;
  "approve-notification.spending-limit-unlimited": string;
  "approve.action.edit": string;
  "approve.desc": string;
  "approve.high-cap-limit-tooltip": string;
  "approve.modal.action.radio-1": string;
  "approve.modal.action.radio-2": string;
  "approve.modal.action.radio-2.input.placeholder": string;
  "approve.modal.title": string;
  "approve.title": string;
  "asset-image.token-network-tooltip": string;
  "asset-list.empty": string;
  "asset-selection-modal.balance-category": string;
  "asset-selection-modal.input-placeholder": string;
  "asset-selection-modal.no-results": string;
  "asset-selection-modal.popular-category": string;
  "asset-selection-modal.receive-header": string;
  "asset-selection-modal.rest-of-crypto-category": string;
  "asset-selection-modal.rest-of-currencies-category": string;
  "asset-selection-modal.search-results-category": string;
  "asset-selection-modal.spend-header": string;
  "asset-selection-modal.you-get": string;
  "asset-selection-modal.you-pay": string;
  "asset.activation-banner.coin": string;
  "asset.activation-banner.enable-token": string;
  "asset.activation-banner.token": string;
  "asset.activation-banner.xrp-coin": string;
  "asset.chart.period-1d": string;
  "asset.chart.period-1h": string;
  "asset.chart.period-1m": string;
  "asset.chart.period-1w": string;
  "asset.chart.period-1y": string;
  "asset.chart.period-all": string;
  "asset.reserve-fee-modal.coin-disclaimer": string;
  "asset.reserve-fee-modal.coin-reserve-header": string;
  "asset.reserve-fee-modal.cta": string;
  "asset.reserve-fee-modal.disclaimer": string;
  "asset.reserve-fee-modal.header": string;
  "asset.reserve-fee-modal.header-1": string;
  "asset.reserve-fee-modal.token-disclaimer": string;
  "asset.reserve-fee-modal.token-reserve-header": string;
  "authentication-selection.biometrics-registered": string;
  "authentication-selection.biometrics-subheading-new": string;
  "authentication-selection.creating-mnemonic": string;
  "authentication-selection.heading": string;
  "authentication-selection.recommended": string;
  "authentication-selection.setup-password": string;
  "authentication-selection.subheading": string;
  "backup-seedphrase-cta.back-up-secret-phrase-button": string;
  "backup-seedphrase-cta.body": string;
  "backup-seedphrase-cta.buy-crypto-header": string;
  "backup-seedphrase-cta.receive-crypto-header": string;
  "backup.modal-button": string;
  "backup.modal-description": string;
  "backup.modal-title": string;
  "backup.warning-backup-now": string;
  "backup.warning-description": string;
  "backup.warning-remind-later": string;
  "backup.warning-title": string;
  "badge.new": string;
  "blacklisted-dapps-modal.content": string;
  "blacklisted-dapps-modal.header": string;
  "blacklisted-dapps-modal.review-settings": string;
  "blacklisted-dapps-modal.title": string;
  "blockchain-list.no-blockchains-found": string;
  "blockchain-list.search.placeholder": string;
  "buy-crypto.quote-error": string;
  "buy-crypto.quote-error-subheader": string;
  "buy-crypto.quote-too-high-error": string;
  "buy-crypto.quote-too-high-error-subheader": string;
  "cancel-confirmation-modal.title": string;
  "chart.period-1h": string;
  "checkbox-terms-of-service": string;
  "checkbox-terms-of-use": string;
  "collection-list.empty": string;
  "component.blockchain-select.all-networks": string;
  "component.blockchain-select.select-network": string;
  "component.copy-to-clipboard.tooltip-copied": string;
  "component.copy-to-clipboard.tooltip-copy-address": string;
  "component.copy-to-clipboard.tooltip-copy-network-address": string;
  "component.input-address.placeholder": string;
  "component.input-addresses-search.placeholder": string;
  "component.input-amount.placeholder": string;
  "component.input-asset-search.placeholder": string;
  "component.input-password-new.confirm.placeholder": string;
  "component.input-password-new.placeholder": string;
  "component.input-password.confirm.placeholder": string;
  "component.input-password.confirm.validation": string;
  "component.input-password.placeholder": string;
  "component.input-seed-phrase.select.label": string;
  "component.input-seed-phrase.select.placeholder": string;
  "component.nft-media-asset.missing-media": string;
  "component.select-seed-phrase.clear-all": string;
  "component.select-seed-phrase.input.validation.error": string;
  "component.transaction-item.status.confirmed": string;
  "component.transaction-item.status.failed": string;
  "component.transaction-item.status.pending": string;
  "component.transaction-item.type.Coin": string;
  "component.transaction-item.type.Dapp": string;
  "component.transaction-item.type.Swap": string;
  "component.transaction-item.type.Token": string;
  "component.transaction-item.type.approve": string;
  "component.transaction-item.type.claim": string;
  "component.transaction-item.type.claim-rewards": string;
  "component.transaction-item.type.compound": string;
  "component.transaction-item.type.contract": string;
  "component.transaction-item.type.delegate": string;
  "component.transaction-item.type.inscribe": string;
  "component.transaction-item.type.receive": string;
  "component.transaction-item.type.redelegate": string;
  "component.transaction-item.type.register-token": string;
  "component.transaction-item.type.send": string;
  "component.transaction-item.type.swap": string;
  "component.transaction-item.type.trade": string;
  "component.transaction-item.type.trust-line": string;
  "component.transaction-item.type.undelegate": string;
  "compound.balance": string;
  "compound.target-validator": string;
  "compromised-modal.button": string;
  "compromised-modal.call-to-action": string;
  "compromised-modal.description": string;
  "compromised-modal.header": string;
  "compromised-warning.call-to-action": string;
  "compromised-warning.contact": string;
  "compromised-warning.description": string;
  "connect-wallet.blacklist-button": string;
  "connect-wallet.notice1": string;
  "connect-wallet.notice2": string;
  "connect-wallet.notice3": string;
  "connect-wallet.title": string;
  "create-password.input-confirm.placeholder": string;
  "create-password.input.confirm.label": string;
  "create-password.input.label": string;
  "create-password.input.placeholder": string;
  "create-wallet.backup-later": string;
  "create-wallet.confirm.btn-open-wallet": string;
  "create-wallet.confirm.heading": string;
  "create-wallet.confirm.pin-extension.li1": string;
  "create-wallet.confirm.pin-extension.li2": string;
  "create-wallet.confirm.pin-extension.title": string;
  "create-wallet.confirm.subheading": string;
  "create-wallet.initiate.description": string;
  "create-wallet.initiate.heading": string;
  "create-wallet.initiate.keep-safe": string;
  "create-wallet.initiate.never-share": string;
  "create-wallet.initiate.write-down": string;
  "create-wallet.safe-paper-message": string;
  "create-wallet.set-password.heading": string;
  "create-wallet.set-password.subheading": string;
  "create-wallet.show-seed-phrase.copy-seed-phrase": string;
  "create-wallet.show-seed-phrase.heading": string;
  "create-wallet.show-seed-phrase.subheading": string;
  "create-wallet.verify-seed-phrase.description": string;
  "create-wallet.verify-seed-phrase.heading": string;
  "create-wallet.verify-seed-phrase.input.placeholder": string;
  "create_device_factor.delete-consent": string;
  "create_device_factor.heading": string;
  "create_device_factor.subheading": string;
  "create_mobileOTP.heading": string;
  "create_mobileOTP.placeholder": string;
  "create_mobileOTP.subheading": string;
  "create_options.heading": string;
  "create_options.secretphrase.heading": string;
  "create_options.secretphrase.subheading": string;
  "create_options.subheading": string;
  "create_social.continue-label": string;
  "create_social.heading": string;
  "create_social.subheading": string;
  "create_social.verifying": string;
  "crypto-input.on-network-label": string;
  "currency-list-item.coming-soon-for-ledger": string;
  "currency-selection-modal.crypto-header": string;
  "currency-selection-modal.fiat-header": string;
  "currency-selection-modal.header": string;
  "currency-selection-modal.input-placeholder": string;
  "currency-selection-modal.other-list-header": string;
  "currency-selection-modal.popular-list-header": string;
  "currency-selection-modal.search-list-header": string;
  "currency.name.AED": string;
  "currency.name.AFA": string;
  "currency.name.AFN": string;
  "currency.name.ALL": string;
  "currency.name.AMD": string;
  "currency.name.ANG": string;
  "currency.name.AOA": string;
  "currency.name.ARS": string;
  "currency.name.AUD": string;
  "currency.name.AWG": string;
  "currency.name.AZN": string;
  "currency.name.BAM": string;
  "currency.name.BBD": string;
  "currency.name.BDT": string;
  "currency.name.BEF": string;
  "currency.name.BGN": string;
  "currency.name.BHD": string;
  "currency.name.BIF": string;
  "currency.name.BMD": string;
  "currency.name.BND": string;
  "currency.name.BOB": string;
  "currency.name.BRL": string;
  "currency.name.BSD": string;
  "currency.name.BTN": string;
  "currency.name.BWP": string;
  "currency.name.BYN": string;
  "currency.name.BYR": string;
  "currency.name.BZD": string;
  "currency.name.CAD": string;
  "currency.name.CDF": string;
  "currency.name.CHF": string;
  "currency.name.CLF": string;
  "currency.name.CLP": string;
  "currency.name.CNY": string;
  "currency.name.COP": string;
  "currency.name.CRC": string;
  "currency.name.CUC": string;
  "currency.name.CUP": string;
  "currency.name.CVE": string;
  "currency.name.CZK": string;
  "currency.name.DEM": string;
  "currency.name.DJF": string;
  "currency.name.DKK": string;
  "currency.name.DOP": string;
  "currency.name.DZD": string;
  "currency.name.EEK": string;
  "currency.name.EGP": string;
  "currency.name.ERN": string;
  "currency.name.ETB": string;
  "currency.name.EUR": string;
  "currency.name.FJD": string;
  "currency.name.FKP": string;
  "currency.name.GBP": string;
  "currency.name.GEL": string;
  "currency.name.GGP": string;
  "currency.name.GHS": string;
  "currency.name.GIP": string;
  "currency.name.GMD": string;
  "currency.name.GNF": string;
  "currency.name.GRD": string;
  "currency.name.GTQ": string;
  "currency.name.GYD": string;
  "currency.name.HKD": string;
  "currency.name.HNL": string;
  "currency.name.HRK": string;
  "currency.name.HTG": string;
  "currency.name.HUF": string;
  "currency.name.IDR": string;
  "currency.name.ILS": string;
  "currency.name.IMP": string;
  "currency.name.INR": string;
  "currency.name.IQD": string;
  "currency.name.IRR": string;
  "currency.name.ISK": string;
  "currency.name.ITL": string;
  "currency.name.JEP": string;
  "currency.name.JMD": string;
  "currency.name.JOD": string;
  "currency.name.JPY": string;
  "currency.name.KES": string;
  "currency.name.KGS": string;
  "currency.name.KHR": string;
  "currency.name.KMF": string;
  "currency.name.KPW": string;
  "currency.name.KRW": string;
  "currency.name.KWD": string;
  "currency.name.KYD": string;
  "currency.name.KZT": string;
  "currency.name.LAK": string;
  "currency.name.LBP": string;
  "currency.name.LKR": string;
  "currency.name.LRD": string;
  "currency.name.LSL": string;
  "currency.name.LTL": string;
  "currency.name.LVL": string;
  "currency.name.LYD": string;
  "currency.name.MAD": string;
  "currency.name.MDL": string;
  "currency.name.MGA": string;
  "currency.name.MKD": string;
  "currency.name.MMK": string;
  "currency.name.MNT": string;
  "currency.name.MOP": string;
  "currency.name.MRO": string;
  "currency.name.MRU": string;
  "currency.name.MUR": string;
  "currency.name.MVR": string;
  "currency.name.MWK": string;
  "currency.name.MXN": string;
  "currency.name.MYR": string;
  "currency.name.MZM": string;
  "currency.name.MZN": string;
  "currency.name.NAD": string;
  "currency.name.NGN": string;
  "currency.name.NIO": string;
  "currency.name.NOK": string;
  "currency.name.NPR": string;
  "currency.name.NZD": string;
  "currency.name.OMR": string;
  "currency.name.PAB": string;
  "currency.name.PEN": string;
  "currency.name.PGK": string;
  "currency.name.PHP": string;
  "currency.name.PKR": string;
  "currency.name.PLN": string;
  "currency.name.PYG": string;
  "currency.name.QAR": string;
  "currency.name.RON": string;
  "currency.name.RSD": string;
  "currency.name.RUB": string;
  "currency.name.RWF": string;
  "currency.name.SAR": string;
  "currency.name.SBD": string;
  "currency.name.SCR": string;
  "currency.name.SDG": string;
  "currency.name.SEK": string;
  "currency.name.SGD": string;
  "currency.name.SHP": string;
  "currency.name.SKK": string;
  "currency.name.SLL": string;
  "currency.name.SOS": string;
  "currency.name.SRD": string;
  "currency.name.STD": string;
  "currency.name.STN": string;
  "currency.name.SVC": string;
  "currency.name.SYP": string;
  "currency.name.SZL": string;
  "currency.name.THB": string;
  "currency.name.TJS": string;
  "currency.name.TMT": string;
  "currency.name.TND": string;
  "currency.name.TOP": string;
  "currency.name.TRY": string;
  "currency.name.TTD": string;
  "currency.name.TWD": string;
  "currency.name.TZS": string;
  "currency.name.UAH": string;
  "currency.name.UGX": string;
  "currency.name.USD": string;
  "currency.name.UYU": string;
  "currency.name.UZS": string;
  "currency.name.VEF": string;
  "currency.name.VES": string;
  "currency.name.VND": string;
  "currency.name.VUV": string;
  "currency.name.WST": string;
  "currency.name.XAF": string;
  "currency.name.XAG": string;
  "currency.name.XAU": string;
  "currency.name.XCD": string;
  "currency.name.XDR": string;
  "currency.name.XOF": string;
  "currency.name.XPF": string;
  "currency.name.YER": string;
  "currency.name.ZAR": string;
  "currency.name.ZMK": string;
  "currency.name.ZMW": string;
  "currency.name.ZWL": string;
  "custom-asset.token-decimals": string;
  "custom-asset.token-name": string;
  "custom-asset.token-symbol": string;
  "custom-asset.token-type": string;
  "custom-nonce.description": string;
  "custom-nonce.placeholder": string;
  "dapp.chainId-switched": string;
  "dapp.chainid-mismatch": string;
  "dapp.connected-to": string;
  "dapp.connected-wallet": string;
  "dapp.dapps-list-empty": string;
  "dapp.dapps-list-title": string;
  "dapp.disconnected-from": string;
  "dapp.first-connected": string;
  "dapp.last-connected": string;
  "dapp.revoke-access": string;
  "dapps.account-connected": string;
  "dapps.address": string;
  "dapps.blacklist-header": string;
  "dapps.connected-wallet": string;
  "dapps.disconnect": string;
  "dapps.disconnected-write": string;
  "dapps.empty-blacklist": string;
  "dapps.empty-list": string;
  "dapps.first-connected": string;
  "dapps.list-empty": string;
  "dapps.manage-connections": string;
  "dapps.network-hint": string;
  "dapps.not-connected": string;
  "dapps.revoke-access": string;
  "dashboard.approve-crypto": string;
  "dashboard.balance-exceeded": string;
  "dashboard.connected-to": string;
  "dashboard.continue": string;
  "dashboard.crypto-input-label": string;
  "dashboard.dapp-blacklisted": string;
  "dashboard.disconnect": string;
  "dashboard.disconnect-dapp": string;
  "dashboard.fiat-input-label": string;
  "dashboard.find-best-price": string;
  "dashboard.header": string;
  "dashboard.hide-balance": string;
  "dashboard.insufficient-balance": string;
  "dashboard.manage-networks": string;
  "dashboard.not-connected": string;
  "dashboard.other-chains": string;
  "dashboard.quotes-header-title": string;
  "dashboard.quotes-header-title-v2": string;
  "dashboard.quotes-list-category-bank_transfer": string;
  "dashboard.quotes-list-category-credit_card": string;
  "dashboard.quotes-list-category-digital_wallet": string;
  "dashboard.quotes-list-category-mobile_pay": string;
  "dashboard.quotes-list-category-other": string;
  "dashboard.receive": string;
  "dashboard.reduced-fee-applied": string;
  "dashboard.reduced-fee-cta": string;
  "dashboard.refresh": string;
  "dashboard.select-token": string;
  "dashboard.show-balance": string;
  "dashboard.spend": string;
  "dashboard.swap": string;
  "dashboard.switch-networks": string;
  "dashboard.token-management-button-flyout": string;
  "dashboard.tokens.about": string;
  "dashboard.tokens.buy-tax": string;
  "dashboard.tokens.circulating-supply": string;
  "dashboard.tokens.contract-addresses": string;
  "dashboard.tokens.contract-security": string;
  "dashboard.tokens.dyor-disclaimer": string;
  "dashboard.tokens.honeypot-risk": string;
  "dashboard.tokens.input-placeholder": string;
  "dashboard.tokens.links": string;
  "dashboard.tokens.marketcap": string;
  "dashboard.tokens.max-supply": string;
  "dashboard.tokens.read-less": string;
  "dashboard.tokens.read-more": string;
  "dashboard.tokens.risk": string;
  "dashboard.tokens.risk-cancel": string;
  "dashboard.tokens.risk-confirm": string;
  "dashboard.tokens.risk-disclaimer": string;
  "dashboard.tokens.risk-reminder": string;
  "dashboard.tokens.risks": string;
  "dashboard.tokens.scanned-by-go-plus": string;
  "dashboard.tokens.sell-tax": string;
  "dashboard.tokens.stats": string;
  "dashboard.tokens.swap": string;
  "dashboard.tokens.table.24h-volume": string;
  "dashboard.tokens.table.marketcap": string;
  "dashboard.tokens.table.price": string;
  "dashboard.tokens.table.token": string;
  "dashboard.tokens.total-supply": string;
  "dashboard.tokens.volume-24h": string;
  "dashboard.tokens.warning": string;
  "dashboard.tokens.warnings": string;
  "default-wallet-box.hint": string;
  "default-wallet-box.title": string;
  "default-wallet-box.tooltip": string;
  "dev-mode.title": string;
  "disabled-max-state.tooltip": string;
  "earn.title": string;
  "edit-fee-eip1559.advanced.desc": string;
  "edit-fee-eip1559.advanced.title": string;
  "edit-fee-eip1559.default.desc": string;
  "edit-fee-eip1559.default.title": string;
  "edit-fee-eip1559.fast.desc": string;
  "edit-fee-eip1559.fast.title": string;
  "edit-fee-eip1559.slow.desc": string;
  "edit-fee-eip1559.slow.title": string;
  "edit-fee-eip1559.subtitle": string;
  "edit-fee-eip1559.title": string;
  "encrypt.content.action.copy": string;
  "encrypt.content.action.decrypt": string;
  "encrypt.content.action.provide": string;
  "encrypt.content.action.reveal": string;
  "encrypt.content.decrypt-message": string;
  "encrypt.content.desc-decrypted": string;
  "encrypt.content.desc-provided": string;
  "encrypt.content.origin": string;
  "encrypt.content.title-decrypted": string;
  "encrypt.content.title-provided": string;
  "error.fatal.btn": string;
  "error.fatal.description": string;
  "error.fatal.title": string;
  "errors.failed-quote": string;
  "errors.route-not-available": string;
  "errors.transaction-generation": string;
  "first-time-education-modal.button.finish": string;
  "first-time-education-modal.button.next-step": string;
  "first-time-education-modal.step1.body": string;
  "first-time-education-modal.step1.body.list1": string;
  "first-time-education-modal.step1.body.list2": string;
  "first-time-education-modal.step1.body.list3": string;
  "first-time-education-modal.step1.body.subtitle": string;
  "first-time-education-modal.step1.title": string;
  "first-time-education-modal.step2.body": string;
  "first-time-education-modal.step2.body.list1": string;
  "first-time-education-modal.step2.body.list3": string;
  "first-time-education-modal.step2.title": string;
  "gas-station-badge.High": string;
  "gas-station-badge.Low": string;
  "gas-station-badge.Medium": string;
  "gas-station.average": string;
  "gas-station.estimates.heading": string;
  "gas-station.fast": string;
  "gas-station.header": string;
  "gas-station.heading": string;
  "gas-station.minute": string;
  "gas-station.minutes": string;
  "gas-station.safe": string;
  "generic-high-risk-address": string;
  "generic-total-fiat-info": string;
  "generic-view-more": string;
  "generic.accounts": string;
  "generic.action-required": string;
  "generic.adding": string;
  "generic.advanced": string;
  "generic.advanced-options": string;
  "generic.advanced-user": string;
  "generic.amount": string;
  "generic.approve": string;
  "generic.approve-access-disclaimer": string;
  "generic.asset-migrate.description": string;
  "generic.asset-migrate.fees-disclaimer": string;
  "generic.available": string;
  "generic.available-balance": string;
  "generic.back": string;
  "generic.balance": string;
  "generic.beginner": string;
  "generic.beta": string;
  "generic.biometrics-redirecting": string;
  "generic.biometrics-register": string;
  "generic.biometrics-register-new": string;
  "generic.biometrics-verify": string;
  "generic.biometrics-verify-new": string;
  "generic.biometrics-verifying": string;
  "generic.buy": string;
  "generic.buy-crypto": string;
  "generic.buy-sell": string;
  "generic.cancel": string;
  "generic.close": string;
  "generic.collection": string;
  "generic.coming-soon": string;
  "generic.coming-soon-on-hardware": string;
  "generic.confirm": string;
  "generic.confirm-claim": string;
  "generic.confirm-claim-rewards": string;
  "generic.confirm-compound": string;
  "generic.confirm-redelegate": string;
  "generic.confirm-register-token": string;
  "generic.confirm-stake": string;
  "generic.confirm-trust-line": string;
  "generic.confirm-undelegate": string;
  "generic.confirmed": string;
  "generic.connect": string;
  "generic.connected": string;
  "generic.connected-account": string;
  "generic.content-missing": string;
  "generic.content-missing-description": string;
  "generic.continue": string;
  "generic.continue-anyway-button": string;
  "generic.contract": string;
  "generic.contract-address": string;
  "generic.copy": string;
  "generic.copy-address": string;
  "generic.critical-risk": string;
  "generic.current-account": string;
  "generic.custom-networks": string;
  "generic.decimals": string;
  "generic.delete": string;
  "generic.description": string;
  "generic.disconnect": string;
  "generic.done": string;
  "generic.download": string;
  "generic.download-private-key": string;
  "generic.edit-account": string;
  "generic.edit-wallet": string;
  "generic.empty-search-title": string;
  "generic.enable": string;
  "generic.error": string;
  "generic.estimated-fee": string;
  "generic.estimated-network-fee": string;
  "generic.estimated-tx-fee": string;
  "generic.failed": string;
  "generic.from": string;
  "generic.gas-limit": string;
  "generic.gas-price": string;
  "generic.got-it": string;
  "generic.hash": string;
  "generic.hide": string;
  "generic.hot-tokens": string;
  "generic.input-data": string;
  "generic.inscribe": string;
  "generic.inscription-modal.disclaimer": string;
  "generic.inscription-modal.header": string;
  "generic.inscription.no-transferable-disclaimer": string;
  "generic.insufficient-balance-for-gas": string;
  "generic.insufficient-balance-for-tx": string;
  "generic.label.contact-support": string;
  "generic.label.hide-other-options": string;
  "generic.label.retry": string;
  "generic.label.set-it-up": string;
  "generic.label.set-it-up-later": string;
  "generic.label.view-other-options": string;
  "generic.learn-more": string;
  "generic.loading": string;
  "generic.medium-risk": string;
  "generic.memo": string;
  "generic.mev-tooltip": string;
  "generic.migrate": string;
  "generic.migration-required": string;
  "generic.migration.bep2-warning": string;
  "generic.modal-receive-warning-alert": string;
  "generic.mpc_device": string;
  "generic.name": string;
  "generic.network": string;
  "generic.network-error": string;
  "generic.network-fee": string;
  "generic.next": string;
  "generic.nonce": string;
  "generic.off-chain-disclaimer": string;
  "generic.on-network": string;
  "generic.operator": string;
  "generic.origin": string;
  "generic.password": string;
  "generic.pay": string;
  "generic.pay-and-inscribe": string;
  "generic.pay-fee-with-flexgas": string;
  "generic.pending": string;
  "generic.preview": string;
  "generic.proceed": string;
  "generic.protected-from-mev": string;
  "generic.read-more": string;
  "generic.receive": string;
  "generic.recommended": string;
  "generic.register": string;
  "generic.reject": string;
  "generic.remember": string;
  "generic.remind-me-later": string;
  "generic.reset": string;
  "generic.retry": string;
  "generic.reveal": string;
  "generic.reveal-private-key": string;
  "generic.save": string;
  "generic.sell": string;
  "generic.sell-crypto": string;
  "generic.send": string;
  "generic.set-up-biometrics": string;
  "generic.settings": string;
  "generic.show": string;
  "generic.show-less": string;
  "generic.show-more": string;
  "generic.stake-crypto": string;
  "generic.start": string;
  "generic.status": string;
  "generic.stop-go-back-button": string;
  "generic.submit": string;
  "generic.swap": string;
  "generic.switch": string;
  "generic.symbol": string;
  "generic.time": string;
  "generic.to": string;
  "generic.token": string;
  "generic.token-id": string;
  "generic.ton.migration.address": string;
  "generic.total": string;
  "generic.total-fiat": string;
  "generic.trade.asset-migrate.description": string;
  "generic.trade.asset-migrate.fees-disclaimer": string;
  "generic.trade.bnb-input-address.label": string;
  "generic.trade.input-address.label": string;
  "generic.trade.input-amount.label": string;
  "generic.trade.migrate": string;
  "generic.trade.migrate-checkbox": string;
  "generic.trade.migrate-warning": string;
  "generic.trade.migration-required": string;
  "generic.trade.migration.bep2-warning": string;
  "generic.trade.modal-migrate.title": string;
  "generic.trade.shutdown.bep2-warning": string;
  "generic.transaction-error": string;
  "generic.transaction-error-btn": string;
  "generic.transaction-nonce": string;
  "generic.type": string;
  "generic.unable-to-verify": string;
  "generic.unconfirmed-txhub-label": string;
  "generic.unconfirmed-txhub-tooltip": string;
  "generic.understood": string;
  "generic.unlock": string;
  "generic.unlock-biometrics": string;
  "generic.unsafe-address": string;
  "generic.unsafe-address-desc1": string;
  "generic.unsafe-address-desc2": string;
  "generic.validators": string;
  "generic.verify": string;
  "generic.view-less": string;
  "generic.view-more": string;
  "generic.wallets": string;
  "generic.xrp.account-activation-fee": string;
  "highFeeModal.checkbox": string;
  "highFeeModal.description": string;
  "highFeeModal.swaps.description": string;
  "highFeeModal.title": string;
  "history-list.empty": string;
  "history-list.empty-month": string;
  "history-list.load-more": string;
  "history-list.title": string;
  "history.receive.header": string;
  "history.receive.modal.header": string;
  "history.receive.modal.subheader": string;
  "history.receive.subheader": string;
  "import-hardware-connect-correct-app-alert": string;
  "import-hardware-connect-device.open-app-description": string;
  "import-hardware-connect-select-chain-header": string;
  "import-hardware-connected-device": string;
  "import-hardware-select-accounts-header": string;
  "import-hardware-select-accounts-subheader": string;
  "import-ledger-confirm.create-another-account-button": string;
  "import-ledger-confirm.heading": string;
  "import-ledger-confirm.proceed-button": string;
  "import-ledger-confirm.subheading": string;
  "import-ledger-connect-device.heading": string;
  "import-ledger-connect-device.open-app-alert": string;
  "import-ledger-connect-device.open-app-description": string;
  "import-ledger-connect.heading": string;
  "import-ledger-connect.spinner.description": string;
  "import-ledger-connect.spinner.title": string;
  "import-ledger-connect.subheading": string;
  "import-ledger-connect.submit-button": string;
  "import-ledger-connection-error.description": string;
  "import-ledger-connection-error.retry-button": string;
  "import-ledger-select-account.heading": string;
  "import-ledger-select-account.input-placeholder": string;
  "import-ledger-select-account.item.already-added": string;
  "import-ledger-select-account.pagination.next": string;
  "import-ledger-select-account.pagination.previous": string;
  "import-ledger-select-account.reached-max-warning": string;
  "import-ledger-select-account.spinner.description": string;
  "import-ledger-select-account.spinner.description-new": string;
  "import-ledger-select-account.subheading": string;
  "import-ledger-select-account.submit": string;
  "import-private-key.blockchain.label": string;
  "import-seed-phrase.heading": string;
  "import-solana-derivation.heading": string;
  "import-wallet.confirm.btn-open-wallet": string;
  "import-wallet.confirm.heading": string;
  "import-wallet.confirm.pin-extension": string;
  "import-wallet.confirm.subheading": string;
  "import-wallet.seed-phrase.duplicated": string;
  "import-wallet.seed-phrase.heading": string;
  "import-wallet.seed-phrase.subheading": string;
  "import-wallet.set-password.heading": string;
  "import-wallet.set-password.subheading": string;
  "import.heading": string;
  "import.subheading": string;
  "import_options.secretphrase.subheading": string;
  "import_options.social.heading": string;
  "import_options.social.subheading": string;
  "input-address.address.label": string;
  "input-address.address.placeholder": string;
  "input-address.placeholder": string;
  "input-amount.amount.label": string;
  "input-amount.amount.placeholder": string;
  "input-amount.placeholder": string;
  "input-amount.send.max-button-info": string;
  "input-amount.use-default-button": string;
  "input-amount.validation.generic": string;
  "input-chain-id.placeholder": string;
  "input-contract-address.confirmation": string;
  "input-contract-address.decimals": string;
  "input-contract-address.label": string;
  "input-contract-address.placeholder": string;
  "input-contract-address.symbol": string;
  "input-contract-address.validation.generic": string;
  "input-contract-address.validation.manual.wrong-address": string;
  "input-contract-address.validation.metadata": string;
  "input-contract-address.validation.not-found": string;
  "input-currency-symbol.description": string;
  "input-currency-symbol.placeholder": string;
  "input-explorer-url.placeholder": string;
  "input-memo.memo.label": string;
  "input-memo.memo.placeholder": string;
  "input-memo.placeholder": string;
  "input-memo.placeholder	Memo": string;
  "input-network-name.placeholder": string;
  "input-network-name.validation.generic": string;
  "input-rpc-url.placeholder": string;
  "input-tag.placeholder": string;
  "input-tag.tag.label": string;
  "input-tag.tag.placeholder": string;
  "inscription-overview.available-balance": string;
  "inscription-overview.balance-available": string;
  "inscription-overview.balance-inscription": string;
  "inscription-overview.balance-transferable": string;
  "inscription-overview.inscription-balance": string;
  "inscription-overview.non-transferable-balance": string;
  "inscription-overview.transferable-balance": string;
  "manage-assets.btn-custom-asset": string;
  "manage-assets.no-asset.description": string;
  "manage-assets.no-asset.title": string;
  "manage-assets.not-supported": string;
  "manage-assets.support-coming-soon": string;
  "manage-assets.title": string;
  "manage-crypto.import-asset": string;
  "manage-crypto.info-action.text": string;
  "manage-crypto.show-more-tooltip": string;
  "manage-crypto.title": string;
  "market-sentiment.articles": string;
  "market-sentiment.description.body": string;
  "market-sentiment.description.header": string;
  "market-sentiment.description.negative": string;
  "market-sentiment.description.neutral": string;
  "market-sentiment.description.positive": string;
  "market-sentiment.no-data-article": string;
  "market-sentiment.no-data-post": string;
  "market-sentiment.posts": string;
  "mascot.invalid-header": string;
  "mascot.invalid-subheader": string;
  "mascot.no-quotes-header": string;
  "mascot.no-quotes-subheader": string;
  "mascot.no-tokens-found-header": string;
  "mascot.no-tokens-found-subheader": string;
  "mascot.sell-pristine-header": string;
  "mascot.sell-pristine-subheader": string;
  "max-wallets-reached.description": string;
  "max-wallets-reached.title": string;
  "max-wallets-reached.warning": string;
  "modal-add-network.btn-add-network": string;
  "modal-add-network.subtitle": string;
  "modal-add-network.title": string;
  "modal-add-network.warning.description": string;
  "modal-add-network.warning.title": string;
  "modal-edit-fee.base-fee.label": string;
  "modal-edit-fee.bitcoin.network-fee.label": string;
  "modal-edit-fee.bitcoin.network-fee.tooltip": string;
  "modal-edit-fee.current-base-fee.tooltip": string;
  "modal-edit-fee.gas-limit.label": string;
  "modal-edit-fee.gas-limit.tooltip": string;
  "modal-edit-fee.gas-price.label": string;
  "modal-edit-fee.gas-price.tooltip": string;
  "modal-edit-fee.header": string;
  "modal-edit-fee.max-base-price.label": string;
  "modal-edit-fee.max-base-price.tooltip": string;
  "modal-edit-fee.max-fee": string;
  "modal-edit-fee.miner-fee": string;
  "modal-edit-fee.priority-price.label": string;
  "modal-edit-fee.priority-price.tooltip": string;
  "modal-edit-fee.subheader-tooltip": string;
  "modal-edit-fee.subheader.eip1559": string;
  "modal-edit-fee.subheader.legacy": string;
  "modal-edit-fee.title": string;
  "modal-forgot-password.btn-reset-password": string;
  "modal-forgot-password.description": string;
  "modal-forgot-password.title": string;
  "modal-migrate.title": string;
  "modal-receive.account-does-not-exist": string;
  "modal-receive.title": string;
  "modal-receive.warning-alert": string;
  "modal-remove-account.content-description": string;
  "modal-remove-account.title": string;
  "modal-remove-network.description": string;
  "modal-remove-network.title": string;
  "modal-remove-wallet-mpc.btn-i-understand": string;
  "modal-remove-wallet-mpc.description-1": string;
  "modal-remove-wallet-mpc.description-2": string;
  "modal-remove-wallet-mpc.title": string;
  "modal-remove-wallet-mpc.yes-remove": string;
  "modal-remove-wallet-no-backup.backup-phrase": string;
  "modal-remove-wallet-no-backup.delete-this": string;
  "modal-remove-wallet-no-backup.description": string;
  "modal-remove-wallet-no-backup.description-2": string;
  "modal-remove-wallet-no-backup.title": string;
  "modal-remove-wallet.back-up-secret-phrase-button": string;
  "modal-remove-wallet.backup-wallet-content-description": string;
  "modal-remove-wallet.backup-wallet-content-description-new": string;
  "modal-remove-wallet.backup-wallet-content-header": string;
  "modal-remove-wallet.backup-wallet-content-header-new": string;
  "modal-remove-wallet.backup-wallet-content-title": string;
  "modal-remove-wallet.btn-i-understand": string;
  "modal-remove-wallet.description": string;
  "modal-remove-wallet.description-private-key": string;
  "modal-remove-wallet.password-validation-header": string;
  "modal-remove-wallet.password-validation-warning": string;
  "modal-remove-wallet.proceed-anyway": string;
  "modal-remove-wallet.title": string;
  "modal-require-2-factor.btn-i-understand": string;
  "modal-require-2-factor.description": string;
  "modal-require-2-factor.title": string;
  "modal-reset-account.alert-reset-account": string;
  "modal-reset-account.btn-yes-reset-my-account": string;
  "modal-reset-account.heading": string;
  "modal-reset-account.subheading": string;
  "modal-reset-account.type-confirm": string;
  "modal-reset-wallet.btn-i-understand": string;
  "modal-reset-wallet.description": string;
  "modal-reset-wallet.loading": string;
  "modal-reset-wallet.modal.title": string;
  "modal-reset-wallet.title": string;
  "modal-stepper.step-counter": string;
  "modal-switch-to-test-network.description": string;
  "modal-switch-to-test-network.title": string;
  "modal-transaction-failed.advanced-error.description": string;
  "modal-transaction-failed.btn-try-again": string;
  "modal-transaction-failed.description": string;
  "modal-transaction-failed.title": string;
  "modal-view-private-key.banner.description": string;
  "modal-view-private-key.banner.title": string;
  "modal-view-seed-phrase.banner.description": string;
  "modal-view-seed-phrase.banner.title": string;
  "modal-view-seed-phrase.banner.title-2": string;
  "modal-view-seed-phrase.not-visible.title": string;
  "modal-view-seed-phrase.not-visible.title-2": string;
  "modal-view-seed-phrase.visible.title": string;
  "modal.description": string;
  "modal.header": string;
  "mp-checkout-go-back": string;
  "mpc.heading": string;
  "mpc.recoveryfactor.email.error": string;
  "mpc.recoveryfactor.email.heading": string;
  "mpc.recoveryfactor.email.label": string;
  "mpc.recoveryfactor.email.placeholder": string;
  "mpc.recoveryfactor.email.subheading": string;
  "mpc.recoveryfactor.email.subtitle": string;
  "mpc.recoveryfactor.email.success": string;
  "mpc.recoveryfactor.email.title": string;
  "mpc.recoveryfactor.email.tooltip": string;
  "mpc.recoveryfactor.manual.heading": string;
  "mpc.recoveryfactor.manual.subheading": string;
  "mpc.recoveryfactor.manual.subtitle": string;
  "mpc.recoveryfactor.manual.title": string;
  "mpc.recoveryfactor.mobile-otp": string;
  "mpc.recoveryfactor.mobile-otp-save": string;
  "mpc.recoveryfactor.mobile.mobile-enter": string;
  "mpc.recoveryfactor.mobileOTP.heading": string;
  "mpc.recoveryfactor.mobileOTP.placeholder": string;
  "mpc.recoveryfactor.mobileOTP.subheading": string;
  "mpc.recoveryfactor.set-up-factors": string;
  "mpc.recoveryfactor.social": string;
  "mpc.security.add-factor-cta": string;
  "mpc.security.email.tooltip": string;
  "mpc.security.enabled": string;
  "mpc.security.factors-three": string;
  "mpc.security.heading": string;
  "mpc.security.social": string;
  "mpc.security.subheading": string;
  "mpc.security.subheading-variant": string;
  "mpc.security.tooltip": string;
  "mpc.security_factors.mobile-otp": string;
  "mpc.security_factors.mobile-otp-save": string;
  "mpc.security_factors.social": string;
  "mpc.subheading": string;
  "mpc.subheading-variant": string;
  "mpc.unlock.continuewith": string;
  "mpc.unlock.heading": string;
  "mpc.unlock.subheading": string;
  "navigation.tab-earn": string;
  "navigation.tab1": string;
  "navigation.tab2": string;
  "navigation.tab3": string;
  "network-list.empty-caption": string;
  "network-list.empty-title": string;
  "network-selection-modal.choose-network": string;
  "network-selection-modal.input-placeholder": string;
  "network.btn-custom-network": string;
  "network.header": string;
  "network.test.title": string;
  "network.test.tooltip": string;
  "new-address-book-wallet.add-button.subtitle": string;
  "new-address-book-wallet.add-button.title": string;
  "new-address-book-wallet.name-input.error": string;
  "new-address-book-wallet.name-input.label": string;
  "new-address-book-wallet.name-input.placeholder": string;
  "nft-collection.hide-and-report": string;
  "nft-collection.nothing-bought": string;
  "nft-collection.nothing-hidden": string;
  "nft-collection.unhide": string;
  "nft-item.attributes": string;
  "nft-item.rarity-text": string;
  "nft-item.view-on-opensea": string;
  "nft-list.empty": string;
  "nft-reported-collections.hidden-collections": string;
  "nft-reported-collections.hidden-nfts": string;
  "notification-header.balance-label": string;
  "notification.pagination.title": string;
  "onboarding.authenticate.authenticating": string;
  "onboarding.authenticate.button": string;
  "onboarding.authenticate.creating-wallet": string;
  "onboarding.authenticate.footer": string;
  "onboarding.authenticate.heading": string;
  "onboarding.authenticate.reset-wallet": string;
  "onboarding.authenticate.subheading-biometrics": string;
  "onboarding.authenticate.subheading-password": string;
  "onboarding.completed.confirm": string;
  "onboarding.completed.heading": string;
  "onboarding.completed.subheading": string;
  "onboarding.create-password.loading": string;
  "onboarding.explore.close-side-panel": string;
  "onboarding.explore.dapp-cta": string;
  "onboarding.explore.dapp-description": string;
  "onboarding.explore.extension-pinned": string;
  "onboarding.explore.open-side-panel": string;
  "onboarding.explore.pin": string;
  "onboarding.explore.pin-cta": string;
  "onboarding.explore.pin-description": string;
  "onboarding.explore.pin-hint-description": string;
  "onboarding.explore.pin-subheader": string;
  "onboarding.explore.side-panel-description": string;
  "onboarding.explore.side-panel-header": string;
  "onboarding.explore.side-panel-subheader": string;
  "onboarding.explore.top-app": string;
  "onboarding.header.help": string;
  "onboarding.import-wallet.wallet-name-already-exists": string;
  "onboarding.select-import-method.hardware-wallets-header": string;
  "onboarding.select-import-method.heading": string;
  "onboarding.select-import-method.other-wallet": string;
  "onboarding.select-import-method.subheading": string;
  "onboarding.stepper.title": string;
  "otc-home-countdownInfo-process": string;
  "p2p.banner-text": string;
  "p2p.withdraw-limit-day": string;
  "p2p.withdraw-limit-days": string;
  "payment.apple_pay-title": string;
  "payment.astropay-title": string;
  "payment.bank_transfer-title": string;
  "payment.bpi-title": string;
  "payment.cash_app-title": string;
  "payment.credit_card-title": string;
  "payment.digital_wallet-title": string;
  "payment.fpbt-title": string;
  "payment.gcash-title": string;
  "payment.google_pay-title": string;
  "payment.grab_pay-title": string;
  "payment.imps-title": string;
  "payment.instant.transfer": string;
  "payment.maya-title": string;
  "payment.mobile_pay-title": string;
  "payment.open_banking-title": string;
  "payment.other-title": string;
  "payment.p2p-title": string;
  "payment.pix-title": string;
  "payment.pse-title": string;
  "payment.shopee_pay-title": string;
  "payment.union_bank-title": string;
  "payment.upi-title": string;
  "payment.wire-title": string;
  quote: string;
  "quote-counter.counting": string;
  "quote-counter.fetching": string;
  "quote-item.best-rate": string;
  "redelegate.balance": string;
  "redelegate.info": string;
  "reserve-fee-modal.disclaimer": string;
  "risk.checkbox-1": string;
  "risk.checkbox-2": string;
  "risk.checkbox-title": string;
  "risk.high-risk-message": string;
  "risk.high-risk-transaction": string;
  "risk.high-risk-url": string;
  "risk.lose-funds": string;
  "risk.mid-risk-message": string;
  "risk.mid-risk-transaction": string;
  "risk.mid-risk-url": string;
  "risk.proceed": string;
  "security_banner.heading": string;
  "security_banner.subheading": string;
  "seed-phrase-backup-warning.button-text": string;
  "seed-phrase-backup-warning.description": string;
  "seed-phrase-backup-warning.title": string;
  "select-asset.receive.title": string;
  "select-asset.send.title": string;
  "select-asset.title": string;
  "sell-crypto-input-amount.wallet-balance": string;
  "sell-crypto.amount-input-label": string;
  "sell-crypto.fiat-input-label": string;
  "send-tx.content.amount": string;
  "send-tx.content.back-to-refresh-quote": string;
  "send-tx.content.contract-address": string;
  "send-tx.content.detail.copy": string;
  "send-tx.content.detail.data": string;
  "send-tx.content.detail.error.invalid-custom-value": string;
  "send-tx.content.detail.error.invalid-data": string;
  "send-tx.content.detail.error.invalid-token-value": string;
  "send-tx.content.detail.function": string;
  "send-tx.content.detail.hex": string;
  "send-tx.content.detail.hide": string;
  "send-tx.content.detail.to": string;
  "send-tx.content.detail.view": string;
  "send-tx.content.max-slippage": string;
  "send-tx.content.minimum-received": string;
  "send-tx.content.network": string;
  "send-tx.content.network-fee": string;
  "send-tx.content.network-fee-info": string;
  "send-tx.content.network-fee.estimated-fee": string;
  "send-tx.content.network-fee.estimated-time.desc": string;
  "send-tx.content.network-fee.estimated-time.title": string;
  "send-tx.content.network-fee.title": string;
  "send-tx.content.network-fee.total": string;
  "send-tx.content.origin": string;
  "send-tx.content.price-impact": string;
  "send-tx.content.price-impact-info": string;
  "send-tx.content.provider-fee": string;
  "send-tx.content.provider-fee-info": string;
  "send-tx.content.quote": string;
  "send-tx.content.swap": string;
  "send-tx.content.swap-quote-expire-in": string;
  "send-tx.content.swap-quote-expired": string;
  "send-tx.decoding-warning": string;
  "send-tx.nonce-warning": string;
  "send-tx.title": string;
  "send-tx.title.contract": string;
  "send-tx.title.contract-deploy": string;
  "send-tx.title.swap": string;
  "send.available-balance": string;
  "send.balance": string;
  "send.confirm.dot.inactive-account": string;
  "send.confirm.hardware-wallet-failed-message": string;
  "send.confirm.hardware-wallet-gas-info": string;
  "send.confirm.hardware-wallet-info": string;
  "send.confirm.inactive-account": string;
  "send.confirm.ksm.inactive-account": string;
  "send.confirm.recipient-not-owner-nor-approved": string;
  "send.confirm.recipient-not-registered-token": string;
  "send.confirm.redelegation-in-progress": string;
  "send.confirm.reserve-fee": string;
  "send.confirm.reserve-fee-info": string;
  "send.confirm.validation.generic": string;
  "send.dust-balance": string;
  "send.hardware-wallet-failed-transaction-modal.ledger-disconnected": string;
  "send.hardware-wallet-failed-transaction-modal.transaction-rejected-on-device": string;
  "send.hardware-wallet-failed-transaction-modal.usb-connection-failed": string;
  "send.hardware-wallet-message": string;
  "send.hardware-wallet-message-app": string;
  "send.low-gas-warning": string;
  "send.max-button-disabled.not-enough-balance": string;
  "send.non-transferable-balance": string;
  "send.nonce-warning": string;
  "send.tag-optional": string;
  "send.title": string;
  "set-password.heading": string;
  "set-password.heading-new": string;
  "set-password.subheading": string;
  "set-password.subheading-new": string;
  "settings-modal.mev-protection": string;
  "settings-modal.mev-tooltip": string;
  "settings-modal.title": string;
  "settings.address-book": string;
  "settings.address-book.add-wallet": string;
  "settings.address-book.no-wallets": string;
  "settings.advanced-gas": string;
  "settings.advanced-gas.tooltip": string;
  "settings.advanced-transaction-data": string;
  "settings.advanced-transaction-data.tooltip": string;
  "settings.analytics": string;
  "settings.analytics.tooltip": string;
  "settings.backup-wallet": string;
  "settings.biometric-enable": string;
  "settings.biometric-login": string;
  "settings.biometrics-enabled": string;
  "settings.blacklisted-dapps": string;
  "settings.change-account-name": string;
  "settings.change-wallet-name": string;
  "settings.connected-dapps": string;
  "settings.connections": string;
  "settings.custom-nonce": string;
  "settings.custom-nonce.tooltip": string;
  "settings.dapps-connections": string;
  "settings.default-wallet": string;
  "settings.default-wallet.tooltip": string;
  "settings.developer-settings": string;
  "settings.developer-settings.faucets-alert": string;
  "settings.enable-eth-sign": string;
  "settings.enable-eth-sign.tooltip": string;
  "settings.enable-export-private-key": string;
  "settings.enable-export-private-key.tooltip": string;
  "settings.enable-testnets": string;
  "settings.enable-testnets.tooltip": string;
  "settings.export-private-key": string;
  "settings.export-private-key.file-password.description": string;
  "settings.export-private-key.file-password.link": string;
  "settings.help": string;
  "settings.help.help-center": string;
  "settings.help.support": string;
  "settings.language": string;
  "settings.language.ar": string;
  "settings.language.bn": string;
  "settings.language.de": string;
  "settings.language.en": string;
  "settings.language.es-LA": string;
  "settings.language.fr": string;
  "settings.language.id": string;
  "settings.language.it": string;
  "settings.language.ja": string;
  "settings.language.ko": string;
  "settings.language.pt": string;
  "settings.language.ru": string;
  "settings.language.tr": string;
  "settings.language.uk-UA": string;
  "settings.language.vi": string;
  "settings.language.zh-CN": string;
  "settings.language.zh-TC": string;
  "settings.lock": string;
  "settings.manage-wallets": string;
  "settings.manage-wallets.caption": string;
  "settings.notifications": string;
  "settings.notifications.enable-push": string;
  "settings.notifications.product_announcement": string;
  "settings.notifications.product_announcement.tooltip": string;
  "settings.notifications.product_announcements": string;
  "settings.notifications.product_announcements.tooltip": string;
  "settings.notifications.send-receive": string;
  "settings.notifications.send-receive.tooltip": string;
  "settings.remove-account": string;
  "settings.remove-wallet": string;
  "settings.secure-wallet": string;
  "settings.share-feedback": string;
  "settings.show-private-key": string;
  "settings.sidepanel-enable": string;
  "settings.view-seed-phrase": string;
  "settings.wallet-name-already-exists": string;
  "settings.wallet-name-required": string;
  "settings.wallet-name-too-long": string;
  "setup-biometrics.heading": string;
  "setup-biometrics.steps": string;
  "setup-biometrics.subHeading": string;
  "setup-biometrics.subheading": string;
  "sign-message.address.mismatch": string;
  "sign-message.domain.mismatch": string;
  "sign-tx.EIP4361-warning": string;
  "sign-tx.advanced.view": string;
  "sign-tx.chainid.mismatch": string;
  "sign-tx.content.message": string;
  "sign-tx.content.origin": string;
  "sign-tx.instructions": string;
  "sign-tx.raw": string;
  "sign-tx.title": string;
  "stake-hint.apr-estimate": string;
  "stake-hint.claim-accessible-after-current-epoch": string;
  "stake-hint.delegation-active-after-current-epoch": string;
  "stake-hint.epoch-takes-2-4-days": string;
  "stake-hint.funds-available-in": string;
  "stake-hint.lock-time": string;
  "stake-hint.normal-fees-apply": string;
  "stake-hint.pool-staking-provider": string;
  "stake-hint.redelegate": string;
  "stake-hint.rewards": string;
  "stake-hint.rewards-calculation-after-unstake": string;
  "stake-hint.rewards-stop-immediately": string;
  "stake-hint.two-epochs-to-see-rewards": string;
  "stake-hint.unstake-anytime": string;
  "stake.advanced-options": string;
  "stake.advanced-options-validators": string;
  "stake.balance": string;
  "stake.rewards": string;
  "stake.select-validators": string;
  "stake.validators-header": string;
  "staking-list-item.coming-soon-for-ledger": string;
  "staking-overview.available": string;
  "staking-overview.available-balance-balance": string;
  "staking-overview.available-balance-blocked": string;
  "staking-overview.available-balance-frozen": string;
  "staking-overview.available-balance-locked": string;
  "staking-overview.available-balance-pending": string;
  "staking-overview.available-balance-reserved": string;
  "staking-overview.available-balance-staked": string;
  "staking-overview.claim-rewards": string;
  "staking-overview.lifetime-rewards": string;
  "staking-overview.lock-time-header": string;
  "staking-stake-now": string;
  "staking-teaser.claimable-rewards": string;
  "staking-teaser.description": string;
  "staking-teaser.get-started": string;
  "staking-teaser.native-staking": string;
  "staking-teaser.pool-staking": string;
  "staking.activating-delegations": string;
  "staking.active-delegations": string;
  "staking.active-validators": string;
  "staking.apr": string;
  "staking.available": string;
  "staking.binance-stake-info": string;
  "staking.claim": string;
  "staking.claim-delegation": string;
  "staking.claim-now": string;
  "staking.claim-rewards": string;
  "staking.claimable-delegations": string;
  "staking.compound": string;
  "staking.compound-now": string;
  "staking.cross-chain-redelegate": string;
  "staking.cross-chain-redelegate.bnb-smart-chain": string;
  "staking.deactivating-delegations": string;
  "staking.delegations-limit": string;
  "staking.delegations-remaining": string;
  "staking.description": string;
  "staking.epoch-header": string;
  "staking.epoch-period-day": string;
  "staking.epoch-period-days": string;
  "staking.epoch-period-hour": string;
  "staking.epoch-period-hours": string;
  "staking.epoch-period-minute": string;
  "staking.epoch-period-minutes": string;
  "staking.frozen": string;
  "staking.frozen-but-not-staked": string;
  "staking.highlight-stake-now": string;
  "staking.highlight-stake-with-trust": string;
  "staking.inactive-delegations": string;
  "staking.inactive-validators": string;
  "staking.list-item-available-date": string;
  "staking.list-item-description": string;
  "staking.list-item-rewards": string;
  "staking.list-item-staked": string;
  "staking.list-item-unstaking": string;
  "staking.lock-time-header": string;
  "staking.lock-time-period": string;
  "staking.minimum-staking-amount": string;
  "staking.minimum-to-claim": string;
  "staking.pending": string;
  "staking.pending-delegations": string;
  "staking.redelegate": string;
  "staking.rewards": string;
  "staking.select-validator": string;
  "staking.smartchain-banner-1": string;
  "staking.stake": string;
  "staking.stake-info": string;
  "staking.stake-now": string;
  "staking.staked": string;
  "staking.staking-overview": string;
  "staking.title": string;
  "staking.unstake": string;
  "staking.unstake-after-claim": string;
  "staking.unstake-now": string;
  "staking.validator-from": string;
  "staking.validator-list-active": string;
  "staking.validator-list-header": string;
  "staking.validator-list-inactive": string;
  "staking.validator-to": string;
  "staking.validators-modal-header": string;
  "swap-details.edit-slippage": string;
  "swap-details.minimum-amount-receive": string;
  "swap-details.network-fee": string;
  "swap-details.price-impact": string;
  "swap-details.provider": string;
  "swap-details.provider-fee": string;
  "swap-details.routing-fee": string;
  "swap-details.slippage-tolerance": string;
  "swap.notifications.title": string;
  "switch-modal.body": string;
  "switch-modal.body-incompatible": string;
  "switch-modal.connect-with": string;
  "switch-modal.disconnect": string;
  "switch-modal.disconnect-tooltip": string;
  "switch-modal.origin-not-connected": string;
  "switch-modal.switch-to": string;
  "switch-modal.title": string;
  "switch-network.switch-to": string;
  "switch-network.title": string;
  "switch-network.warning": string;
  "switch-wallets.connect-with": string;
  "switch-wallets.connected-wallet": string;
  "switch-wallets.current-wallet": string;
  "switch-wallets.description": string;
  "switch-wallets.switch": string;
  "switch-wallets.switch-to": string;
  "switch-wallets.title": string;
  "tab-earn": string;
  "tab-history": string;
  "tab-home": string;
  "tab-settings": string;
  "testnet-mode.title": string;
  "token-asset-list.empty-caption": string;
  "token-asset-list.empty-home-caption": string;
  "token-asset-list.empty-search-caption": string;
  "token-asset-list.manage-crypto": string;
  "token-asset-list.no-crypto-activated": string;
  "trade.modal-migrate.title": string;
  "transaction.approve.title": string;
  "transaction.btn-view-on-explorer": string;
  "transaction.cannot-find-transaction": string;
  "transaction.check-explorer": string;
  "transaction.claim-rewards.title": string;
  "transaction.claim.title": string;
  "transaction.compound.title": string;
  "transaction.contract.title": string;
  "transaction.delegate.title": string;
  "transaction.inscribe.title": string;
  "transaction.receive.title": string;
  "transaction.redelegate.title": string;
  "transaction.send.title": string;
  "transaction.swap.title": string;
  "transaction.tesnet-transaction": string;
  "transaction.testnet-transaction": string;
  "transaction.trade.title": string;
  "transaction.trust-line.title": string;
  "transaction.undelegate.title": string;
  "tron.bandwidth.summary": string;
  "tron.bandwidth.used": string;
  "tron.energy.summary": string;
  "tron.energy.used": string;
  "tron.fees.disclaimer": string;
  "tron.fees.discount.info": string;
  "tron.resources.bandwidth": string;
  "tron.resources.energy": string;
  "tron.resources.info.bandwidth": string;
  "tron.resources.info.energy": string;
  "tron.resources.info.title": string;
  "ui.colorMode": string;
  "ui.colorMode.dark": string;
  "ui.colorMode.light": string;
  "ui.colorMode.system": string;
  "uikit.collapse.hide-details": string;
  "uikit.collapse.view-details": string;
  "universal-gas.custom-fee": string;
  "universal-gas.modal.title": string;
  "universal-gas.not-enough-balance": string;
  "unlock.cannot-login": string;
  "unlock.forgot-password": string;
  "unlock.memory-error": string;
  "unlock.reset-wallet": string;
  "unlock.subheading": string;
  "unlock.use-password-instead": string;
  "unstake.advanced-options": string;
  "unstake.balance": string;
  "unsupported-page.body": string;
  "unsupported-page.title": string;
  "validate-address.generic": string;
  "validate-address.receiver-matches-sender": string;
  "validate-allowance.decimals": string;
  "validate-allowance.generic": string;
  "validate-allowance.maximum": string;
  "validate-allowance.minimum": string;
  "validate-amount.decimals": string;
  "validate-amount.dot.less-than-1": string;
  "validate-amount.gas": string;
  "validate-amount.generic": string;
  "validate-amount.ksm.less-than-00034": string;
  "validate-amount.max": string;
  "validate-amount.maximum": string;
  "validate-amount.min": string;
  "validate-amount.minimum": string;
  "validate-amount.minimum-threshold": string;
  "validate-asset-decimal.generic": string;
  "validate-chain-id.generic.number": string;
  "validate-chain-id.generic.rpc": string;
  "validate-chain-id.generic.unique": string;
  "validate-number.no-limit-set": string;
  "validate-number.not-a-number": string;
  "validate-password.case": string;
  "validate-password.common": string;
  "validate-password.digit": string;
  "validate-password.length": string;
  "validate-password.max-length": string;
  "validate-password.symbol": string;
  "validate-seed-phrase.generic": string;
  "validate-seed-phrase.length": string;
  "validate-seed-phrase.length-12": string;
  "validate-seed-phrase.length-24": string;
  "validate-tag.all-numbers": string;
  "validate-tag.in-range": string;
  "validate-url.generic": string;
  "validate-url.only-plain-localhost": string;
  "validate-url.prefix": string;
  "validate-url.secure-prefix": string;
  "validate.generic": string;
  "validation.error-max-amount": string;
  "validation.error-min-amount": string;
  "validation.sell-crypto-error-balance-exceeded": string;
  "validation.sell-crypto-error-max-amount": string;
  "validation.sell-crypto-error-min-amount": string;
  "validators.list-item-description": string;
  "verify-identity.heading": string;
  "verify-identity.subheading": string;
  "verify-password-popup.title": string;
  "verify-password.heading": string;
  "verify-password.subheading": string;
  "wallet-item.back-up-mnemonic-badge": string;
  "wallet-more-actions.fullscreen": string;
  "wallet-more-actions.sidepanel": string;
  "wallet-more-actions.support": string;
  "wallet-select.multi-chain-wallet-description": string;
  "wallet-selector-popup.add-account-button": string;
  "wallet-selector-popup.add-new-wallet-button": string;
  "wallet-selector-popup.hardware-wallets": string;
  "wallet-selector-popup.manage-wallets-button": string;
  "wallet-selector-popup.max-limit-reached": string;
  "wallet-selector-popup.mnemonic-wallets": string;
  "wallet-selector-popup.private-key-wallets": string;
  "wallets.account-name": string;
  "wallets.private-key": string;
  "wallets.secret-phrase": string;
  "wallets.wallet-accounts": string;
  "wallets.wallet-name": string;
  "warning.backup-secret-phrase": string;
  "welcome.additional-wallet.heading": string;
  "welcome.connect.heading": string;
  "welcome.create-new-wallet": string;
  "welcome.create.description": string;
  "welcome.create.subheading": string;
  "welcome.create.title": string;
  "welcome.creating-wallet": string;
  "welcome.existing-wallet": string;
  "welcome.first-wallet.heading": string;
  "welcome.heading": string;
  "welcome.import-hw.description": string;
  "welcome.import-hw.title": string;
  "welcome.import-ledger.description": string;
  "welcome.import-ledger.title": string;
  "welcome.import.description": string;
  "welcome.import.title": string;
  "welcome.subheading": string;
  "welcome.terms": string;
  "wmp-swap-minimum-received": string;
  "your-addresses.empty-search": string;
  "your-addresses.title": string;
}

interface PushNotifications {
  isPushEnabled: boolean;
  isSendAndReceiveEnabled: boolean;
  topics: Topics;
}

interface Topics {
  product_announcement: boolean;
}

interface Privacy {
  hideBalancesOnDashboard: boolean;
  isAnalyticsEnabled: boolean;
}

interface DeveloperSettings {
  isAdvancedGasControlsEnabled: boolean;
  isAdvancedTransactionDataEnabled: boolean;
  isCustomNonceEnabled: boolean;
  isEthSignEnabled: boolean;
  isExportPrivateKeyEnabled: boolean;
}

interface SdkFeatures {
  earn: null;
  gasStation: null;
  gasStatus: null;
  navigation: null;
  prepareSend: null;
  stake: null;
  stakeDetails: null;
  stakeDetailsError: null;
  validatorSelector: null;
}

interface Nft {
  collections: any[];
  collectionsLastSync: null;
  nfts: Rates;
  reportedByWallet: Rates;
}

interface Migrations {
  postBootVersion: number;
  version: number;
}

interface Fiat {
  items: Item2[];
  rates: Rates;
}

interface Rates {}

interface Item2 {
  change_24h: number;
  id: string;
  price: number;
  provider: string;
  slug: string;
}

interface Dapps2 {
  blacklistedSites: any[];
  connectedDapps: ConnectedDapps;
  connectedSites: any[];
  dapps: Dapps;
  selectedAddress: null;
  selectedPublicKey: null;
}

interface Dapps {
  "0e70446c-9bbe-43fd-a2bf-876abbf4dfd3": _0e70446c9bbe43fda2bf876abbf4dfd32;
}

interface _0e70446c9bbe43fda2bf876abbf4dfd32 {
  icon: string;
  id: string;
  origin: string;
  title: string;
}

interface ConnectedDapps {
  "0e70446c-9bbe-43fd-a2bf-876abbf4dfd3": _0e70446c9bbe43fda2bf876abbf4dfd3[];
}

interface _0e70446c9bbe43fda2bf876abbf4dfd3 {
  accountId: string;
  address: string;
  date: number;
  id: string;
  networkId: string;
  walletId: string;
}

interface Blockchains {
  blockchainsLastSync: number;
  customItems: CustomItems;
  filterByBlockchain: string;
  items: Items;
  selectedBlockchain: string;
  selectedBlockchainOnBinance: string;
  selectedBlockchainOnSolana: string;
  selectedBlockchainType: string;
  selectedBlockchainTypeOnBinance: string;
  selectedBlockchainTypeOnSolana: string;
  validatorsLastSync: number;
}

interface Items {
  aeternity: Aeternity;
  agoric: Agoric;
  aion: Aeternity;
  akash: Akash;
  algorand: Algorand;
  aptos: Aptos;
  arbitrum: Arbitrum;
  aurora: Aurora;
  avalanchec: Avalanchec;
  axelar: Axelar;
  base: Aurora;
  binance: Binance;
  bitcoin: Bitcoin;
  bitcoincash: Bitcoincash;
  blast: Aurora;
  boba: Aurora;
  bouncebit: Aurora;
  callisto: Callisto;
  cardano: Cardano;
  celo: Celo;
  cfxevm: Aurora;
  classic: Aurora;
  cosmos: Binance;
  cronos: Cronos;
  cryptoorg: Cryptoorg;
  dash: Dash;
  decred: Decred;
  digibyte: Bitcoincash;
  doge: Dash;
  elrond: Elrond;
  ethereum: Aurora;
  evmos: Aurora;
  fantom: Celo;
  filecoin: Algorand;
  fio: Fio;
  firo: Firo;
  gochain: Callisto;
  greenfield: Greenfield;
  groestlcoin: Bitcoincash;
  harmony: Elrond;
  heco: Heco;
  icon: Aeternity;
  internet_computer: Internetcomputer;
  iotexevm: Iotexevm;
  juno: Axelar;
  kaia: Kaia;
  kava: Agoric;
  kavaevm: Kavaevm;
  kcc: Kcc;
  kusama: Kusama;
  linea: Aurora;
  litecoin: Litecoin;
  manta: Aurora;
  mantle: Aurora;
  merlin: Aurora;
  metis: Aurora;
  moonbeam: Kaia;
  moonriver: Moonriver;
  nano: Fio;
  nativeevmos: Cryptoorg;
  nativeinjective: Akash;
  near: Algorand;
  nebulas: Aeternity;
  neon: Aurora;
  neutron: Akash;
  nimiq: Aeternity;
  ontology: Aeternity;
  opbnb: Aurora;
  optimism: Optimism;
  osmosis: Cryptoorg;
  polkadot: Kusama;
  polygon: Aurora;
  polygonzkevm: Polygonzkevm;
  qtum: Bitcoincash;
  ravencoin: Dash;
  ripple: Algorand;
  ronin: Ronin;
  scroll: Optimism;
  sei: Akash;
  smartchain: Smartchain;
  solana: Solana;
  sonic: Aurora;
  stargaze: Axelar;
  stellar: Algorand;
  stride: Axelar;
  sui: Algorand;
  terra: Axelar;
  tezos: Algorand;
  theta: Aeternity;
  thorchain: Agoric;
  thundertoken: Callisto;
  ton: Algorand;
  tron: Aeternity;
  vechain: Vechain;
  viacoin: Bitcoincash;
  viction: Aurora;
  wanchain: Aurora;
  waves: Aeternity;
  xdai: Xdai;
  zcash: Zcash;
  zelcash: Zelcash;
  zetachain: Akash;
  zetaevm: Zetaevm;
  zilliqa: Elrond;
  zklinknova: Greenfield;
  zksync: Polygonzkevm;
}

interface Zetaevm {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info3;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Zelcash {
  base58Hasher: string;
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation3[];
  displayName: string;
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  p2pkhPrefix: number;
  p2shPrefix: number;
  publicKeyHasher: string;
  publicKeyType: string;
  staticPrefix: number;
  symbol: string;
}

interface Zcash {
  base58Hasher: string;
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation3[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  p2pkhPrefix: number;
  p2shPrefix: number;
  publicKeyHasher: string;
  publicKeyType: string;
  staticPrefix: number;
  symbol: string;
}

interface Xdai {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info4;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Vechain {
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Solana {
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation6[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Derivation6 {
  path: string;
  name?: string;
}

interface Smartchain {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  slip44: number;
  symbol: string;
  testFolderName: string;
}

interface Ronin {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info4;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  slip44: number;
  symbol: string;
}

interface Polygonzkevm {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  slip44: number;
  symbol: string;
}

interface Optimism {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  slip44: number;
  symbol: string;
}

interface Moonriver {
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info7;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Info7 {
  rpc: string;
  url: string;
}

interface Litecoin {
  base58Hasher: string;
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation5[];
  explorer: Explorer2;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  p2pkhPrefix: number;
  p2shPrefix: number;
  publicKeyHasher: string;
  publicKeyType: string;
  symbol: string;
}

interface Derivation5 {
  path: string;
  xprv: string;
  xpub: string;
  name?: string;
}

interface Kusama {
  addressHasher: string;
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  ss58Prefix: number;
  symbol: string;
}

interface Kcc {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
  testFolderName: string;
}

interface Kavaevm {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info6;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Info6 {
  client: string;
  documentation: string;
  rpc: string;
  url: string;
}

interface Kaia {
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info5;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Info5 {
  documentation: string;
  rpc: string;
  url: string;
}

interface Iotexevm {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info3;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Internetcomputer {
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation4[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Derivation4 {
  path: string;
  xpriv: string;
  xpub: string;
}

interface Heco {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  slip44: number;
  symbol: string;
  testFolderName: string;
}

interface Greenfield {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Firo {
  base58Hasher: string;
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation3[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  p2pkhPrefix: number;
  p2shPrefix: number;
  publicKeyHasher: string;
  publicKeyType: string;
  symbol: string;
}

interface Fio {
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
  url: string;
}

interface Elrond {
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer2;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Decred {
  base58Hasher: string;
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation3[];
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  p2pkhPrefix: number;
  p2shPrefix: number;
  publicKeyHasher: string;
  publicKeyType: string;
  staticPrefix: number;
  symbol: string;
}

interface Dash {
  base58Hasher: string;
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation3[];
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  p2pkhPrefix: number;
  p2shPrefix: number;
  publicKeyHasher: string;
  publicKeyType: string;
  symbol: string;
}

interface Cryptoorg {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer3;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info4;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Cronos {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info4;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
  testFolderName: string;
}

interface Celo {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info4;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Cardano {
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Callisto {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Bitcoincash {
  base58Hasher: string;
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation3[];
  explorer: Explorer2;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  p2pkhPrefix: number;
  p2shPrefix: number;
  publicKeyHasher: string;
  publicKeyType: string;
  symbol: string;
}

interface Derivation3 {
  path: string;
  xprv: string;
  xpub: string;
}

interface Bitcoin {
  base58Hasher: string;
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation2[];
  explorer: Explorer3;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  p2pkhPrefix: number;
  p2shPrefix: number;
  publicKeyHasher: string;
  publicKeyType: string;
  symbol: string;
}

interface Derivation2 {
  name: string;
  path: string;
  xprv: string;
  xpub: string;
}

interface Binance {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer3;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Axelar {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer2;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Avalanchec {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info4;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
  testFolderName: string;
}

interface Info4 {
  client: string;
  clientDocs: string;
  clientPublic: string;
  url: string;
}

interface Aurora {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Arbitrum {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  slip44: number;
  symbol: string;
}

interface Aptos {
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Algorand {
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Akash {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  displayName: string;
  explorer: Explorer3;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info3;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Info3 {
  documentation: string;
  url: string;
}

interface Agoric {
  addressHasher: string;
  blockchain: string;
  chainId: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer3;
  hrp: string;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Explorer3 {
  accountPath: string;
  sampleAccount: string;
  sampleTx: string;
  txPath: string;
  url: string;
}

interface Aeternity {
  blockchain: string;
  coinId: number;
  curve: string;
  customTokensEnabled: boolean;
  decimals: number;
  derivation: Derivation[];
  explorer: Explorer2;
  iconUrl: string;
  id: string;
  info: Info2;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  publicKeyType: string;
  symbol: string;
}

interface Info2 {
  documentation: string;
  rpc: string;
  source: string;
  url: string;
}

interface Explorer2 {
  accountPath: string;
  txPath: string;
  url: string;
}

interface Derivation {
  path: string;
}

interface CustomItems {
  "dapp-custom-network-0x530": Dappcustomnetwork0x530;
  "dapp-custom-network-0x531": Dappcustomnetwork0x530;
  "dapp-custom-network-0x66eee": Dappcustomnetwork0x530;
}

interface Dappcustomnetwork0x530 {
  blockchain: string;
  chainId: string;
  coinId: number;
  customTokensEnabled: boolean;
  decimals: number;
  explorer: Explorer;
  iconUrl: string;
  id: string;
  info: Info;
  isCustom: boolean;
  isDappCompatible: boolean;
  isEIP1559: boolean;
  name: string;
  symbol: string;
}

interface Info {
  rpc: string;
}

interface Explorer {
  url: string;
}

interface Asset {
  assetsLastSync: number;
  assetsPerWallet: AssetsPerWallet;
  assetsToBeMigrated: AssetsToBeMigrated;
  assetsWithBalanceAlreadyEnabled: AssetsWithBalanceAlreadyEnabled;
  cexFundingAssets: CexFundingAssets;
  itemsV2: any[];
  marketSentimentSupportedCrypto: string[];
}

interface CexFundingAssets {
  "coinbase-pay": string[];
}

interface AssetsWithBalanceAlreadyEnabled {
  "3320ad3f-89e6-47f1-93c5-ae0ba885871a": boolean;
  "8214dced-a77c-4866-a59f-0c5f978fe366": boolean;
  null: boolean;
}

interface AssetsToBeMigrated {
  items: Item[];
  lastSync: number;
}

interface Item {
  contract_address?: string;
  contract_decimals: number;
  symbol: string;
  coin_id?: number;
}

interface AssetsPerWallet {
  "3320ad3f-89e6-47f1-93c5-ae0ba885871a": _3320ad3f89e647f193c5ae0ba885871a;
  "8214dced-a77c-4866-a59f-0c5f978fe366": _8214dceda77c4866a59f0c5f978fe366;
  null: Null;
}

interface Null {
  assetsLastSync: null;
  itemsV2: ItemsV23[];
  testItems: any[];
}

interface ItemsV23 {
  assetId: string;
  balance: string;
  blockchainId: string;
  decimals: number;
  iconUrl: string;
  isCustomAsset?: boolean;
  isShownInHomeScreen: boolean;
  name: string;
  symbol: string;
  address?: string;
  type?: string;
}

interface _8214dceda77c4866a59f0c5f978fe366 {
  assetsLastSync: null;
  itemsV2: ItemsV22[];
  testItems: any[];
}

interface ItemsV22 {
  assetId: string;
  balance: string;
  blockchainId: string;
  decimals: number;
  iconUrl: string;
  isCustomAsset?: boolean;
  isShownInHomeScreen: boolean;
  name: string;
  symbol: string;
  defaultSwapPair?: null;
  isBuyCryptoEnabled?: boolean;
  isSellCryptoEnabled?: boolean;
  isSwapEnabled?: boolean;
  address?: string;
  type?: string;
  fromDB?: boolean;
  isUserCustomAsset?: boolean;
}

interface _3320ad3f89e647f193c5ae0ba885871a {
  assetsLastSync: null;
  itemsV2: ItemsV2[];
  testItems: any[];
}

interface ItemsV2 {
  assetId: string;
  balance: string;
  blockchainId: string;
  decimals: number;
  iconUrl: string;
  isCustomAsset?: boolean;
  isShownInHomeScreen: boolean;
  name: string;
  symbol: string;
  defaultSwapPair?: null;
  isBuyCryptoEnabled?: boolean;
  isSellCryptoEnabled?: boolean;
  isSwapEnabled?: boolean;
  address?: string;
  type?: string;
}

interface App {
  analyticsQueue: any[];
  authIdentifier: string;
  authenticated: boolean;
  authenticating: boolean;
  countryCode: string;
  deviceId: string;
  featureFlags: FeatureFlags;
  firstTime: boolean;
  hashKey: string;
  icon: string;
  iconTheme: string;
  lastTimeClosedWalletModal: number;
  legacyDeviceId: null;
  lockTimeInMinutes: number;
  migrated: boolean;
  newAuthMigrated: boolean;
  newFlag: NewFlag;
  oneTap: OneTap;
  preventAutoTriggerBiometrics: boolean;
  showEmptyWalletImportedModal: boolean;
  sidePanelOpened: boolean;
  storageVersion: string;
  toasts: any[];
  walletNewlyImported: boolean;
  warningDisplayed: boolean;
  warningDisplayedSent: boolean;
}

interface OneTap {
  dismissCount: number;
  isOneTapDisabled: boolean;
  lastTimeClosed: number;
}

interface NewFlag {
  EARN: boolean;
}

interface FeatureFlags {
  FIAT_EXPERIMENT: string;
  FLEX_GAS_SEND: boolean;
  MARKET_SENTIMENT_EXPERIMENT: boolean;
  ONE_TAP_EXPERIMENT: boolean;
}
