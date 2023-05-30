import { Low } from 'lowdb';
import * as OpenPGP from 'openpgp';

import { IInternalDatabase } from '../bridge';

export type KeychainType = 'public' | 'private' | 'both';

export interface IKeychain {
  type: KeychainType;
  name: string;
  email: string;
  publicKey: string;
  privateKey?: string;
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
        userIDs: [{
          name: parameters.name,
          email: parameters.email,
        }],
        type: 'rsa',
        passphrase: parameters.password,
        rsaBits: 4096,
        keyExpirationTime: 0,
      });

      if (!result) {
        throw new Error('Failed to create keychain');
      }

      this.db.data.keychains.push({
        type: 'both',
        name: parameters.name,
        email: parameters.email,
        publicKey: result.publicKey,
        privateKey: result.privateKey,
      });

      await this.db.write();
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async removeKeychain(idx: number): Promise<void> {
    this.db.data.keychains.splice(idx, 1);

    await this.db.write();
  }
}

export default Keychain;
