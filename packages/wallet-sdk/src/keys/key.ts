import { english, generateMnemonic, mnemonicToAccount } from 'viem/accounts';
import { validateMnemonic as bvalidateMnemonic } from 'bip39';

export function createMnemonic(numberOfWords: 12 | 24 = 12): string {
  const entropy = numberOfWords === 12 ? 128 : 256;
  return generateMnemonic(english, entropy);
}

export async function deriveAccountFromMnemonic(mnemonic: string, index: number): Promise<string> {
  // Derive an account from the mnemonic at the given index
  const account = mnemonicToAccount(mnemonic, { accountIndex: index });
  return account.getHdKey().privateKey!.toString();
}

/**
 * Validate mnemonic phrase
 */
export function validateMnemonic(mnemonic: string): boolean {
  try {
    return bvalidateMnemonic(mnemonic);
  } catch (error) {
    return false;
  }
}
