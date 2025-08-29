
import { useState } from 'react';
import { BalanceSection, ActionButtons, AddressDrawer, AssetsList } from '@/components/wallet';
import { useAssets } from '@/hooks/useAssets';

const Body = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [showAddressDrawer, setShowAddressDrawer] = useState(false);

  const { selectedAccount, balance, assets, refreshAssets } = useAssets();

  // Handler to toggle balance visibility
  const handleToggleBalance = () => setBalanceVisible((v) => !v);

  // Handler to open/close address drawer
  const handleAddressDrawer = (open: boolean) => setShowAddressDrawer(open);

  return (
    <div className='flex-1 flex flex-col p-4 overflow-auto hide-scrollbar'>
      {/* Balance Section */}
      <div className='flex flex-col space-y-6 pb-6'>
        {/* Total Balance - Centered */}
        <BalanceSection
          balance={balance}
          balanceVisible={balanceVisible}
          onToggleBalance={handleToggleBalance}
          account={selectedAccount}
          onShowAddress={() => handleAddressDrawer(true)}
        />

        {/* Action Buttons */}
        <ActionButtons
          account={selectedAccount}
          onShowAddress={() => handleAddressDrawer(true)}
          refreshAssets={refreshAssets}
        />
      </div>

      {/* Assets List */}
      <div className='flex-1 space-y-4'>
        <AssetsList
          assets={assets}
          balanceVisible={balanceVisible}
          account={selectedAccount}
        />
      </div>

      {/* Address Details Drawer */}
      <AddressDrawer
        open={showAddressDrawer}
        onClose={() => handleAddressDrawer(false)}
        account={selectedAccount}
      />
    </div>
  );
};

export default Body;
