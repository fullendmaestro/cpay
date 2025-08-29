import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AppState, SupportedEvmNetworkName } from '../types';
import { defaultNetwork } from '@cpay/wallet-sdk';

const initialState: AppState = {
  authenticated: false,
  passwordCypherStoreId: null,
  authenticating: false,
  onBoarded: false,
  selected_network_name: defaultNetwork.name,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
      state.authenticating = false;
    },
    setPasswordCypherStoreId: (state, action: PayloadAction<string | null>) => {
      state.passwordCypherStoreId = action.payload;
    },
    setAuthenticating: (state, action: PayloadAction<boolean>) => {
      state.authenticating = action.payload;
    },
    setOnBoarded: (state, action: PayloadAction<boolean>) => {
      state.onBoarded = action.payload;
    },
    setSelectedNetwork: (state, action: PayloadAction<SupportedEvmNetworkName>) => {
      state.selected_network_name = action.payload;
    },
    resetApp: () => initialState,
  },
});

export const {
  setAuthenticated,
  setPasswordCypherStoreId,
  setAuthenticating,
  setOnBoarded,
  setSelectedNetwork,
  resetApp,
} = appSlice.actions;

export default appSlice.reducer;
