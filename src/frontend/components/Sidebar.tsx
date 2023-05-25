import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  height: 100vh;
  background: #ff7675;
`;

export type SidebarMenu = 'keychain';

export interface SidebarProps {
  active: SidebarMenu;
}

function Sidebar({ active }: SidebarProps) {
  return (
    <Container />
  );
}

export default Sidebar;
