import { KeychainType } from '../api';

const formatKeyType = (type: KeychainType): string => {
  switch (type) {
    case 'public':
      return 'Public key';
    case 'private':
      return 'Private key';
    case 'both':
      return 'Public / Private key';
    default:
      return '';
  }
};

export default formatKeyType;
