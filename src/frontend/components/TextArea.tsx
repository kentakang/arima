/* eslint-disable no-unused-vars */
import React, { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #efefef;
  border-radius: 4px;
  background: #ffffff;
  font-size: 14px;
  font-weight: normal;
  color: #111111;
  outline: none;
  transition: 0.5s all;
  min-height: 300px;

  &:focus {
    border-color: #ff6b6b;
  }

  &:disabled {
    background: #f8f8f8;
  }
`;

export interface TextAreaProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}

function TextArea({
  value,
  onChange,
  placeholder,
  readOnly,
}: TextAreaProps) {
  return (
    <Textarea
      value={value}
      onChange={(event) => {
        if (onChange !== undefined) {
          onChange(event.target.value);
        }
      }}
      placeholder={placeholder}
      disabled={readOnly}
      readOnly={readOnly}
    />
  );
}

export default TextArea;
