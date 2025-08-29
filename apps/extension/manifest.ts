import fs from 'fs';
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: 'Cpay',
  version: packageJson.version,
  description: packageJson.description || '',
  action: {
    default_icon: {
      '128': '/assets/cpay.png',
    },
    default_popup: './src/index.html',
  },
  options_page: './src/index.html',
  background: {
    service_worker: './src/background/index.ts',
    type: 'module',
  },
  icons: {
    '16': '/assets/cpay.png',
    '32': '/assets/cpay.png',
    '48': '/assets/cpay.png',
    '128': '/assets/cpay.png',
  },
  commands: {
    _execute_action: {
      suggested_key: {
        default: 'Alt+M',
      },
    },
  },
  permissions: ['storage', 'sidePanel', 'tabs', 'alarms', 'notifications', 'nativeMessaging'],
};

export default manifest;
