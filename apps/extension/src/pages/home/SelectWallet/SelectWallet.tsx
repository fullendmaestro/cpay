import BottomModal from '@/components/ButtomDrawer';
import { Button } from '@/components/ui/button';
import { DrawerTitle } from '@/components/ui/drawer-title';
import {
  useWallet,
  useAppDispatch,
  useWalletsWithAccounts,
  selectAccount,
  selectWallet,
  addAccount,
} from '@cpay/wallet-store';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import WalletList from './WalletList';
import { getPassword } from '@/lib/autoLockUtils';
import { CipherStoreManager } from '@cpay/cipher-store';
import { deriveAccountFromMnemonic, getAddressFromPublicKey, getSmartAccountAddress } from '@cpay/wallet-sdk';

export type SelectWalletProps = {
  readonly isVisible: boolean;
  readonly onClose: VoidFunction;
  readonly title?: string;
};

const SelectWallet = ({ isVisible, onClose, title = 'Select Account' }: SelectWalletProps) => {
  const navigate = useNavigate();
  const { selectedAccountId, selectedWalletId } = useWallet();
  const walletsWithAccounts = useWalletsWithAccounts();
  const dispatch = useAppDispatch();

  const [expandedWallets, setExpandedWallets] = useState<Set<string>>(new Set([selectedWalletId]));
  const [showNameDialog, setShowNameDialog] = useState(false);
  const [pendingWalletId, setPendingWalletId] = useState<string | null>(null);
  const [accountName, setAccountName] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAccountSelect = (accountId: string, walletId: string) => {
    if (walletId !== selectedWalletId) {
      dispatch(selectWallet(walletId));
    }
    dispatch(selectAccount(accountId));
    onClose();
  };

  const handleWalletSelect = (walletId: string) => {
    dispatch(selectWallet(walletId));
  };

  const toggleWalletExpansion = (walletId: string) => {
    const newExpanded = new Set(expandedWallets);
    if (newExpanded.has(walletId)) {
      newExpanded.delete(walletId);
    } else {
      newExpanded.add(walletId);
    }
    setExpandedWallets(newExpanded);
  };

  // Open dialog to prompt for account name
  const handleAddMnemonicAccount = useCallback((walletId: string) => {
    setPendingWalletId(walletId);
    setAccountName('');
    setShowNameDialog(true);
  }, []);

  // Actually create the new account for the mnemonic wallet
  const handleCreateMnemonicAccount = useCallback(async () => {
    if (!pendingWalletId || !accountName.trim()) return;
    setIsAdding(true);
    try {
      // Get password and cypherStoreId from wallet object
      console.log('wallet with accounts', walletsWithAccounts);
      const wallet = walletsWithAccounts.find((w) => w.id === pendingWalletId);
      console.log('wallet', wallet);
      if (!wallet || wallet.type !== 'mnemonic') throw new Error('Wallet not found or not mnemonic');
      const cypherStoreId = wallet.cypherStoreId;
      const password = await getPassword();
      if (!password) throw new Error('Failed to retrieve password');
      if (password) {
        const mnemonic = await CipherStoreManager.getEntry({
          entryID: cypherStoreId,
          password,
        });
        if (!mnemonic) throw new Error('Failed to retrieve mnemonic');
        // Find next derivation index
        const nextIndex =
          wallet.accounts.reduce(
            (max, acc) =>
              typeof acc.derivationIndex === 'number' && acc.derivationIndex > max ? acc.derivationIndex : max,
            -1,
          ) + 1;
        const publicKey = await deriveAccountFromMnemonic(mnemonic, nextIndex);
        // Create new account object
        const { v4: uuidv4 } = await import('uuid');
        const accountId = uuidv4();

        // Todo: ...
        const newAccount = {
          id: accountId,
          name: accountName.trim(),
          derivationIndex: nextIndex,
          publicKey: publicKey,
          address: await getAddressFromPublicKey(publicKey),
          smartAccountAddress: await getSmartAccountAddress(publicKey),
        };

        dispatch(selectWallet(pendingWalletId));
        dispatch(addAccount({ walletId: pendingWalletId, ...newAccount }));
        dispatch(selectAccount(accountId));
        setShowNameDialog(false);
        setPendingWalletId(null);
        setAccountName('');
      }
      onClose();
    } catch (err) {
      // Optionally show error
      // eslint-disable-next-line no-console
      console.error('Failed to add mnemonic account:', err);
    } finally {
      setIsAdding(false);
    }
  }, [pendingWalletId, accountName, walletsWithAccounts, dispatch, onClose]);

  return (
    <>
      <BottomModal
        isOpen={isVisible}
        onClose={onClose}
        title={DrawerTitle(title)}
        fullScreen
        footerComponent={
          <div className='flex gap-2 w-full'>
            <Button
              variant='secondary'
              className='flex-1 text-sm'
              onClick={async () => {
                const browser = await import('webextension-polyfill');
                const optionsUrl = browser.runtime.getURL('src/index.html#/welcome');
                await browser.tabs.create({ url: optionsUrl });
                onClose();
              }}
            >
              Add new wallet
            </Button>
            <Button
              variant='secondary'
              className='flex-1 text-sm'
              onClick={() => {
                navigate('/manage-wallets');
                onClose();
              }}
            >
              Manage wallets
            </Button>
          </div>
        }
      >
        <WalletList
          walletsWithAccounts={walletsWithAccounts}
          selectedWalletId={selectedWalletId}
          selectedAccountId={selectedAccountId}
          expandedWallets={expandedWallets}
          onToggleWalletExpansion={toggleWalletExpansion}
          onAccountSelect={handleAccountSelect}
          onWalletSelect={handleWalletSelect}
          onAddMnemonicAccount={handleAddMnemonicAccount}
          onClose={onClose}
        />
      </BottomModal>

      <Dialog open={showNameDialog} onOpenChange={setShowNameDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Account Name</DialogTitle>
          </DialogHeader>
          <Input
            autoFocus
            placeholder='Enter account name'
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            disabled={isAdding}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCreateMnemonicAccount();
            }}
          />
          <DialogFooter>
            <Button onClick={handleCreateMnemonicAccount} disabled={!accountName.trim() || isAdding}>
              {isAdding ? 'Adding...' : 'Add Account'}
            </Button>
            <DialogClose asChild>
              <Button variant='secondary' type='button' disabled={isAdding}>
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SelectWallet;
