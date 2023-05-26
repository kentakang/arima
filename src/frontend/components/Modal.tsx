import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import modalAtom from '../atom/modalAtom';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.5);
  -webkit-drag-region: no-drag;
`;

function Modal() {
  const [modalValue, setModalValue] = useRecoilState(modalAtom);

  if (modalValue !== null) {
    return (
      <Wrapper onClick={() => { setModalValue(null); }} />
    );
  }

  return null;
}

export default Modal;
