import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import type { WalletAccount, Wallet } from './types';

// Typed hooks for React components
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Convenience hooks for specific slices
export const useApp = () => useAppSelector((state) => state.app);
export const useSettings = () => useAppSelector((state) => state.settings);
export const useWallet = () => useAppSelector((state) => state.wallet);

// Specific selector hooks for common use cases
export const useIsAuthenticated = () => useAppSelector((state) => state.app.authenticated);
export const useIsOnBoarded = () => useAppSelector((state) => state.app.onBoarded);
export const useSelectedNetwork = () => useAppSelector((state) => state.app.selected_network_name);
export const useIsRefreshing = () => useAppSelector((state) => state.wallet.refreshing);

// Wallet-specific hooks
export const useSelectedWalletId = () => useAppSelector((state) => state.wallet.selectedWalletId);
export const useSelectedAccountId = () => useAppSelector((state) => state.wallet.selectedAccountId);
export const useWallets = () => useAppSelector((state) => state.wallet.wallets);
export const useWalletsArray = () => {
  return useAppSelector((state) => state.wallet.wallets);
};

export const useSelectedWallet = () => {
  const { wallets, selectedWalletId } = useAppSelector((state) => state.wallet);
  return wallets.find((w) => w.id === selectedWalletId);
};

export const useSelectedAccount = () => {
  const { walletsAccounts, selectedAccountId } = useAppSelector((state) => state.wallet);
  return walletsAccounts.find((a) => a.id === selectedAccountId);
};

export const useAccountsForWallet = (walletId?: string) => {
  const { walletsAccounts, selectedWalletId } = useAppSelector((state) => state.wallet);
  const targetWalletId = walletId || selectedWalletId;
  return walletsAccounts.filter((a) => a.walletId === targetWalletId);
};

export const useAccountsArrayForWallet = (walletId?: string) => {
  return useAccountsForWallet(walletId);
};

// Alias for useAccountsArrayForWallet using selected wallet
export const useAccountList = () => useAccountsArrayForWallet();

// Get all wallets with their accounts
export const useWalletsWithAccounts = () => {
  const wallets = useWalletsArray();
  const accounts = useAppSelector((state) => state.wallet.walletsAccounts);
  return wallets.map((wallet) => ({
    ...wallet,
    accounts: accounts.filter((a) => a.walletId === wallet.id),
  }));
};

// Settings hooks
export const useBaseCurrency = () => useAppSelector((state) => state.settings.baseCurrency);
