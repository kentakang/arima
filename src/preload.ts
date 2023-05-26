import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('bridge', {
  keychain: {
    async getKeychains() {
      const keychains = await ipcRenderer.invoke('getKeychains');

      return keychains;
    },
  },
});
