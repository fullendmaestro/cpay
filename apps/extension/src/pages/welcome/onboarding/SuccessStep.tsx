import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Sparkles, Wallet, Shield, Zap, Copy, ExternalLink } from 'lucide-react';
import { useAppSelector, selectSelectedWallet, selectSelectedAccount } from '@cpay/wallet-store';

interface SuccessStepProps {
  onComplete: () => void;
}

const SuccessStep: React.FC<SuccessStepProps> = ({ onComplete }) => {
  const selectedWallet = useAppSelector(selectSelectedWallet);
  const selectedAccount = useAppSelector(selectSelectedAccount);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyAddress = async () => {
    if (selectedAccount?.evmAddress) {
      try {
        await navigator.clipboard.writeText(selectedAccount.evmAddress);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy address:', err);
      }
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Military-grade encryption protects your assets',
    },
    {
      icon: Zap,
      title: 'AI-Powered Trading',
      description: 'Smart contract analysis and gas optimization',
    },
    {
      icon: Sparkles,
      title: 'Intelligent Insights',
      description: 'Get AI explanations for all transactions',
    },
  ];

  return (
    <div className='flex flex-col h-full p-6'>
      {/* Success Animation */}
      <div className='flex-1 flex flex-col justify-center'>
        <div className='text-center mb-8'>
          <div className='relative mb-6'>
            <div className='w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-pulse'>
              <CheckCircle className='w-12 h-12 text-white' />
            </div>
            <div className='absolute inset-0 w-24 h-24 mx-auto bg-green-400/20 rounded-full animate-ping'></div>
          </div>

          <h1 className='text-2xl font-bold text-white mb-2'>🎉 Welcome to MetaFox!</h1>
          <p className='text-gray-300'>Your AI-powered wallet is ready to use</p>
        </div>
      </div>

      {/* Actions */}
      <div className='space-y-3'>
        <Button
          onClick={onComplete}
          className='w-full h-12 text-white font-semibold rounded-xl transition-all duration-200'
        >
          Start Using MetaFox
        </Button>
      </div>
    </div>
  );
};

export default SuccessStep;
