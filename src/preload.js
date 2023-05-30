import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('bridge', {
  keychain: {
    async getKeychains() {
      const keychains = await ipcRenderer.invoke('getKeychains');

      return keychains;
    },
    async createKeychain(parameters) {
      await ipcRenderer.invoke('createKeychain', parameters);
    },
    async removeKeychain(idx) {
      await ipcRenderer.invoke('removeKeychain', idx);
    },
  },
});
