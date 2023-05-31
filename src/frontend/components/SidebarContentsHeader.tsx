import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.header`
  width: calc(100% - 32px);
  padding: 16px;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 16px;
  color: #111111;
  font-weight: bold;
  line-height: 33px;
`;

export interface SidebarContentsHeaderProps {
  title: string;
  children?: ReactElement;
}

function SidebarContentsHeader({ title, children }: SidebarContentsHeaderProps) {
  return (
    <Container>
      <Title>{ title }</Title>
      { children }
    </Container>
  );
}

export default SidebarContentsHeader;
