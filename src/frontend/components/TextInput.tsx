/* eslint-disable no-unused-vars */
import React, { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #111111;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #efefef;
  border-radius: 4px;
  background: #ffffff;
  font-size: 14px;
  font-weight: normal;
  color: #111111;
  outline: none;
  transition: 0.5s all;

  &:focus {
    border-color: #ff6b6b;
  }
`;

export interface TextInputProps {
  title?: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function TextInput({
  title,
  type = 'text',
  value,
  onChange,
  placeholder,
}: TextInputProps) {
  return (
    <Container>
      {
        title !== undefined && (
          <Title>{ title }</Title>
        )
      }
      <Input
        type={type}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        placeholder={placeholder}
      />
    </Container>
  );
}

export default TextInput;
