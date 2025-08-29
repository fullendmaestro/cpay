import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Lock, Eye, EyeOff, CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import { useOnboarding } from '@/contexts/onboarding/OnboardingContext';
import { getPassScore } from '@/lib/passChecker';

const CreatePasswordStep: React.FC = () => {
  const { goBack, completeOnboarding, isLoading, error } = useOnboarding();

  const [passwords, setPasswords] = useState({ pass1: '', pass2: '' });
  const [errors, setErrors] = useState({ pass1: '', pass2: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passScore, setPassScore] = useState<number | null>(null);
  const [localError, setLocalError] = useState('');

  // Validate password length
  const validateLength = useCallback(() => {
    setErrors((prev) => ({ ...prev, pass1: '', pass2: '' }));
    if (passwords.pass1.length < 8) {
      setErrors((e) => ({ ...e, pass1: 'Password must be at least 8 characters' }));
      return false;
    }
    return true;
  }, [passwords.pass1.length]);

  // Validate password match
  const validatePasswordMatch = useCallback(() => {
    if (passwords.pass1 !== passwords.pass2) {
      setErrors((e) => ({ ...e, pass2: 'Passwords do not match' }));
      return false;
    } else if (errors.pass1 || errors.pass2 || !validateLength()) {
      return false;
    }
    return true;
  }, [errors.pass1, errors.pass2, passwords.pass1, passwords.pass2, validateLength]);

  // Debounced password strength
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (passwords.pass1) {
        setPassScore(getPassScore(passwords.pass1));
      } else {
        setPassScore(null);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [passwords.pass1]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    localError && setLocalError('');
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePasswordMatch()) return;
    try {
      await completeOnboarding(passwords.pass1);
    } catch (err) {
      setLocalError('Failed to complete onboarding');
    }
  };

  const isSubmitDisabled = !!errors.pass1 || !!errors.pass2 || !passwords.pass1 || !passwords.pass2 || isLoading;

  return (
    <div className='flex flex-col h-full p-6'>
      {/* Header */}
      <div className='flex items-center mb-6'>
        <Button variant='ghost' size='sm' onClick={goBack} className='p-2 hover:bg-white/10 text-gray-300'>
          <ArrowLeft className='h-4 w-4' />
        </Button>
        <h1 className='text-xl font-semibold text-white ml-2'>Create Password</h1>
      </div>

      {/* Content */}
      <div className='flex-1 flex flex-col'>
        <div className='flex flex-col items-center text-center mb-6'>
          <div className='p-4 bg-green-500/20 rounded-full mb-4'>
            <Shield className='h-8 w-8 text-green-400' />
          </div>
          <h2 className='text-lg font-semibold text-white mb-2'>Secure Your Wallet</h2>
          <p className='text-gray-300 text-sm'>
            Create a strong password to encrypt your wallet. You'll need this to unlock your wallet.
          </p>
        </div>

        <Card className='p-6 bg-black/20 border-purple-500/20 mb-6'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Password Field */}
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>Password</label>
              <div className='relative'>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name='pass1'
                  value={passwords.pass1}
                  onChange={handleInputChange}
                  placeholder='Enter your password'
                  className={`w-full h-12 px-4 pr-12 bg-black/40 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 ${errors.pass1 ? 'border-red-500 focus:border-red-500' : ''}`}
                  required
                  disabled={isLoading}
                  onBlur={validateLength}
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className='h-4 w-4 text-gray-400' />
                  ) : (
                    <Eye className='h-4 w-4 text-gray-400' />
                  )}
                </Button>
              </div>
              {/* Password Strength Indicator */}
              {passwords.pass1 && (
                <div className='mt-3 flex items-center space-x-2'>
                  {passScore !== null && passScore <= 1 && (
                    <>
                      <AlertTriangle className='h-4 w-4 text-yellow-400' />
                      <span className='text-xs text-yellow-400'>Weak password</span>
                    </>
                  )}
                  {passScore === 2 && (
                    <>
                      <CheckCircle className='h-4 w-4 text-green-400' />
                      <span className='text-xs text-green-400'>Medium strength password</span>
                    </>
                  )}
                  {passScore !== null && passScore >= 3 && (
                    <>
                      <CheckCircle className='h-4 w-4 text-emerald-400' />
                      <span className='text-xs text-emerald-400'>Strong password</span>
                    </>
                  )}
                </div>
              )}
              {errors.pass1 && (
                <div className='flex items-center mt-2 text-red-400 text-sm'>
                  <AlertTriangle className='h-4 w-4 mr-1' />
                  {errors.pass1}
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>Confirm Password</label>
              <div className='relative'>
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name='pass2'
                  value={passwords.pass2}
                  onChange={handleInputChange}
                  placeholder='Confirm your password'
                  className={`w-full h-12 px-4 pr-12 bg-black/40 text-white placeholder-gray-400 focus:ring-purple-500/20 ${errors.pass2 ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-purple-500'}`}
                  required
                  disabled={isLoading}
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className='h-4 w-4 text-gray-400' />
                  ) : (
                    <Eye className='h-4 w-4 text-gray-400' />
                  )}
                </Button>
              </div>
              {errors.pass2 && (
                <div className='flex items-center mt-2 text-red-400 text-sm'>
                  <AlertTriangle className='h-4 w-4 mr-1' />
                  {errors.pass2}
                </div>
              )}
              {passwords.pass2 && !errors.pass2 && passwords.pass1 === passwords.pass2 && (
                <div className='flex items-center mt-2 text-green-400 text-sm'>
                  <CheckCircle className='h-4 w-4 mr-1' />
                  Passwords match
                </div>
              )}
            </div>

            {/* Error Display */}
            {(error || localError) && (
              <div className='p-4 bg-red-500/10 border border-red-500/20 rounded-lg'>
                <div className='flex items-center text-red-400'>
                  <AlertTriangle className='h-5 w-5 mr-2' />
                  <span className='text-sm'>{error || localError}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type='submit'
              disabled={isSubmitDisabled}
              className={`w-full h-12 font-semibold rounded-xl transition-all duration-200 ${
                !isSubmitDisabled ? '' : 'bg-gray-600 cursor-not-allowed'
              }`}
            >
              {isLoading ? 'Creating Wallet...' : 'Create Wallet'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreatePasswordStep;
