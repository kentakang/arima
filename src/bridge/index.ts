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
    ipcMain.on('getKeychains', (event) => {
      this.keychain.getKeychains().then((keychains) => {
        event.reply('keychains', JSON.stringify(keychains));
      });
    });
  }
}

export default Bridge;
