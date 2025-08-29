import { Button } from '@/components/ui/button';
import BottomModal from '@/components/ButtomDrawer';
import { useState } from 'react';
import AutoLockModal from './AutoLockModal';
import { DrawerTitle } from '../../ui/drawer-title';
import SectionCard, { SectionItem, SectionDivider } from './Section';
import { Currency, Network, Moon, BookOpen, Lock, ExternalLink } from 'lucide-react';
import { setAuthenticated, setOpenedAsSidePanel, useApp, useAppDispatch, useSettings } from '@cpay/wallet-store';
import { clearPassword } from '@/lib/autoLockUtils';
import { supportedNetworks } from '@cpay/wallet-sdk';
import { colorModes } from '../ColorModeDrawer';

interface MoreOptionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAddressBookOpen: () => void;
  onColorModeOpen: () => void;
  onCurrencyOpen: () => void;
  onNetworkOpen: () => void;
}

const MoreOptionsDrawer = ({
  isOpen,
  onClose,
  onAddressBookOpen,
  onColorModeOpen,
  onCurrencyOpen,
  onNetworkOpen,
}: MoreOptionsDrawerProps) => {
  const { openAsSidePanel } = useSettings();
  const dispatch = useAppDispatch();
  const { autoLockTimeOut, theme } = useSettings();
  const { selected_network_name } = useApp();
  // Auto lock state
  const [autoLockOpen, setAutoLockOpen] = useState(false);
  // Configure AI drawer state
  const [aiDrawerOpen, setAIDrawerOpen] = useState(false);

  const selectedNetwork = supportedNetworks.find((item) => {
    return item.name === selected_network_name;
  });

  const colorMode = colorModes.find((item) => {
    return item.id === theme;
  });

  // Preferences section items
  const preferences = [
    {
      title: 'Network',
      Icon: Network,
      subTitle: selectedNetwork?.name,
      onClick: () => {
        onClose();
        onNetworkOpen();
      },
    },
    {
      title: 'Theme',
      Icon: Moon,
      subTitle: colorMode?.title,
      onClick: () => {
        onClose();
        onColorModeOpen();
      },
    },
    {
      title: 'Configure AI',
      Icon: ExternalLink,
      subTitle: '',
      onClick: () => setAIDrawerOpen(true),
    },
    {
      title: 'Currency',
      Icon: Currency,
      subTitle: 'USD',
      onClick: () => {
        // onClose()
        // onCurrencyOpen()
      },
    },
  ];

  // Security section items
  const security = [
    {
      title: 'Lock Wallet',
      Icon: Lock,
      subTitle: '',
      onClick: () => {
        // TODO: Implement wallet lock functionality
        clearPassword();
        dispatch(setAuthenticated(false));
        onClose();
      },
    },
    {
      title: 'Auto Lock',
      Icon: Lock,
      subTitle: `${autoLockTimeOut}m`,
      onClick: () => setAutoLockOpen(true),
    },
    {
      title: 'Address Book',
      Icon: BookOpen,
      subTitle: '',
      onClick: () => {
        // onClose()
        // onAddressBookOpen()
      },
    },
  ];

  return (
    <BottomModal
      isOpen={isOpen}
      onClose={onClose}
      title={DrawerTitle('More Options')}
      footerComponent={
        <div className='flex gap-2 w-full'>
          <Button variant='secondary' className='flex-1 rounded-full' onClick={onClose}>
            Close
          </Button>
        </div>
      }
    >
      <div className='space-y-4'>
        <AutoLockModal isOpen={autoLockOpen} onClose={() => setAutoLockOpen(false)} />

        <SectionCard>
          <SectionItem
            title='Expand Wallet View'
            subTitle={openAsSidePanel ? 'Switch to Popup View' : 'Switch to Side Panel View'}
            Icon={ExternalLink}
            onClick={async () => {
              dispatch(setOpenedAsSidePanel(true));
              if (!chrome.windows) return;
              const currentWindow = await chrome.windows.getCurrent();
              const windowId = currentWindow?.id;
              if (!windowId || !chrome.sidePanel) return;
              await chrome.sidePanel.setOptions({
                path: '/src/index.html',
                enabled: true,
              });
              await chrome.sidePanel.open({ windowId });
              await chrome.sidePanel.setPanelBehavior({
                openPanelOnActionClick: true,
              });
              window.close();
            }}
          />
          <SectionDivider />
          <SectionItem
            title='Expand View'
            subTitle='Open the extension expanded page'
            Icon={BookOpen}
            onClick={async () => {
              if (chrome.runtime?.openOptionsPage) {
                chrome.runtime.openOptionsPage();
              } else {
                window.open(chrome.runtime.getURL('options.html'));
              }
            }}
          />
        </SectionCard>

        <SectionCard title='Preferences'>
          {preferences.map((item, idx) => (
            <>
              {idx !== 0 && <SectionDivider />}
              <SectionItem key={item.title} {...item} />
            </>
          ))}
        </SectionCard>
        <SectionCard title='Security'>
          {security.map((item, idx) => (
            <>
              {idx !== 0 && <SectionDivider />}
              <SectionItem key={item.title} {...item} />
            </>
          ))}
        </SectionCard>
        <div className='bg-[#18191D] rounded-xl p-4 text-center mt-2'>
          <p className='text-xs text-gray-500'>MetaFox v1.0.0 • Made with ❤️ for Sei</p>
        </div>
      </div>
    </BottomModal>
  );
};

export default MoreOptionsDrawer;
