// Redux store types for the metafox sei wallet extension

import { supportedNetworks } from '@cpay/wallet-sdk';

export type SupportedEvmNetworkName = (typeof supportedNetworks)[number]['name'];

export type AppTheme = 'dark' | 'light' | 'system';

export interface AppState {
  authenticated: boolean;
  selected_network_name: string;
  authenticating: boolean;
  passwordCypherStoreId: string | null;
  onBoarded: boolean;
}

export interface SettingsState {
  autoLockTimeOut: number;
  hidePortfolioBalances: boolean;
  openAsSidePanel: boolean;
  baseCurrency: string;
  theme: AppTheme;
}

export interface ERC20Asset {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  balance: string;
  tokenAddress: string;
  current_price?: number;
  price_change_24h?: number;
  coinGeckoId?: string;
  logoUrl: string;
}

export interface ERC721Asset {
  id: string;
  name: string;
  symbol: string;
  tokenId: string;
  owner: string;
}

export interface ERC2981Asset {
  id: string;
  name: string;
  symbol: string;
  tokenId: string;
  owner: string;
  royaltyPercentage: number;
}

export interface NativeToken {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  balance: string;
  current_price?: number;
  price_change_24h?: number;
  coinGeckoId?: string;
  logoUrl: string;
}

export interface WalletAccount {
  walletId: string;
  derivationIndex?: number;
  name: string;
  id: string;
  publicKey: string;
  address: string; // EVM address
  smartAccountAddress: string;
  isCirclePaymasterEnabled?: boolean;
}

export interface WalletsAccountsAssets {
  erc20Assets: ERC20Asset[];
  erc721Assets: ERC721Asset[];
  erc2981Assets: ERC2981Asset[];
  nativeTokens: NativeToken[];
}

export interface Wallet {
  balance: string;
  id: string;
  name: string;
  type: 'mnemonic' | 'private key';
  cypherStoreId: string;
}

export interface WalletState {
  selectedWalletId: string;
  selectedAccountId: string;
  lastRefresh: number;
  refreshing: boolean;
  wallets: Wallet[];
  walletsAccounts: WalletAccount[];
  walletsAccountsAssets: { [key: string]: WalletsAccountsAssets };
}

export interface UpdateWalletPayload {
  walletId: string;
  wallet: Partial<Wallet>;
}

export interface AddAccountPayload {
  account: WalletAccount;
}

export interface UpdateAccountPayload {
  accountId: string;
  account: Partial<WalletAccount>;
}

export interface RootState {
  app: AppState;
  settings: SettingsState;
  wallet: WalletState;
}
