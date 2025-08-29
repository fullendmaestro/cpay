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

        {/* Wallet Info Card */}
        <Card className='p-6 bg-black/20 border-purple-500/20 mb-6'>
          <div className='text-center'>
            <h3 className='text-lg font-semibold text-white mb-4'>Wallet Created Successfully</h3>

            {selectedWallet && (
              <div className='mb-4'>
                <div className='flex items-center justify-center space-x-2 mb-2'>
                  <Wallet className='h-5 w-5 text-purple-400' />
                  <span className='text-white font-medium'>{selectedWallet.name}</span>
                </div>
                <span className='text-xs text-gray-400 bg-black/40 px-2 py-1 rounded'>
                  {selectedWallet.type === 'mnemonic' ? 'HD Wallet' : 'Imported Wallet'}
                </span>
              </div>
            )}

            {selectedAccount && (
              <div className='mb-4'>
                <p className='text-gray-300 text-sm mb-2'>Your wallet address:</p>
                <div className='flex items-center justify-center space-x-2 p-3 bg-black/40 rounded-lg'>
                  <code className='text-purple-300 font-mono text-sm'>{formatAddress(selectedAccount.evmAddress)}</code>
                  <Button variant='ghost' size='sm' onClick={handleCopyAddress} className='p-1 hover:bg-white/10'>
                    {isCopied ? (
                      <CheckCircle className='h-4 w-4 text-green-400' />
                    ) : (
                      <Copy className='h-4 w-4 text-gray-400' />
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Features */}
        <div className='space-y-4 mb-8'>
          <h3 className='text-white font-semibold text-center mb-4'>What makes MetaFox special?</h3>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className='flex items-start space-x-3 p-3 bg-black/10 rounded-lg'>
                <div className='p-2 bg-purple-500/20 rounded-lg'>
                  <Icon className='h-5 w-5 text-purple-400' />
                </div>
                <div>
                  <h4 className='text-white font-medium text-sm'>{feature.title}</h4>
                  <p className='text-gray-300 text-xs'>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className='space-y-3'>
        <Button
          onClick={onComplete}
          className='w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-200'
        >
          Start Using MetaFox
        </Button>

        {selectedAccount && (
          <Button
            variant='outline'
            onClick={() => {
              window.open(`https://etherscan.io/address/${selectedAccount.evmAddress}`, '_blank');
            }}
            className='w-full h-10 border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
          >
            <ExternalLink className='h-4 w-4 mr-2' />
            View on Explorer
          </Button>
        )}
      </div>
    </div>
  );
};

export default SuccessStep;
