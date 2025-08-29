import BottomModal from '@/components/ButtomDrawer';
import { SelectionSectionCard, SelectionSectionItem, SelectionSectionDivider } from './SelectionSection';
import { Globe, Zap, Shield } from 'lucide-react';
import { setSelectedNetwork, useApp, useAppDispatch, type SupportedEvmNetworkName } from '@cpay/wallet-store';
import { supportedNetworks } from '@cpay/wallet-sdk';

interface NetworkDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Map chain/network names to icons (customize as needed)

const NetworkDrawer = ({ isOpen, onClose }: NetworkDrawerProps) => {
  const dispatch = useAppDispatch();
  const { selected_network_name } = useApp();

  const handleNetworkSelect = (networkId: SupportedEvmNetworkName) => {
    dispatch(setSelectedNetwork(networkId));
    onClose();
  };

  return (
    <BottomModal isOpen={isOpen} onClose={onClose} title='Network Settings'>
      <div className='space-y-4'>
        <SelectionSectionCard title='Select Network'>
          {supportedNetworks.map((net, idx) => (
            <div key={net.id}>
              {idx !== 0 && <SelectionSectionDivider />}
              <SelectionSectionItem
                title={net.name}
                Icon={<Globe />}
                subTitle={net.name}
                selected={selected_network_name === net.name}
                onClick={() => handleNetworkSelect(net.name as SupportedEvmNetworkName)}
              />
            </div>
          ))}
        </SelectionSectionCard>
      </div>
    </BottomModal>
  );
};

export default NetworkDrawer;
