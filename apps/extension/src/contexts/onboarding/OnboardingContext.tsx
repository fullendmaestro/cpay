import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { privateKeyToAccount } from 'viem/accounts';
import { v4 as uuidv4 } from 'uuid';
import { CipherStoreManager } from '@cpay/cipher-store';
import {
  useAppDispatch,
  setAuthenticated,
  setOnBoarded,
  setPasswordCypherStoreId,
  // Import wallet actions - these are from walletSlice
  addWallet,
  addAccount,
  selectWallet,
  selectAccount,
  useApp,
  useAppSelector,
  useSettings,
} from '@cpay/wallet-store';
import type { Wallet, WalletAccount } from '@cpay/wallet-store';
import { createMnemonic, deriveAccountFromMnemonic } from '@cpay/wallet-sdk';

import { defualtAutoLockTimeOut } from '@/lib/const';
import { AUTO_LOCK_TIME_OUT } from '@/lib/storageKeys';
import { setAutoLockTimeout, updateLastLogin, setPassword, getPassword } from '@/lib/autoLockUtils';

export type OnboardingStep =
  | 'welcome'
  | 'create-wallet'
  | 'import-wallet'
  | 'choose-import-type'
  | 'import-recovery-phrase'
  | 'import-private-key'
  | 'view-seed-phrase'
  | 'confirm-seed-phrase'
  | 'create-password'
  | 'success';

interface WalletData {
  mnemonic?: string;
  privateKey?: string;
  type: 'mnemonic' | 'private key';
  name: string;
}

interface OnboardingContextType {
  // Current step
  currentStep: OnboardingStep;
  setCurrentStep: (step: OnboardingStep) => void;

  // Wallet data
  walletData: WalletData | null;
  setWalletData: (data: WalletData) => void;

  // Generated mnemonic for new wallets
  generatedMnemonic: string[];
  generateNewMnemonic: () => void;

  // Navigation methods
  goToWelcome: () => void;
  goToCreateWallet: () => void;
  goToImportWallet: () => void;
  goToChooseImportType: () => void;
  goToImportRecoveryPhrase: () => void;
  goToImportPrivateKey: () => void;
  goToViewSeedPhrase: () => void;
  goToConfirmSeedPhrase: () => void;
  goToCreatePassword: () => void;
  goToSuccess: () => void;
  goBack: () => void;

  // Wallet creation
  createNewWallet: (name: string) => void;
  importWallet: (data: { mnemonic?: string; privateKey?: string; name: string }) => void;

  // Onboarding completion
  completeOnboarding: (password: string) => Promise<void>;

  // Loading state
  isLoading: boolean;
  error: string | null;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

interface OnboardingProviderProps {
  children: ReactNode;
}

export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const { autoLockTimeOut } = useSettings();

  const { onBoarded } = useApp();

  const storeAutolocktimeout = autoLockTimeOut;

  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [generatedMnemonic, setGeneratedMnemonic] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateNewMnemonic = () => {
    try {
      const mnemonic = createMnemonic(12); // 12-word mnemonic by default
      setGeneratedMnemonic(mnemonic.split(' '));
    } catch (err) {
      setError('Failed to generate mnemonic');
      console.error('Error generating mnemonic:', err);
    }
  };

  const createNewWallet = (name: string) => {
    if (generatedMnemonic.length === 0) {
      generateNewMnemonic();
    }

    setWalletData({
      mnemonic: generatedMnemonic.join(' '),
      type: 'mnemonic',
      name,
    });

    goToViewSeedPhrase();
  };

