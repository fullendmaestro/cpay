import SelectWallet from './SelectWallet';
import {
  WalletSelector,
  HeaderActions,
  ConnectedAppsDrawer,
  MoreOptionsDrawer,
  NetworkDrawer,
} from '@/components/home';
import { useDrawerState } from '@/hooks/useDrawerState';

const Head = () => {
  const {
    showSelectWallet,
    showConnectedApps,
    showMoreOptions,
    showNetwork,
    openSelectWallet,
    closeSelectWallet,
    openAIAssistant,
    openConnectedApps,
    closeConnectedApps,
    openMoreOptions,
    closeMoreOptions,
    openAddressBook,
    openColorMode,
    openCurrency,
    openNetwork,
    closeNetwork,
  } = useDrawerState();

  return (
    <>
      <div className='flex justify-between items-center mb-4 relative gradient-cosmic px-4 py-2'>
        <WalletSelector onWalletSelect={openSelectWallet} />
        <HeaderActions
          onAIAssistantClick={openAIAssistant}
          onConnectedAppsClick={openConnectedApps}
          onMoreOptionsClick={openMoreOptions}
        />
      </div>

      <SelectWallet isVisible={showSelectWallet} onClose={closeSelectWallet} />

      {/* Main drawers */}
      {/* <AIAssistantDrawer isOpen={showAIAssistant} onClose={closeAIAssistant} /> */}
      <ConnectedAppsDrawer isOpen={showConnectedApps} onClose={closeConnectedApps} />
      <MoreOptionsDrawer
        isOpen={showMoreOptions}
        onClose={closeMoreOptions}
        onAddressBookOpen={openAddressBook}
        onColorModeOpen={openColorMode}
        onCurrencyOpen={openCurrency}
        onNetworkOpen={openNetwork}
      />

      {/* Settings drawers */}
      <NetworkDrawer isOpen={showNetwork} onClose={closeNetwork} />
    </>
  );
};

export default Head;
