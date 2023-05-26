export interface IKeychain {
  type: 'public' | 'private';
  name: string;
  email: string;
}

declare global {
  export interface Window {
    bridge: {
      keychain: {
        getKeychains: () => Promise<IKeychain[]>;
      }
    };
  }
}