  const importWallet = async (data: { mnemonic?: string; privateKey?: string; name: string }) => {
    if (data.mnemonic) {
      setWalletData({
        mnemonic: data.mnemonic,
        type: 'mnemonic',
        name: data.name,
      });
    } else if (data.privateKey) {
      setWalletData({
        privateKey: data.privateKey,
        type: 'private key',
        name: data.name,
      });
    }

    if (onBoarded) {
      try {
        const password = await getPassword();
        if (password) {
          let walletSecret: string;
          let accountData: any;

          if (walletData?.type === 'mnemonic' && walletData.mnemonic) {
            // Todo: Validate mnemonic first
            walletSecret = walletData.mnemonic;
            accountData = await deriveAccountFromMnemonic(walletData.mnemonic, 0);
          } else if (walletData?.type === 'private key' && walletData.privateKey) {
            walletSecret = walletData.privateKey;
            const account = privateKeyToAccount(walletData.privateKey as `0x${string}`);
            accountData = {
              privateKey: walletData.privateKey,
              publicKey: account.publicKey,
              address: account.address,
            };
          } else {
            throw new Error('Invalid wallet data');
          }

          // Encrypt and store wallet secret
          const { entryID: walletCypherStoreId } = await CipherStoreManager.addEntry({
            data: walletSecret,
            password: password || '',
          });

          // Create wallet object
          const walletId = uuidv4();
          const wallet: Wallet = {
            id: walletId,
            name: walletData?.name || '',
            type: walletData?.type as 'mnemonic' | 'private key',
            cypherStoreId: walletCypherStoreId,
            balance: '0',
          };

          // Create first account
          const accountId = uuidv4();
          const account: WalletAccount = {
            walletId,
            id: accountId,
            name: 'Account 1',
            derivationIndex: walletData?.type === 'mnemonic' ? 0 : undefined,
            publicKey: accountData.publicKey || accountData.compressedPublicKey,
            address: accountData.address,
            smartAccountAddress: '',
          };

          // Add to store
          dispatch(addWallet(wallet));
          dispatch(addAccount({ account }));

          // Set as selected
          dispatch(selectWallet(walletId));
          dispatch(selectAccount(accountId));

          return goToSuccess();
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to complete onboarding';
        setError(errorMessage);
        console.error('Onboarding error:', err);
      } finally {
        setIsLoading(false);
      }
    }
    goToCreatePassword();
  };

  const completeOnboarding = async (password: string) => {
    if (!walletData) {
      setError('No wallet data available');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Store the master password in cipher store
      const passwordBytes = new TextEncoder().encode(password);
      const { entryID: passwordStoreId } = await CipherStoreManager.addEntry({
        data: password,
        password: passwordBytes,
      });

      let walletSecret: string;
      let accountData: any;

      if (walletData.type === 'mnemonic' && walletData.mnemonic) {
        // Todo: Validate mnemonic first
        walletSecret = walletData.mnemonic;
        accountData = await deriveAccountFromMnemonic(walletData.mnemonic, 0);
      } else if (walletData.type === 'private key' && walletData.privateKey) {
        walletSecret = walletData.privateKey;
        const account = privateKeyToAccount(walletData.privateKey as `0x${string}`);
        accountData = {
          privateKey: walletData.privateKey,
          publicKey: account.publicKey,
          address: account.address,
        };
      } else {
        throw new Error('Invalid wallet data');
      }

      // Encrypt and store wallet secret
      const { entryID: walletCypherStoreId } = await CipherStoreManager.addEntry({
        data: walletSecret,
        password: passwordBytes,
      });

      // Create wallet object
      const walletId = uuidv4();
      const wallet: Wallet = {
        id: walletId,
        name: walletData.name || '',
        type: walletData.type as 'mnemonic' | 'private key',
        cypherStoreId: walletCypherStoreId,
        balance: '0',
      };

      // Create first account
      const accountId = uuidv4();
      const account: WalletAccount = {
        walletId,
        id: accountId,
        name: 'Account 1',
        derivationIndex: walletData.type === 'mnemonic' ? 0 : undefined,
        publicKey: accountData.publicKey || accountData.compressedPublicKey,
        address: accountData.address,
        smartAccountAddress: '',
      };

      // Add to store
      dispatch(addWallet(wallet));
      dispatch(addAccount({ account }));

      // Set as selected
      dispatch(selectWallet(walletId));
      dispatch(selectAccount(accountId));

      // Complete onboarding
      dispatch(setPasswordCypherStoreId(passwordStoreId));
      dispatch(setAuthenticated(true));
      dispatch(setOnBoarded(true));
      await setPassword(password);
      updateLastLogin();
      setAutoLockTimeout(storeAutolocktimeout || defualtAutoLockTimeOut);

      goToSuccess();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to complete onboarding';
      setError(errorMessage);
      console.error('Onboarding error:', err);
    } finally {
      setIsLoading(false);
    }
  };
  // Navigation methods
  const goToWelcome = () => setCurrentStep('welcome');
  const goToCreateWallet = () => setCurrentStep('create-wallet');
  const goToImportWallet = () => setCurrentStep('import-wallet');
  const goToChooseImportType = () => setCurrentStep('choose-import-type');
  const goToImportRecoveryPhrase = () => setCurrentStep('import-recovery-phrase');
  const goToImportPrivateKey = () => setCurrentStep('import-private-key');
  const goToViewSeedPhrase = () => setCurrentStep('view-seed-phrase');
  const goToConfirmSeedPhrase = () => setCurrentStep('confirm-seed-phrase');
  const goToCreatePassword = () => setCurrentStep('create-password');
  const goToSuccess = () => setCurrentStep('success');

  const goBack = () => {
    switch (currentStep) {
      case 'create-wallet':
        goToWelcome();
        break;
      case 'import-wallet':
        goToWelcome();
        break;
      case 'choose-import-type':
        goToImportWallet();
        break;
      case 'import-recovery-phrase':
        goToChooseImportType();
        break;
      case 'import-private-key':
        goToChooseImportType();
        break;
      case 'view-seed-phrase':
        goToCreateWallet();
        break;
      case 'confirm-seed-phrase':
        goToViewSeedPhrase();
        break;
      case 'create-password':
        if (walletData?.type === 'mnemonic') {
          goToConfirmSeedPhrase();
        } else {
          goToImportPrivateKey();
        }
        break;
      case 'success':
        // Can't go back from success
        break;
      default:
        goToWelcome();
        break;
    }
  };

  const contextValue: OnboardingContextType = {
    currentStep,
    setCurrentStep,
    walletData,
    setWalletData,
    generatedMnemonic,
    generateNewMnemonic,
    goToWelcome,
    goToCreateWallet,
    goToImportWallet,
    goToChooseImportType,
    goToImportRecoveryPhrase,
    goToImportPrivateKey,
    goToViewSeedPhrase,
    goToConfirmSeedPhrase,
    goToCreatePassword,
    goToSuccess,
    goBack,
    createNewWallet,
    importWallet,
    completeOnboarding,
    isLoading,
    error,
  };

  return <OnboardingContext.Provider value={contextValue}>{children}</OnboardingContext.Provider>;
};

export const useOnboarding = (): OnboardingContextType => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
