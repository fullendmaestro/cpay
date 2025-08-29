import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Wallet } from 'lucide-react';
import { useOnboarding } from '@/contexts/onboarding/OnboardingContext';

const CreateWalletStep: React.FC = () => {
  const { createNewWallet, goBack, isLoading } = useOnboarding();
  const [walletName, setWalletName] = useState('My Wallet');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (walletName.trim()) {
      createNewWallet(walletName.trim());
    }
  };

  return (
    <div className='flex flex-col h-full p-6'>
      {/* Header */}
      <div className='flex items-center mb-6'>
        <Button variant='ghost' size='sm' onClick={goBack} className='p-2 hover:bg-white/10 text-gray-300'>
          <ArrowLeft className='h-4 w-4' />
        </Button>
        <h1 className='text-xl font-semibold text-white ml-2'>Create New Wallet</h1>
      </div>

      {/* Content */}
      <div className='flex-1 flex flex-col justify-center'>
        <Card className='p-6 bg-black/20 border-purple-500/20'>
          <div className='flex flex-col items-center text-center mb-6'>
            <div className='p-4 bg-purple-500/20 rounded-full mb-4'>
              <Wallet className='h-8 w-8 text-purple-400' />
            </div>
            <h2 className='text-lg font-semibold text-white mb-2'>Name Your Wallet</h2>
            <p className='text-gray-300 text-sm'>Give your new wallet a memorable name. You can change this later.</p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='walletName' className='block text-sm font-medium text-gray-300 mb-2'>
                Wallet Name
              </label>
              <Input
                id='walletName'
                type='text'
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
                placeholder='Enter wallet name'
                className='w-full h-12 px-4 bg-black/40 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20'
                required
                disabled={isLoading}
              />
            </div>

            <Button
              type='submit'
              variant='secondary'
              className='w-full transition-all duration-200'
              disabled={isLoading || !walletName.trim()}
            >
              {isLoading ? 'Creating...' : 'Create Wallet'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreateWalletStep;
