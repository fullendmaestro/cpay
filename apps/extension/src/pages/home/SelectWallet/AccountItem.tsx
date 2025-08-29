import { CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { WalletAccount } from '@metafox/wallet-store'

interface AccountItemProps {
  account: WalletAccount
  walletId: string
  isSelected: boolean
  onAccountSelect: (accountId: string, walletId: string) => void
}

const AccountItem = ({ account, walletId, isSelected, onAccountSelect }: AccountItemProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between p-3 cursor-pointer hover:bg-muted/40 transition-all duration-150 rounded-md border',
        isSelected
          ? 'bg-primary/10 border-primary/30 shadow-sm'
          : 'bg-transparent border-transparent hover:border-border/40',
      )}
      onClick={() => onAccountSelect(account.id, walletId)}
    >
      <div className='flex items-center space-x-3'>
        <div
          className={cn(
            'w-8 h-8 rounded-lg flex items-center justify-center',
            isSelected ? 'bg-primary/20' : 'bg-muted/30',
          )}
        >
          <CreditCard
            className={cn('w-4 h-4', isSelected ? 'text-primary' : 'text-muted-foreground')}
          />
        </div>
        <div>
          <div className='font-medium text-sm'>{account.name}</div>
          <div className='text-xs text-muted-foreground'>$ 0.00</div>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <div
          className={cn(
            'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors',
            isSelected
              ? 'border-primary bg-primary'
              : 'border-muted-foreground/30 hover:border-muted-foreground/50',
          )}
        >
          {isSelected && <div className='w-2 h-2 bg-white rounded-full'></div>}
        </div>
      </div>
    </div>
  )
}

export default AccountItem
