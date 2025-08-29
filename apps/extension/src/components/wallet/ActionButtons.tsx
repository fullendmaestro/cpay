import { Send, Download, Repeat, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const ActionButtons = () => {
  const navigate = useNavigate();

  const handleSend = () => {
    // TODO: Navigate to send page when implemented
    toast.info('Send feature coming soon');
  };

  const handleReceive = () => {
    // TODO: Navigate to receive page when implemented
    toast.info('Receive feature coming soon');
  };

  const handleSwap = () => {
    // TODO: Navigate to swap page when implemented
    toast.info('Swap feature coming soon');
  };

  const handleBuy = () => {
    // TODO: Navigate to buy page when implemented
    toast.info('Buy feature coming soon');
  };

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-4 gap-6 max-w-xs' data-testid='dashboard-wallet-board'>
        <div className='flex flex-col items-center space-y-2'>
          <Button
            size='sm'
            variant='secondary'
            className='size-[3.5rem] rounded-full'
            data-testid='wallet-board-send-button'
            aria-label='Send'
            onClick={handleSend}
          >
            <Send className='h-5 w-5 text-primary' />
          </Button>
          <span className='text-xs font-medium text-muted-foreground'>Send</span>
        </div>

        <div className='flex flex-col items-center space-y-2'>
          <Button
            size='sm'
            variant='secondary'
            className='size-[3.5rem] rounded-full'
            data-testid='wallet-board-receive-button'
            aria-label='Receive'
            onClick={handleReceive}
          >
            <Download className='h-5 w-5 text-primary' />
          </Button>
          <span className='text-xs font-medium text-muted-foreground'>Receive</span>
        </div>

        <div className='flex flex-col items-center space-y-2'>
          <Button
            size='sm'
            variant='secondary'
            className='size-[3.5rem] rounded-full'
            data-testid='wallet-board-swap-button'
            aria-label='Swap'
            onClick={handleSwap}
          >
            <Repeat className='h-5 w-5 text-primary' />
          </Button>
          <span className='text-xs font-medium text-muted-foreground'>Swap</span>
        </div>

        <div className='flex flex-col items-center space-y-2'>
          <Button
            size='sm'
            variant='secondary'
            className='size-[3.5rem] rounded-full'
            data-testid='wallet-board-buy-button'
            aria-label='Buy'
            onClick={handleBuy}
          >
            <ShoppingCart className='h-5 w-5 text-primary' />
          </Button>
          <span className='text-xs font-medium text-muted-foreground'>Buy</span>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
