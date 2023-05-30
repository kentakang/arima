/* eslint-disable no-unused-vars */
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

declare global {
  export interface Window {
    bridge: {
      keychain: {
        getKeychains: () => Promise<IKeychain[]>;
        createKeychain: (parameters: ICreateKeychainParameters) => Promise<void>;
        removeKeychain: (idx: number) => Promise<void>;
      }
    };
  }
}
