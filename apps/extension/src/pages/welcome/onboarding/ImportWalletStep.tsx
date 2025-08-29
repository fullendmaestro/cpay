import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Download } from 'lucide-react';
import { useOnboarding } from '@/contexts/onboarding/OnboardingContext';

const ImportWalletStep: React.FC = () => {
  const { goBack, goToChooseImportType } = useOnboarding();

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center justify-between p-6 pb-4'>
        <Button variant='ghost' size='sm' onClick={goBack} className='text-white hover:bg-white/10'>
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back
        </Button>
      </div>

      <div className='flex-1 flex flex-col justify-center p-6 pt-0'>
        <div className='text-center mb-8'>
          <div className='w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center'>
            <Download className='w-8 h-8 text-primary' />
          </div>
          <h2 className='text-2xl font-bold text-white mb-2'>Import Existing Wallet</h2>
          <p className='text-white/70 text-sm max-w-sm mx-auto'>
            Restore your wallet using your recovery phrase or private key
          </p>
        </div>

        <Card className='bg-white/5 border-white/10'>
          <CardContent className='p-6'>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <div className='w-2 h-2 bg-primary rounded-full' />
                </div>
                <p className='text-white/80 text-sm'>
                  Your wallet will be restored with all your assets and transaction history
                </p>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <div className='w-2 h-2 bg-primary rounded-full' />
                </div>
                <p className='text-white/80 text-sm'>Make sure you have your recovery phrase or private key ready</p>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <div className='w-2 h-2 bg-primary rounded-full' />
                </div>
                <p className='text-white/80 text-sm'>Never share your recovery details with anyone</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='p-6 pt-0'>
        <Button onClick={goToChooseImportType} className='w-full bg-primary hover:bg-primary/90'>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ImportWalletStep;
