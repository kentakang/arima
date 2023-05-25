import { Low } from 'lowdb';

import { IInternalDatabase } from '../bridge';

export interface IKeychain {
  type: 'public' | 'private';
  name: string;
  email: string;
}

class Keychain {
  db: Low<IInternalDatabase>;

  constructor(db: Low<IInternalDatabase>) {
    this.db = db;
  }

  async getKeychains(): Promise<IKeychain[]> {
    return this.db.data.keychains;
  }
}

export default Keychain;
