import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { useOnboarding } from '@/contexts/onboarding/OnboardingContext';

const ImportPrivateKeyStep: React.FC = () => {
  const { importWallet, goBack } = useOnboarding();
  const [walletName, setWalletName] = useState('My Wallet');
  const [privateKey, setPrivateKey] = useState('');
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validatePrivateKey = (key: string): boolean => {
    // Remove 0x prefix if present
    const cleanKey = key.replace(/^0x/, '');

    // Check if it's a valid hex string of 64 characters (32 bytes)
    const hexPattern = /^[0-9a-fA-F]{64}$/;
    return hexPattern.test(cleanKey);
  };

  const handleImport = async () => {
    setError(null);

    if (!walletName.trim()) {
      setError('Please enter a wallet name');
      return;
    }

    if (!privateKey.trim()) {
      setError('Please enter your private key');
      return;
    }

    const cleanedKey = privateKey.trim();

    if (!validatePrivateKey(cleanedKey)) {
      setError('Invalid private key. Please enter a valid 64-character hexadecimal string.');
      return;
    }

    // Ensure 0x prefix
    const formattedKey = cleanedKey.startsWith('0x') ? cleanedKey : `0x${cleanedKey}`;

    setIsLoading(true);
    try {
      importWallet({
        privateKey: formattedKey,
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
          <h2 className='text-2xl font-bold text-white mb-2'>Import Private Key</h2>
          <p className='text-white/70 text-sm'>Enter your private key to restore your wallet</p>
        </div>

        <Alert className='mb-6 bg-amber-500/10 border-amber-500/20'>
          <AlertTriangle className='h-4 w-4 text-amber-500' />
          <AlertDescription className='text-amber-200'>
            Never share your private key with anyone. Anyone with access to this key can control your wallet.
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
            <Label htmlFor='private-key' className='text-white text-sm font-medium'>
              Private Key
            </Label>
            <div className='relative'>
              <Textarea
                id='private-key'
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                placeholder='Enter your private key (64 hex characters)'
                rows={3}
                className='mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none pr-12 w-full overflow-x-auto break-all'
                style={{ wordBreak: 'break-all', overflowWrap: 'break-word' }}
              />
              <button
                type='button'
                onClick={() => setShowPrivateKey(!showPrivateKey)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors'
                tabIndex={-1}
              >
                {showPrivateKey ? <EyeOff className='w-4 h-4' /> : <Eye className='w-4 h-4' />}
              </button>
            </div>
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

export default ImportPrivateKeyStep;
