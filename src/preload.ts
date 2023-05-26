import { contextBridge, ipcRenderer } from 'electron';

import { ICreateKeychainParameters } from './keychain';

contextBridge.exposeInMainWorld('bridge', {
  keychain: {
    async getKeychains() {
      const keychains = await ipcRenderer.invoke('getKeychains');

      return keychains;
    },
    async createKeychain(parameters: ICreateKeychainParameters) {
      await ipcRenderer.invoke('createKeychain', parameters);
    },
  },
});
