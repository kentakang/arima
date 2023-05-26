import { WebContents, ipcMain } from 'electron';
import { Low } from 'lowdb';

import Keychain, { IKeychain } from '../keychain';

export interface IInternalDatabase {
  keychains: IKeychain[];
}

class Bridge {
  db: Low<IInternalDatabase>;

  webContents: WebContents;

  keychain: Keychain;

  constructor(db: Low<IInternalDatabase>, webContents: WebContents) {
    this.db = db;
    this.webContents = webContents;
    this.keychain = new Keychain(db);
  }

  initialize() {
    ipcMain.handle('getKeychains', async (event) => {
      const keychains = await this.keychain.getKeychains();

      return keychains;
    });
  }
}

export default Bridge;
