import { Plus, CreditCard, Wallet2, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import AccountItem from './AccountItem';
import { useNavigate } from 'react-router-dom';
import type { WalletAccount } from '@cpay/wallet-store';

interface WalletWithAccounts {
  id: string;
  name: string;
  type: 'mnemonic' | 'private key';
  balance: string;
  accounts: WalletAccount[];
}

interface WalletListProps {
  walletsWithAccounts: WalletWithAccounts[];
  selectedWalletId: string;
  selectedAccountId: string;
  expandedWallets: Set<string>;
  onToggleWalletExpansion: (walletId: string) => void;
  onAccountSelect: (accountId: string, walletId: string) => void;
  onWalletSelect: (walletId: string) => void;
  onAddMnemonicAccount: (walletId: string) => void;
  onClose: VoidFunction;
}

const WalletList = ({
  walletsWithAccounts,
  selectedWalletId,
  selectedAccountId,
  expandedWallets,
  onToggleWalletExpansion,
  onAccountSelect,
  onWalletSelect,
  onAddMnemonicAccount,
  onClose,
}: WalletListProps) => {
  const navigate = useNavigate();
  return (
    <div className='space-y-2'>
      {walletsWithAccounts.length === 0 ? (
        <div className='text-center py-12'>
          <div className='w-16 h-16 bg-muted/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
            <Wallet2 className='w-8 h-8 text-muted-foreground/60' />
          </div>
          <h3 className='text-lg font-medium mb-2'>No Wallets Found</h3>
          <p className='text-muted-foreground text-sm mb-6'>Create your first wallet to get started with MetaFox.</p>
          <Button
            className='mx-auto'
            onClick={async () => {
              const browser = await import('webextension-polyfill');
              const optionsUrl = browser.runtime.getURL('src/index.html#/welcome');
              await browser.tabs.create({ url: optionsUrl });
              onClose();
            }}
          >
            <Plus className='w-4 h-4 mr-2' />
            Create Wallet
          </Button>
        </div>
      ) : (
        walletsWithAccounts.map((walletWithAccounts) => {
          const isExpanded = expandedWallets.has(walletWithAccounts.id);
          const isWalletSelected = walletWithAccounts.id === selectedWalletId;
          const hasAccounts = walletWithAccounts.accounts.length > 0;

          return (
            <div
              key={walletWithAccounts.id}
              className={cn(
                'border rounded-lg bg-card transition-all duration-200',
                isWalletSelected ? 'border-primary/30 bg-primary/5' : 'border-border/40',
              )}
            >
              {/* Wallet Header - Collapsible */}
              <div
                className='p-4 cursor-pointer hover:bg-muted/10 transition-colors'
                onClick={() => onToggleWalletExpansion(walletWithAccounts.id)}
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-3'>
                    <div
                      className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center',
                        isWalletSelected ? 'bg-primary/20' : 'bg-muted/20',
                      )}
                    >
                      <Wallet2 className={cn('w-5 h-5', isWalletSelected ? 'text-primary' : 'text-muted-foreground')} />
                    </div>
                    <div>
                      <h3 className='font-medium text-base'>{walletWithAccounts.name}</h3>
                      <div className='flex items-center space-x-2 text-xs text-muted-foreground'>
                        <span className='capitalize'>
                          {walletWithAccounts.type === 'mnemonic'
                            ? 'Recovery Phrase'
                            : walletWithAccounts.type === 'private key'
                              ? 'Key'
                              : walletWithAccounts.type}
                        </span>
                        <span>•</span>
                        <span>
                          {hasAccounts
                            ? `${walletWithAccounts.accounts.length} account${walletWithAccounts.accounts.length > 1 ? 's' : ''}`
                            : 'No accounts'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <div className='text-right'>
                      <div className='text-base font-semibold'>$ {walletWithAccounts.balance}</div>
                      <div className='text-xs text-muted-foreground'>Total balance</div>
                    </div>
                    <div className={cn('transition-transform duration-200', isExpanded ? 'rotate-90' : 'rotate-0')}>
                      <ChevronRight className='w-5 h-5 text-muted-foreground' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Collapsible Content */}
              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                )}
              >
                <div className='border-t border-border/20 bg-muted/5'>
                  {hasAccounts ? (
                    <div className='p-2'>
                      <div className='space-y-1'>
                        {walletWithAccounts.accounts.map((account) => {
                          const isSelected =
                            account.id === selectedAccountId && walletWithAccounts.id === selectedWalletId;

                          return (
                            <AccountItem
                              key={account.id}
                              account={account}
                              walletId={walletWithAccounts.id}
                              isSelected={isSelected}
                              onAccountSelect={onAccountSelect}
                            />
                          );
                        })}
                      </div>

                      {/* Add Account Button - Only for mnemonic wallets */}
                      {walletWithAccounts.type === 'mnemonic' && (
                        <div className='flex justify-end mt-2 px-1'>
                          <Button
                            variant='secondary'
                            size='sm'
                            className='h-8 px-3 text-xs'
                            onClick={() => {
                              onAddMnemonicAccount(walletWithAccounts.id);
                              onClose();
                            }}
                          >
                            <Plus className='w-3 h-3 mr-1' />
                            Add account
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className='p-6 text-center'>
                      <div className='w-12 h-12 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-3'>
                        <CreditCard className='w-6 h-6 text-muted-foreground/60' />
                      </div>
                      <p className='text-sm text-muted-foreground mb-3'>No accounts in this wallet yet</p>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => {
                          onWalletSelect(walletWithAccounts.id);
                          onAddMnemonicAccount(walletWithAccounts.id);
                          onClose();
                        }}
                      >
                        <Plus className='w-4 h-4 mr-2' />
                        Create first account
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default WalletList;
