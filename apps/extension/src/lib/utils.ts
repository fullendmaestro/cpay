// Example utility function: format balance
export function formatBalance(balance: string | number, decimals = 2) {
  if (typeof balance === 'string') {
    const num = parseFloat(balance);
    if (isNaN(num)) return balance;
    return num.toFixed(decimals);
  }
  return balance.toFixed(decimals);
}import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

export const truncateAddress = (address: string) => {
  if (!address || address.length <= 12) return address;
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
};
