import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Key } from 'lucide-react';
import { useOnboarding } from '@/contexts/onboarding/OnboardingContext';

const ChooseImportTypeStep: React.FC = () => {
  const { goToImportRecoveryPhrase, goToImportPrivateKey, goBack } = useOnboarding();

  return (
    <div className='flex flex-col h-full'>
      <div className='flex-1 flex flex-col justify-center p-6'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold text-white mb-2'>Choose Import Method</h2>
          <p className='text-white/70 text-sm'>Select how you want to import your existing wallet</p>
        </div>

        <div className='space-y-4'>
          <Card
            className='bg-white/10 border-white/20 cursor-pointer hover:bg-white/15 transition-colors'
            onClick={goToImportRecoveryPhrase}
          >
            <CardContent className='flex items-center p-4'>
              <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4'>
                <FileText className='w-6 h-6 text-primary' />
              </div>
              <div className='flex-1'>
                <h3 className='font-semibold text-white mb-1'>Recovery Phrase</h3>
                <p className='text-white/70 text-sm'>Import using your 12 or 24 word recovery phrase</p>
              </div>
            </CardContent>
          </Card>

          <Card
            className='bg-white/10 border-white/20 cursor-pointer hover:bg-white/15 transition-colors'
            onClick={goToImportPrivateKey}
          >
            <CardContent className='flex items-center p-4'>
              <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4'>
                <Key className='w-6 h-6 text-primary' />
              </div>
              <div className='flex-1'>
                <h3 className='font-semibold text-white mb-1'>Private Key</h3>
                <p className='text-white/70 text-sm'>Import using your private key string</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className='p-6 pt-0'>
        <Button
          variant='outline'
          onClick={goBack}
          className='w-full bg-white/10 border-white/20 text-white hover:bg-white/20'
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default ChooseImportTypeStep;
