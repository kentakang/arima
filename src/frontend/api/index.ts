/* eslint-disable no-unused-vars */
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

declare global {
  export interface Window {
    bridge: {
      keychain: {
        getKeychains: () => Promise<IKeychain[]>;
        createKeychain: (parameters: ICreateKeychainParameters) => Promise<void>;
      }
    };
  }
}
