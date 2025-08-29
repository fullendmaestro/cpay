import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import { useOnboarding } from '@/contexts/onboarding/OnboardingContext';

const ConfirmSeedPhraseStep: React.FC = () => {
  const { goBack, goToCreatePassword, generatedMnemonic } = useOnboarding();

  // Select 4 random positions to verify
  const [verificationIndexes] = useState(() => {
    const indexes = Array.from({ length: generatedMnemonic.length }, (_, i) => i);
    return indexes
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
      .sort((a, b) => a - b);
  });

  const [inputWords, setInputWords] = useState<{ [key: number]: string }>({});
  const [isVerified, setIsVerified] = useState(false);
  const [wordErrors, setWordErrors] = useState<{ [key: number]: boolean }>({});

  const handleWordInput = (index: number, value: string) => {
    const newInputWords = { ...inputWords, [index]: value.trim().toLowerCase() };
    setInputWords(newInputWords);

    // Clear error when user starts typing
    if (wordErrors[index]) {
      setWordErrors({ ...wordErrors, [index]: false });
    }
  };

  const validateWords = () => {
    const errors: { [key: number]: boolean } = {};
    let allCorrect = true;

    verificationIndexes.forEach((index) => {
      const userWord = inputWords[index]?.toLowerCase() || '';
      const correctWord = generatedMnemonic[index].toLowerCase();

      if (userWord !== correctWord) {
        errors[index] = true;
        allCorrect = false;
      }
    });

    setWordErrors(errors);
    setIsVerified(allCorrect);

    if (allCorrect) {
      // Auto-proceed after a brief delay
      setTimeout(() => {
        goToCreatePassword();
      }, 1000);
    }
  };

  // Check verification on input change
  useEffect(() => {
    const allFilled = verificationIndexes.every((index) => inputWords[index] && inputWords[index].trim().length > 0);

    if (allFilled) {
      validateWords();
    } else {
      setIsVerified(false);
      setWordErrors({});
    }
  }, [inputWords]);

  return (
    <div className='flex flex-col h-full p-6'>
      {/* Header */}
      <div className='flex items-center mb-6'>
        <Button variant='ghost' size='sm' onClick={goBack} className='p-2 hover:bg-white/10 text-gray-300'>
          <ArrowLeft className='h-4 w-4' />
        </Button>
        <h1 className='text-xl font-semibold text-white ml-2'>Confirm Recovery Phrase</h1>
      </div>

      {/* Content */}
      <div className='flex-1 flex flex-col'>
        <div className='flex flex-col items-center text-center mb-6'>
          <div className='p-4 bg-blue-500/20 rounded-full mb-4'>
            <Shield className='h-8 w-8 text-blue-400' />
          </div>
          <p className='text-gray-300 text-sm mb-4'>
            To make sure you wrote down your recovery phrase correctly, please enter the following words:
          </p>
        </div>

        {/* Verification Grid */}
        <Card className='p-6 bg-black/20 border-purple-500/20 mb-6'>
          <div className='grid grid-cols-3 gap-3'>
            {generatedMnemonic.map((word, idx) => {
              const isInput = verificationIndexes.includes(idx);
              return (
                <div key={idx} className='bg-muted p-3 rounded-md text-center font-mono flex flex-col items-center'>
                  <span className='text-xs text-muted-foreground mb-1'>{idx + 1}</span>
                  {isInput ? (
                    <>
                      <Input
                        type='text'
                        value={inputWords[idx] || ''}
                        onChange={(e) => handleWordInput(idx, e.target.value)}
                        placeholder='Enter word'
                        className={`w-full h-8 px-2 py-1 text-center text-white placeholder-gray-400 focus:ring-purple-500/20 ${
                          wordErrors[idx]
                            ? 'border-red-500 focus:border-red-500'
                            : inputWords[idx] && !wordErrors[idx]
                              ? 'border-green-500'
                              : 'border-gray-600 focus:border-purple-500'
                        }`}
                        disabled={isVerified}
                      />
                      {wordErrors[idx] && (
                        <div className='flex items-center mt-1 text-red-400 text-xs'>
                          <AlertTriangle className='h-3 w-3 mr-1' />
                          Incorrect
                        </div>
                      )}
                    </>
                  ) : (
                    <div className='font-medium text-gray-400 select-none'>{word}</div>
                  )}
                </div>
              );
            })}
          </div>

          {isVerified && (
            <div className='mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg'>
              <div className='flex items-center text-green-400'>
                <CheckCircle className='h-5 w-5 mr-2' />
                <span className='text-sm font-semibold'>Perfect! Your recovery phrase is verified.</span>
              </div>
            </div>
          )}
        </Card>

        {/* Continue Button */}
        <Button
          onClick={goToCreatePassword}
          disabled={!isVerified}
          className={`w-full h-12 font-semibold rounded-xl transition-all duration-200 ${
            isVerified
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
              : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          {isVerified ? 'Continue' : 'Enter all words to continue'}
        </Button>

        {/* Info */}
        <div className='mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg'>
          <p className='text-blue-300 text-sm'>
            <strong>Next:</strong> You'll create a password to encrypt and secure your wallet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmSeedPhraseStep;
