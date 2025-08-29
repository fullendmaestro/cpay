import { useApp, useWallet, useAppDispatch, updateERC20Asset } from '@cpay/wallet-store';
import { getSeiBalance, geterc20Balance } from '@cpay/wallet-sdk';
import { useEffect, useCallback } from 'react';

export const useAssets = () => {
  const coinGeckoBaseURL = 'https://api.coingecko.com/api/v3/simple/price';

  const { selectedWalletId, selectedAccountId, walletsAccounts } = useWallet();
  const { selected_network_name } = useApp();
  const dispatch = useAppDispatch();

  const selectedAccount =
    selectedWalletId && selectedAccountId ? walletsAccounts[selectedWalletId]?.[selectedAccountId] : null;

  const seiTokenAsset = selectedAccount?.seiTokenAsset;
  const erc20Assets = selectedAccount?.erc20Assets;
  const erc721Assets = selectedAccount?.erc721Assets;

  // Helper to fetch price info from CoinGecko
  const fetchCoinGeckoPrice = async (coinGeckoId: string) => {
    try {
      const url = `${coinGeckoBaseURL}?ids=${coinGeckoId}&vs_currencies=usd&include_24hr_change=true`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      if (!data[coinGeckoId]) return null;
      return {
        current_price: data[coinGeckoId].usd,
        price_change_24h: data[coinGeckoId].usd_24h_change,
      };
    } catch {
      return null;
    }
  };

  // Fetch and update asset balances and prices
  const fetchAssets = useCallback(async () => {
    if (!selectedAccount || !selectedAccount.evmAddress) return;

    try {
      // Fetch native SEI balance
      const seiResult = await getSeiBalance(selected_network, selectedAccount.evmAddress);
      let seiPriceInfo = null;
      // Use coinGeckoId from asset if available, fallback to 'sei-network'
      const seiCoinGeckoId = selectedAccount.seiTokenAsset?.coinGeckoId || 'sei-network';
      seiPriceInfo = await fetchCoinGeckoPrice(seiCoinGeckoId);
      dispatch(
        updateSeiTokenAsset({
          walletId: selectedWalletId!,
          accountId: selectedAccountId!,
          balance: seiResult.balance.ether,
          coinGeckoId: seiCoinGeckoId,
          current_price: seiPriceInfo?.current_price,
          price_change_24h: seiPriceInfo?.price_change_24h,
        }),
      );

      // Fetch ERC20 balances and prices
      if (erc20Assets && erc20Assets.length > 0) {
        for (const asset of erc20Assets) {
          try {
            const erc20Result = await geterc20Balance(selected_network, selectedAccount.evmAddress, asset.tokenAddress);
            let erc20PriceInfo = null;
            if (asset.coinGeckoId) {
              erc20PriceInfo = await fetchCoinGeckoPrice(asset.coinGeckoId);
            }
            dispatch(
              updateERC20Asset({
                walletId: selectedWalletId!,
                accountId: selectedAccountId!,
                tokenAddress: asset.tokenAddress,
                balance: erc20Result.balance.raw,
                formatted: erc20Result.balance.formatted,
                decimals: erc20Result.balance.decimals,
                coinGeckoId: asset.coinGeckoId,
                current_price: erc20PriceInfo?.current_price,
                price_change_24h: erc20PriceInfo?.price_change_24h,
              }),
            );
          } catch (e) {
            // Optionally handle per-token error
          }
        }
      }
    } catch (e) {
      // Optionally handle global error
    }
  }, [selectedAccount, selected_network_name, erc20Assets, selectedWalletId, selectedAccountId, dispatch]);

  // Fetch assets on mount and when dependencies change
  useEffect(() => {
    fetchAssets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAssets]);

  // Manual refresh
  const refreshAssets = fetchAssets;

  return {
    selectedAccount,
    seiTokenAsset,
    erc20Assets,
    erc721Assets,
    refreshAssets,
  };
};
