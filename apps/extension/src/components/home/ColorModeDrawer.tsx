import BottomModal from '@/components/ButtomDrawer';
import { Moon, Sun, Monitor } from 'lucide-react';
import { SelectionSectionCard, SelectionSectionDivider, SelectionSectionItem } from './SelectionSection';
import { useAppDispatch, useSettings, setTheme } from '@cpay/wallet-store';

interface ColorModeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const colorModes = [
  {
    id: 'light',
    title: 'Light Mode',
    description: 'Use light theme',
    icon: Sun,
  },
  {
    id: 'dark',
    title: 'Dark Mode',
    description: 'Use dark theme',
    icon: Moon,
  },
  {
    id: 'system',
    title: 'System',
    description: 'Follow system preference',
    icon: Monitor,
  },
];

const ColorModeDrawer = ({ isOpen, onClose }: ColorModeDrawerProps) => {
  const dispatch = useAppDispatch();
  const { theme } = useSettings();

  const handleModeSelect = (mode: any) => {
    dispatch(setTheme(mode));
    // TODO: Implement theme switching logic
    onClose();
  };

  return (
    <BottomModal isOpen={isOpen} onClose={onClose} title='Network Settings'>
      <div className='space-y-4'>
        <SelectionSectionCard title='Select Network'>
          {colorModes.map((color, idx) => (
            <div key={color.id}>
              {idx !== 0 && <SelectionSectionDivider />}
              <SelectionSectionItem
                title={color.title}
                Icon={color.icon}
                subTitle={color.description}
                selected={theme === color.id}
                onClick={() => handleModeSelect(color.id)}
              />
            </div>
          ))}
        </SelectionSectionCard>
      </div>
    </BottomModal>
  );
};

export default ColorModeDrawer;
