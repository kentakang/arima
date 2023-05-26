import { ReactElement } from 'react';
import { atom } from 'recoil';

export interface ModalAtom {
  title: string;
  contents?: ReactElement;
  footer?: ReactElement;
  onClose?: () => void;
}

const modalAtom = atom<ModalAtom | null>({
  key: 'modalAtom',
  default: null,
});

export default modalAtom;
