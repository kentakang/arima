import { Low } from 'lowdb';
import OpenPGP from 'openpgp';

import { IInternalDatabase } from '../bridge';

export interface IKeychain {
  type: 'public' | 'private';
  name: string;
  email: string;
}

export interface ICreateKeychainParameters {
  name: string;
  email: string;
  password: string;
}

class Keychain {
  db: Low<IInternalDatabase>;

  constructor(db: Low<IInternalDatabase>) {
    this.db = db;
  }

  async getKeychains(): Promise<IKeychain[]> {
    return this.db.data.keychains;
  }

  async createKeychain(parameters: ICreateKeychainParameters): Promise<void> {
    try {
      const result = await OpenPGP.generateKey({
        userIDs: {
          name: parameters.name,
          email: parameters.email,
        },
        type: 'rsa',
        passphrase: parameters.password,
        rsaBits: 4096,
        keyExpirationTime: 0,
      });

      if (!result) {
        throw new Error('Failed to create keychain');
      }

      this.db.data.keychains.push({
        type: 'private',
        name: parameters.name,
        email: parameters.email,
      });

      await this.db.write();
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
}

export default Keychain;
