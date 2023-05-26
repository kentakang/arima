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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  min-width: 500px;
  min-height: 100px;
  background: #ffffff;
  border-radius: 8px;
`;

const HeaderContainer = styled.header`
  padding: 16px;
  border-bottom: 1px solid #efefef;
`;

const HeaderTitle = styled.p`
  font-size: 16px;
  color: #111111;
  font-weight: 600;
`;

const ContentsContainer = styled.div`
  padding: 16px;
`;

const FooterContainer = styled.footer`
  padding: 16px;
  border-top: 1px solid #efefef;
`;

function Modal() {
  const [modalValue, setModalValue] = useRecoilState(modalAtom);

  if (modalValue !== null) {
    return (
      <Wrapper
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setModalValue(null);
          }
        }}
      >
        <Container>
          <HeaderContainer>
            <HeaderTitle>{ modalValue.title }</HeaderTitle>
          </HeaderContainer>
          {
            modalValue.contents !== undefined && (
              <ContentsContainer>
                { modalValue.contents }
              </ContentsContainer>
            )
          }
          {
            modalValue.footer !== undefined && (
              <FooterContainer>
                { modalValue.footer }
              </FooterContainer>
            )
          }
        </Container>
      </Wrapper>
    );
  }

  return null;
}

export default Modal;
