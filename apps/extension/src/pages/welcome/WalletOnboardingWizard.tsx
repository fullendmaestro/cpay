import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import WelcomeStep from './onboarding/WelcomeStep';
import CreateWalletStep from './onboarding/CreateWalletStep';
import ImportWalletStep from './onboarding/ImportWalletStep';
import ChooseImportTypeStep from './onboarding/ChooseImportTypeStep';
import ImportRecoveryPhraseStep from './onboarding/ImportRecoveryPhraseStep';
import ImportPrivateKeyStep from './onboarding/ImportPrivateKeyStep';
import ViewSeedPhraseStep from './onboarding/ViewSeedPhraseStep';
import ConfirmSeedPhraseStep from './onboarding/ConfirmSeedPhraseStep';
import CreatePasswordStep from './onboarding/CreatePasswordStep';
import SuccessStep from './onboarding/SuccessStep';
import { OnboardingProvider, useOnboarding } from '@/contexts/onboarding/OnboardingContext';

interface WalletOnboardingWizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletOnboardingContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { currentStep } = useOnboarding();

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomeStep />;
      case 'create-wallet':
        return <CreateWalletStep />;
      case 'import-wallet':
        return <ImportWalletStep />;
      case 'choose-import-type':
        return <ChooseImportTypeStep />;
      case 'import-recovery-phrase':
        return <ImportRecoveryPhraseStep />;
      case 'import-private-key':
        return <ImportPrivateKeyStep />;
      case 'view-seed-phrase':
        return <ViewSeedPhraseStep />;
      case 'confirm-seed-phrase':
        return <ConfirmSeedPhraseStep />;
      case 'create-password':
        return <CreatePasswordStep />;
      case 'success':
        return <SuccessStep onComplete={onClose} />;
      default:
        return <WelcomeStep />;
    }
  };

  return <div className='flex flex-col h-full'>{renderStep()}</div>;
};

export const WalletOnboardingWizard: React.FC<WalletOnboardingWizardProps> = ({ open, onOpenChange }) => {
  const handleClose = () => onOpenChange(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
      <DialogContent className='max-w-md h-[90vh] gradient-cosmic overflow-auto hide-scrollbar'>
        <OnboardingProvider>
          <WalletOnboardingContent onClose={handleClose} />
        </OnboardingProvider>
      </DialogContent>
    </Dialog>
  );
};
