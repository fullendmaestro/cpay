import BottomModal from '@/components/ButtomDrawer';
import { SelectionSectionCard, SelectionSectionItem, SelectionSectionDivider } from './SelectionSection';
import { Globe, Zap, Shield } from 'lucide-react';
import { setSelectedNetwork, useApp, useAppDispatch } from '@cpay/wallet-store';
import { supportedNetworks } from '@cpay/wallet-sdk';

interface NetworkDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Map chain/network names to icons (customize as needed)
const networkIconMap: Record<string, React.ElementType> = {
  arbitrum: Globe,
  base: Zap,
  'arbitrum-sepolia': Shield,
  'base-sepolia': Shield,
};

const NetworkDrawer = ({ isOpen, onClose }: NetworkDrawerProps) => {
  const dispatch = useAppDispatch();
  const { selected_network } = useApp();

  // Map supportedNetworks to the format expected by the UI
  const networks = supportedNetworks.map((net) => ({
    id: net.id?.toString() || net.network || net.name,
    title: net.name,
    description: net.network || net.id?.toString() || '',
    icon: networkIconMap[net.network || net.name?.toLowerCase()] || Globe,
  }));

  const handleNetworkSelect = (networkId: string) => {
    dispatch(setSelectedNetwork({ network: networkId }));
    onClose();
  };

  return (
    <BottomModal isOpen={isOpen} onClose={onClose} title='Network Settings'>
      <div className='space-y-4'>
        <SelectionSectionCard title='Select Network'>
          {networks.map((net, idx) => (
            <div key={net.id}>
              {idx !== 0 && <SelectionSectionDivider />}
              <SelectionSectionItem
                title={net.title}
                Icon={net.icon}
                subTitle={net.description}
                selected={selected_network === net.id}
                onClick={() => handleNetworkSelect(net.id)}
              />
            </div>
          ))}
        </SelectionSectionCard>
      </div>
    </BottomModal>
  );
};

export default NetworkDrawer;
