import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EnterPasswordView from '@/components/password/enter-password-view';
import Logo from '@/assets/logos/cpay.svg?react';
import { Unlock } from 'lucide-react';
import { setAuthenticated, useApp, useAppDispatch } from '@cpay/wallet-store';
import { CipherStoreManager } from '@cpay/cipher-store';
import { updateLastLogin, setPassword as setAuthPassword } from '@/lib/autoLockUtils';

const AuthenticationPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [password, setPassword] = useState('');
  const passwordCypherStoreId = useApp().passwordCypherStoreId;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(async () => {
      const storePassword = await CipherStoreManager.getEntry({
        entryID: passwordCypherStoreId || '',
        password,
      });

      if (storePassword === password) {
        await setAuthPassword(password);
        updateLastLogin();
        dispatch(setAuthenticated({ authenticated: true }));
        navigate('/home');
      }
      setIsAuthenticating(false);
    }, 3000);
  };

  return (
    <div className='h-full flex flex-col justify-between'>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center w-full max-w-xs'>
          <div className='mb-6 mt-2'>
            <div className='mx-auto w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center'>
              <Unlock className='size-10' />
            </div>
          </div>
          <h2 className='text-white text-lg font-semibold mb-1 text-center'>Welcome back</h2>
          <p className='text-gray-400 text-sm mb-6 text-center'>Enter your password to unlock your wallet</p>
          <EnterPasswordView
            password={password}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleSubmit}
            disabled={isAuthenticating}
            actionLabel={isAuthenticating ? 'Unlocking...' : 'Unlock wallet'}
            // onForgotPassword={() => {}}
          />
        </div>
      </div>
      <div className='py-4 flex items-center justify-center gap-2 text-xs text-gray-500 tracking-widest font-semibold'>
        <Logo className='size-5' />
        <span>MetaFox</span>
      </div>
    </div>
  );
};

export default AuthenticationPage;
