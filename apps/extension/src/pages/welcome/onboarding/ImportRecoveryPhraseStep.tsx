import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { useOnboarding } from '@/contexts/onboarding/OnboardingContext';
import { validateMnemonic } from '@cpay/wallet-sdk';

const ImportRecoveryPhraseStep: React.FC = () => {
  const { importWallet, goBack } = useOnboarding();
  const [walletName, setWalletName] = useState('My Wallet');
  const [recoveryPhrase, setRecoveryPhrase] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImport = async () => {
    setError(null);

    if (!walletName.trim()) {
      setError('Please enter a wallet name');
      return;
    }

    if (!recoveryPhrase.trim()) {
      setError('Please enter your recovery phrase');
      return;
    }

    // Clean up the recovery phrase
    const cleanedPhrase = recoveryPhrase.trim().toLowerCase().replace(/\s+/g, ' ');
    const words = cleanedPhrase.split(' ');

    if (words.length !== 12 && words.length !== 24) {
      setError('Recovery phrase must be 12 or 24 words');
      return;
    }

    if (!validateMnemonic(cleanedPhrase)) {
      setError('Invalid recovery phrase. Please check your words and try again.');
      return;
    }

    setIsLoading(true);
    try {
      importWallet({
        mnemonic: cleanedPhrase,
        name: walletName.trim(),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to import wallet');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='flex-1 overflow-auto p-6'>
        <div className='text-center mb-6'>
          <h2 className='text-2xl font-bold text-white mb-2'>Import Recovery Phrase</h2>
          <p className='text-white/70 text-sm'>Enter your 12 or 24 word recovery phrase to restore your wallet</p>
        </div>

        <Alert className='mb-6 bg-amber-500/10 border-amber-500/20'>
          <AlertTriangle className='h-4 w-4 text-amber-500' />
          <AlertDescription className='text-amber-200'>
            Never share your recovery phrase with anyone. Anyone with access to this phrase can control your wallet.
          </AlertDescription>
        </Alert>

        <div className='space-y-4'>
          <div>
            <Label htmlFor='wallet-name' className='text-white text-sm font-medium'>
              Wallet Name
            </Label>
            <Input
              id='wallet-name'
              type='text'
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              placeholder='Enter wallet name'
              className='mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50'
            />
          </div>

          <div>
            <Label htmlFor='recovery-phrase' className='text-white text-sm font-medium'>
              Recovery Phrase
            </Label>
            <Textarea
              id='recovery-phrase'
              value={recoveryPhrase}
              onChange={(e) => setRecoveryPhrase(e.target.value)}
              placeholder='Enter your 12 or 24 word recovery phrase separated by spaces'
              className='mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none pr-12 w-full overflow-x-auto break-all'
              style={{ wordBreak: 'break-all', overflowWrap: 'break-word' }}
            />
          </div>

          {error && (
            <Alert className='bg-red-500/10 border-red-500/20'>
              <AlertTriangle className='h-4 w-4 text-red-500' />
              <AlertDescription className='text-red-200'>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      <div className='flex gap-3 p-6 pt-0'>
        <Button
          variant='outline'
          onClick={goBack}
          className='flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20'
          disabled={isLoading}
        >
          Back
        </Button>
        <Button onClick={handleImport} disabled={isLoading} className='flex-1 bg-primary hover:bg-primary/90'>
          {isLoading ? 'Importing...' : 'Import Wallet'}
        </Button>
      </div>
    </div>
  );
};

export default ImportRecoveryPhraseStep;
