import './styles/globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider';
import { StoreProvider } from '@cpay/wallet-store';

const getInitialRoute = () => {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    return hash.substring(1); // Remove the '#' to get the route
  }
  return '/';
};

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <StoreProvider>
        <MemoryRouter initialEntries={[getInitialRoute()]}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </MemoryRouter>
      </StoreProvider>
    </React.StrictMode>,
  );
}
