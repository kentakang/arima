import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background: #ff7675;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  -webkit-app-region: no-drag;
  z-index: 100;
`;

export interface ButtonProps {
  children: string;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      { children }
    </Container>
  );
}

export default Button;
