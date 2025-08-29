import BottomModal from '@/components/ButtomDrawer';
import { CopyIcon, CheckIcon } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
import { useState } from 'react';

interface AddressDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  rows: Array<{
    label: string;
    badge: string;
    address?: string;
    iconSrc?: string;
  }>;
}

interface RowProps {
  label: string;
  badge: string;
  address?: string;
  copied: boolean;
  onCopy: () => void;
  iconSrc?: string;
}

const truncate = (v?: string, head = 6, tail = 4) => {
  if (!v) return 'Not available';
  if (v.length <= head + tail) return v;
  return `${v.slice(0, head)}…${v.slice(-tail)}`;
};

const AddressRow = ({ label, badge, address, copied, onCopy, iconSrc = '/assets/address_symbol.svg' }: RowProps) => {
  const disabled = !address;

  return (
    <button
      type='button'
      onClick={onCopy}
      disabled={disabled}
      className={[
        'w-full flex items-start gap-3 rounded-xl p-4',
        'bg-muted/60 hover:bg-muted transition-colors',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ].join(' ')}
      aria-label={`Copy ${label}`}
    >
      <img className='size-8 shrink-0' src={iconSrc} alt='address logo' />
      <div className='flex-1 text-left space-y-1'>
        <div className='flex items-center justify-between gap-2'>
          <h2 className='font-medium text-lg'>{label}</h2>
          <span className='text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800'>{badge}</span>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <p className='flex-1 min-w-0 text-xs font-mono text-muted-foreground break-all'>{truncate(address)}</p>
          <span className='shrink-0 text-muted-foreground'>
            {copied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
          </span>
        </div>
      </div>
    </button>
  );
};

const AddressDrawer = ({ isOpen, onClose, title, rows }: AddressDrawerProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (addr?: string, idx?: number) => {
    if (!addr || idx === undefined) return;
    await copyToClipboard(addr);
    setCopiedIndex(idx);
    window.setTimeout(() => setCopiedIndex(null), 1200);
  };

  return (
    <BottomModal isOpen={isOpen} onClose={onClose} title={title}>
      <div className='space-y-3'>
        {rows.map((row, idx) => (
          <AddressRow
            key={row.label}
            label={row.label}
            badge={row.badge}
            address={row.address}
            copied={copiedIndex === idx}
            onCopy={() => handleCopy(row.address, idx)}
            iconSrc={row.iconSrc}
          />
        ))}
      </div>
    </BottomModal>
  );
};

export default AddressDrawer;
