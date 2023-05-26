import { useSetRecoilState } from 'recoil';

import modalAtom, { ModalAtom } from '../atom/modalAtom';

const useModal = () => {
  const setModalValue = useSetRecoilState(modalAtom);

  const openModal = (value: ModalAtom) => {
    setModalValue(value);
  };

  const closeModal = () => {
    setModalValue(null);
  };

  return { openModal, closeModal };
};

export default useModal;
