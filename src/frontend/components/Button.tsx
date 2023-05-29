import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Container = styled.button<{ disabled?: boolean; }>`
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
  ${(props) => props.disabled && 'opacity: 0.5; cursor: not-allowed;'}
`;

export interface ButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

function Button({
  children, onClick, disabled, loading,
}: ButtonProps) {
  return (
    <Container onClick={onClick} disabled={disabled || loading}>
      {
        loading ? (
          <ReactLoading type="spokes" color="#FFFFFF" width={14} height={14} />
        ) : children
      }
    </Container>
  );
}

export default Button;
