import { clsx, type ClassValue } from 'clsx';
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
