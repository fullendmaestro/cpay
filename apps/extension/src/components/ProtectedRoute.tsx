import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useApp, useAppDispatch, useSettings } from '@cpay/wallet-store';
import { setAuthenticated } from '@cpay/wallet-store';
import browser from 'webextension-polyfill';
import { clearPassword, getAutoLockTimeout, getLastLogin, getPassword } from '@/lib/autoLockUtils';
import { LAST_LOGIN, PASSWORD, AUTO_LOCK_TIME_OUT } from '@/lib/storageKeys';
import { defualtAutoLockTimeOut } from '@/lib/const';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireOnboarding?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireAuth = true, requireOnboarding = true }) => {
  const { authenticated, onBoarded } = useApp();
  const { autoLockTimeOut } = useSettings();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Listen for auto-lock messages from background script
  useEffect(() => {
    const handleMessage = (message: any) => {
      if (message.type === 'AUTO_LOCK_TRIGGERED') {
        console.log('AUTO_LOCK_TRIGGERED recieved');
        // Dispatch actions to lock the wallet
        dispatch(setAuthenticated({ authenticated: false }));
        // navigate('/login')
      }
    };

    // Add message listener
    browser.runtime.onMessage.addListener(handleMessage);

    // Todo: Compare the lastime login and dispatch the neccessary actions
    if (true) {
    }

    const handleAutoLock = async () => {
      const lastLogin = new Date((await getLastLogin()) || '').getTime() || null;
      const autoLockTimeout = autoLockTimeOut || defualtAutoLockTimeOut;
      const initialPass = Boolean(await getPassword());

      try {
        if (!initialPass) {
          // User not authenticated or browser session storage is cleared
          dispatch(setAuthenticated({ authenticated: false }));
          return;
        }

        // Get storage values

        // Check if auto-lock should trigger
        if (lastLogin && initialPass) {
          const currentTime = Date.now();
          const timeDifference = (currentTime - lastLogin) / (1000 * 60); // Convert to minutes

          console.log(`Time since last login: ${timeDifference.toFixed(2)} minutes`);
          console.log(`Auto-lock timeout: ${autoLockTimeout} minutes`);

          if (timeDifference >= autoLockTimeout) {
            console.log('Auto-lock triggered - clearing password');

            // Clear the password from storage
            clearPassword();

            dispatch(setAuthenticated({ authenticated: false }));
          }
        }
      } catch (error) {
        console.error('Error in auto-lock check:', error);
      }
    };

    handleAutoLock();

    // Cleanup on unmount
    return () => {
      browser.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  useEffect(() => {
    if (!authenticated) navigate('/login');
  }, [authenticated]);

  // If onboarding is required but user is not onboarded, redirect to welcome
  if (requireOnboarding && !onBoarded) {
    browser.runtime.openOptionsPage();

    return <Navigate to='/welcome' replace />;
  }

  // If authentication is required but user is not authenticated (after onboarding), redirect to login
  if (requireAuth && onBoarded && !authenticated) {
    return <Navigate to='/login' replace />;
  }

  // Allow access when requirements are explicitly disabled
  return <>{children}</>;
};

export default ProtectedRoute;
