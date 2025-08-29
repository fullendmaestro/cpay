import BottomModal from '@/components/ButtomDrawer';
import { useAppDispatch, setAutoLockTimeOut, useSettings } from '@cpay/wallet-store';
import { DrawerTitle } from '@/components/ui/drawer-title';

interface AutoLockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const intervals = [
  { label: '10 minutes', value: 10 },
  { label: '30 minutes', value: 30 },
  { label: '1 hour', value: 60 },
  { label: '12 hours', value: 720 },
];

const AutoLockModal = ({ isOpen, onClose }: AutoLockModalProps) => {
  const dispatch = useAppDispatch();
  const { autoLockTimeOut } = useSettings();

  const handleSelect = (val: number) => {
    dispatch(setAutoLockTimeOut(val));
    onClose();
  };

  return (
    <BottomModal isOpen={isOpen} onClose={onClose} title={DrawerTitle('Auto Lock Interval')}>
      <div className='space-y-2'>
        {intervals.map((opt) => (
          <div
            key={opt.value}
            className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-colors ${autoLockTimeOut === opt.value ? 'bg-primary/10' : 'hover:bg-muted/30'}`}
            onClick={() => handleSelect(opt.value)}
          >
            <span className='text-base text-white-100'>{opt.label}</span>
            {autoLockTimeOut === opt.value && <span className='w-2 h-2 bg-primary rounded-full' />}
          </div>
        ))}
      </div>
    </BottomModal>
  );
};

export default AutoLockModal;
