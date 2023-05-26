import React from 'react';
import styled from 'styled-components';

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

export interface ModalProps {
  title: string;
  contents?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}

function Modal({
  title, contents, footer, onClose,
}: ModalProps) {
  return (
    <Wrapper
      onClick={(event) => {
        if (event.target === event.currentTarget && onClose !== undefined) {
          onClose();
        }
      }}
    >
      <Container>
        <HeaderContainer>
          <HeaderTitle>{ title }</HeaderTitle>
        </HeaderContainer>
        {
              contents !== undefined && (
                <ContentsContainer>
                  { contents }
                </ContentsContainer>
              )
            }
        {
              footer !== undefined && (
                <FooterContainer>
                  { footer }
                </FooterContainer>
              )
            }
      </Container>
    </Wrapper>
  );
}

export default Modal;
