import React from 'react';
import Logo from '@/assets/logos/cpay.svg?react';
import { Button } from '@/components/ui/button';
import { useOnboarding } from '@/contexts/onboarding/OnboardingContext';

const WelcomeStep: React.FC = () => {
  const { goToCreateWallet, goToImportWallet, generateNewMnemonic } = useOnboarding();

  const handleCreateWallet = () => {
    generateNewMnemonic();
    goToCreateWallet();
  };

  return (
    <div className='flex flex-col gap-y-4 justify-center items-center h-full'>
      <div className='flex flex-col gap-6 items-center justify-center flex-1'>
        <Logo className='size-50' />
        {/* <img src={Images.Logos.MetaFox} alt='MetaFox logo'  /> */}
        <p className='text-center text-lg'>The World's most Simple to use Wallet</p>
      </div>
      <div className='flex flex-col gap-y-4 w-full mt-auto'>
        <Button className='w-full' onClick={handleCreateWallet}>
          Create a new wallet
        </Button>

        <Button variant='secondary' className='w-full' onClick={goToImportWallet}>
          Import an existing wallet
        </Button>
      </div>
    </div>
  );
};

export default WelcomeStep;
