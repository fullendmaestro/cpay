import { initCypherStorage } from '@cpay/cipher-store';
import AppRoutes from './Routes';
import { storageAdapter } from './lib/storageAdapter';

initCypherStorage(storageAdapter);

const App = () => {
  return (
    // <GlobalLayout>
    <AppRoutes />
    // </GlobalLayout>
  );
};

export default App;
