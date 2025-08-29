import NumberFlow from '@number-flow/react';
import { RefreshCw, CopyIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn, truncateAddress } from '@/lib/utils';

interface BalanceSectionProps {
  onAddressClick: () => void;
  balanceVisible: boolean;
  onBalanceToggle: () => void;
  balance: number;
  refreshing: boolean;
  onRefresh: () => void;
  selectedAccount?: {
    evmAddress?: string;
  } | null;
}

const BalanceSection = ({
  onAddressClick,
  balanceVisible,
  onBalanceToggle,
  balance,
  refreshing,
  onRefresh,
  selectedAccount,
}: BalanceSectionProps) => {
  return (
    <div className='flex flex-col items-center text-center space-y-3'>
      {/* Main Balance with Refresh Button - Side by Side */}
      <div className='flex items-center justify-center space-x-2'>
        <h2
          data-testid='total-asset-balance'
          className='h-8 mb-8 text-5xl font-bold text-foreground transition-all ease-in-out duration-300 cursor-pointer hover:opacity-80 font-mono tabular-nums'
          onClick={onBalanceToggle}
        >
          {balanceVisible ? (
            <NumberFlow value={balance} prefix='$' format={{ notation: 'standard', minimumFractionDigits: 2 }} />
          ) : (
            <span>••••••</span>
          )}
        </h2>

        {/* Refresh Button - Side by Side with smaller size */}
        <Button
          variant='ghost'
          size='sm'
          className='h-8 w-8 p-0 pt-6'
          onClick={onRefresh}
          disabled={refreshing}
          data-testid='refresh-wallet-button'
          aria-label='Refresh'
        >
          <RefreshCw className={cn('h-4 w-4', refreshing && 'animate-spin')} />
        </Button>
      </div>

      {selectedAccount?.evmAddress && (
        <Button
          variant='ghost'
          className='rounded-full bg-accent/50 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono'
          onClick={onAddressClick}
        >
          {truncateAddress(selectedAccount.evmAddress)}
          <CopyIcon />
        </Button>
      )}
    </div>
  );
};

export default BalanceSection;
