import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useAppSelector } from '@cpay/wallet-store';

interface WalletSelectorProps {
  onWalletSelect: () => void;
}

const WalletSelector = ({ onWalletSelect }: WalletSelectorProps) => {
  const { selectedWalletId, selectedAccountId, wallets, walletsAccounts } = useAppSelector((state) => state.wallet);

  // Get selected wallet and account
  const selectedWallet = selectedWalletId ? wallets[selectedWalletId] : null;
  const selectedAccount =
    selectedWalletId && selectedAccountId ? walletsAccounts[selectedWalletId]?.[selectedAccountId] : null;

  // Determine display logic
  const getDisplayInfo = () => {
    if (!selectedWallet || !selectedAccount) {
      return {
        walletName: 'No Wallet Selected',
        accountName: 'N/A',
        walletType: 'N/A',
        isActive: false,
      };
    }

    return {
      walletName: selectedWallet.name,
      accountName: selectedAccount.name,
      walletType: selectedWallet.type,
      isActive: true,
    };
  };

  const displayInfo = getDisplayInfo();

  return (
    <div className='p-2'>
      <Button
        variant='ghost'
        className='flex items-center space-x-2 cursor-pointer outline-none p-2 hover:bg-accent rounded-lg w-full justify-start'
        data-testid='wallet-select-button'
        onClick={onWalletSelect}
      >
        <div className='flex space-x-3 cursor-pointer'>
          {/* Wallet and Account Info */}
          <div className='max-w-[120px]'>
            <p className='text-sm font-medium text-foreground truncate max-w-[8rem]'>{displayInfo.walletName}</p>
            <div className='flex items-center space-x-2'>
              <p className='text-xs text-muted-foreground truncate max-w-[6rem]'>{displayInfo.accountName}</p>
            </div>
          </div>

          <ChevronDown className='text-muted-foreground h-4 w-4 flex-shrink-0' />
        </div>
      </Button>
    </div>
  );
};

export default WalletSelector;
