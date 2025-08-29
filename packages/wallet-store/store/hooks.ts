import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Typed hooks for React components
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Convenience hooks for specific slices
export const useApp = () => useAppSelector((state) => state.app);
export const useSettings = () => useAppSelector((state) => state.settings);
export const useWallet = () => useAppSelector((state) => state.wallet);
