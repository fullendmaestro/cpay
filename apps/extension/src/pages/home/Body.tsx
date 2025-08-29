import { useState } from 'react';
import { BalanceSection, ActionButtons, AddressDrawer, AssetsList } from '@/components/wallet';
import { useAssets } from '@/hooks/useAssets';

const Body = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [showAddressDrawer, setShowAddressDrawer] = useState(false);

  const { selectedAccount, balance } = useAssets();

  return (
    <div className='flex-1 flex flex-col p-4 overflow-auto hide-scrollbar'>
      {/* Balance Section */}
      <div className='flex flex-col space-y-6 pb-6'>
        {/* Total Balance - Centered */}
        <BalanceSection />

        {/* Action Buttons */}
        <ActionButtons />
      </div>

      {/* Assets List */}
      <div className='flex-1 space-y-4'>
        <AssetsList balanceVisible={balanceVisible} />
      </div>

      {/* Address Details Drawer */}
      <AddressDrawer />
    </div>
  );
};

export default Body;
