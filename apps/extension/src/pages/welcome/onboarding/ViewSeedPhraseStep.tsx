import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Copy, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useOnboarding } from '@/contexts/onboarding/OnboardingContext';

const ViewSeedPhraseStep: React.FC = () => {
  const { generatedMnemonic, goBack, goToConfirmSeedPhrase } = useOnboarding();
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (generatedMnemonic) {
      try {
        const mnemonicText = Array.isArray(generatedMnemonic) ? generatedMnemonic.join(' ') : generatedMnemonic;
        await navigator.clipboard.writeText(mnemonicText);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy seed phrase:', err);
      }
    }
  };
  const words = generatedMnemonic || [];

  return (
    <div className='flex flex-col h-full p-6'>
      <div className='flex items-center mb-6'>
        <Button variant='ghost' size='sm' onClick={goBack} className='p-0 text-muted-foreground hover:text-foreground'>
          <ArrowLeft className='h-4 w-4 mr-2' />
          Back
        </Button>
      </div>

      <div className='flex-1 flex flex-col justify-center'>
        <div className='text-center mb-8'>
          <div className='w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
            <Eye className='h-8 w-8 text-primary' />
          </div>
          <h1 className='text-2xl font-bold mb-2'>Secure Your Wallet</h1>
          <p className='text-muted-foreground'>
            Your seed phrase is the key to your wallet. Keep it safe and never share it with anyone.
          </p>
        </div>

        {/* Seed Phrase Display */}
        <div className='bg-card border rounded-lg p-4 space-y-4'>
          <div className='flex justify-between items-center mb-4'>
            <p className='text-sm font-medium'>Your Seed Phrase</p>
          </div>

          <div className='relative group cursor-pointer'>
            <div className='grid grid-cols-3 gap-3'>
              {words.map((word, index) => (
                <div key={index} className='bg-muted p-3 rounded-md text-center font-mono'>
                  <span className='text-xs text-muted-foreground'>{index + 1}</span>
                  <div className='font-medium'>{word}</div>
                </div>
              ))}
            </div>
            {/* Blurry cover overlay */}
            <div className='absolute inset-0 rounded-xl backdrop-blur-sm group-hover:backdrop-blur-none group-hover:opacity-0 w-full h-full transition-opacity duration-300 flex items-center justify-center'>
              <div className='text-center w-full'>
                <EyeOff className='h-12 w-12 mx-auto text-muted-foreground mb-2' />
                <p className='text-muted-foreground'>Hover to reveal your seed phrase</p>
                <span className='sr-only'>Hover here to view the phrase</span>
              </div>
            </div>
          </div>

          <div className='flex justify-center mt-4'>
            <Button size='sm' variant='outline' onClick={handleCopy}>
              {isCopied ? (
                <>
                  <CheckCircle2 className='h-4 w-4 mr-1' />
                  Copied
                </>
              ) : (
                <>
                  <Copy className='h-4 w-4 mr-1' />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className='mt-6'>
        <Button onClick={goToConfirmSeedPhrase} className='w-full'>
          I've Saved My Seed Phrase
        </Button>
      </div>
    </div>
  );
};

export default ViewSeedPhraseStep;
