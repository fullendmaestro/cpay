import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { WalletState, UpdateWalletPayload, UpdateAccountPayload, AddAccountPayload, Wallet } from '../types';

const initialState: WalletState = {
  selectedWalletId: '',
  selectedAccountId: '',
  lastRefresh: 0,
  refreshing: false,
  wallets: [],
  walletsAccounts: [],
  walletsAccountsAssets: {},
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    // Wallet management
    addWallet: (state, action: PayloadAction<Wallet>) => {
      state.wallets.push(action.payload);
    },
    updateWallet: (state, action: PayloadAction<UpdateWalletPayload>) => {
      const { walletId, wallet } = action.payload;
      const idx = state.wallets.findIndex((w) => w.id === walletId);
      if (idx !== -1) {
        // Only update fields that are defined, and never set required fields to undefined
        const prevWallet = state.wallets[idx];
        if (prevWallet) {
          const updatedWallet: Wallet = {
            balance: wallet.balance !== undefined ? wallet.balance : prevWallet.balance,
            id: wallet.id !== undefined ? wallet.id : prevWallet.id,
            name: wallet.name !== undefined ? wallet.name : prevWallet.name,
            type: wallet.type !== undefined ? wallet.type : prevWallet.type,
            cypherStoreId: wallet.cypherStoreId !== undefined ? wallet.cypherStoreId : prevWallet.cypherStoreId,
          };
          state.wallets[idx] = updatedWallet;
        }
      }
    },
    removeWallet: (state, action: PayloadAction<{ walletId: string }>) => {
      const { walletId } = action.payload;
      state.wallets = state.wallets.filter((w) => w.id !== walletId);
      state.walletsAccounts = state.walletsAccounts.filter((a) => a.walletId !== walletId);
      delete state.walletsAccountsAssets[walletId];
      if (state.selectedWalletId === walletId) {
        state.selectedWalletId = '';
        state.selectedAccountId = '';
      }
    },
    selectWallet: (state, action: PayloadAction<string>) => {
      state.selectedWalletId = action.payload;
      state.selectedAccountId = '';
    },

    // Account management
    addAccount: (state, action: PayloadAction<AddAccountPayload>) => {
      const { account } = action.payload;
      state.walletsAccounts.push(account);
    },
    updateAccount: (state, action: PayloadAction<UpdateAccountPayload>) => {
      const { accountId, account } = action.payload;
      const idx = state.walletsAccounts.findIndex((a) => a.id === accountId);
      if (idx !== -1) {
        // Only update fields that are defined, and never set required fields to undefined
        const prevAccount = state.walletsAccounts[idx];
        if (prevAccount) {
          const updatedAccount: typeof prevAccount = {
            walletId: account.walletId !== undefined ? account.walletId : prevAccount.walletId,
            derivationIndex:
              account.derivationIndex !== undefined ? account.derivationIndex : prevAccount.derivationIndex,
            name: account.name !== undefined ? account.name : prevAccount.name,
            id: account.id !== undefined ? account.id : prevAccount.id,
            publicKey: account.publicKey !== undefined ? account.publicKey : prevAccount.publicKey,
            address: account.address !== undefined ? account.address : prevAccount.address,
            smartAccountAddress:
              account.smartAccountAddress !== undefined ? account.smartAccountAddress : prevAccount.smartAccountAddress,
            isCirclePaymasterEnabled:
              account.isCirclePaymasterEnabled !== undefined
                ? account.isCirclePaymasterEnabled
                : prevAccount.isCirclePaymasterEnabled,
          };
          state.walletsAccounts[idx] = updatedAccount;
        }
      }
    },
    selectAccount: (state, action: PayloadAction<string>) => {
      state.selectedAccountId = action.payload;
    },

    // Asset balance updaters
    addERC20Asset: (
      state,
      action: PayloadAction<{
        walletId: string;
        accountId: string;
        asset: any;
      }>,
    ) => {
      const { walletId, accountId, asset } = action.payload;
      if (!state.walletsAccountsAssets[accountId]) {
        state.walletsAccountsAssets[accountId] = {
          erc20Assets: [],
          erc721Assets: [],
          erc2981Assets: [],
          nativeTokens: [],
        };
      }
      const assets = state.walletsAccountsAssets[accountId].erc20Assets;
      const exists = assets.some((a: any) => a.tokenAddress === asset.tokenAddress);
      if (!exists) {
        assets.push({
          id: asset.tokenAddress,
          tokenAddress: asset.tokenAddress,
          symbol: asset.symbol,
          decimals: asset.decimals,
          name: asset.name || '',
          logoUrl: asset.iconUrl ?? '',
          balance: asset.balance || '',
        });
      }
    },

    updateERC20Asset: (
      state,
      action: PayloadAction<{
        walletId: string;
        accountId: string;
        tokenAddress: string;
        balance: string;
        formatted: string;
        decimals: number;
        current_price?: number;
        price_change_24h?: number;
        coinGeckoId?: string;
      }>,
    ) => {
      const { accountId, tokenAddress, balance, decimals, current_price, price_change_24h, coinGeckoId } =
        action.payload;
      const assets = state.walletsAccountsAssets[accountId]?.erc20Assets;
      if (assets) {
        const asset = assets.find((a: any) => a.tokenAddress === tokenAddress);
        if (asset) {
          asset.balance = balance;
          asset.decimals = decimals;
          if (typeof current_price !== 'undefined') asset.current_price = current_price;
          if (typeof price_change_24h !== 'undefined') asset.price_change_24h = price_change_24h;
          if (typeof coinGeckoId !== 'undefined') asset.coinGeckoId = coinGeckoId;
        }
      }
    },

    // Wallet state management
    setRefreshing: (state, action: PayloadAction<boolean>) => {
      state.refreshing = action.payload;
      if (action.payload) {
        state.lastRefresh = Date.now();
      }
    },
    updateLastRefresh: (state) => {
      state.lastRefresh = Date.now();
    },
    resetWallet: () => initialState,
    clearWalletData: (state) => {
      state.wallets = [];
      state.walletsAccounts = [];
      state.walletsAccountsAssets = {};
      state.selectedWalletId = '';
      state.selectedAccountId = '';
    },
  },
});

export const {
  addWallet,
  updateWallet,
  removeWallet,
  selectWallet,
  addAccount,
  updateAccount,
  selectAccount,
  addERC20Asset,
  updateERC20Asset,
  setRefreshing,
  updateLastRefresh,
  resetWallet,
  clearWalletData,
} = walletSlice.actions;

export default walletSlice.reducer;
