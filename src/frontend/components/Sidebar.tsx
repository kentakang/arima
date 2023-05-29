import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  height: 100vh;
  background: #ff7675;
  padding-top: 48px;
`;

const MenuItem = styled.div<{ active: boolean; }>`
  width: 100%;
  cursor: pointer;
  background: ${(props) => (props.active ? '#ff6b6b' : 'transparent')};
`;

const MenuItemText = styled.p<{ active: boolean; }>`
  font-size: 14px;
  color: #ffffff;
  font-weight: ${(props) => (props.active ? 'bold' : 500)};
  opacity: ${(props) => (props.active ? 1 : 0.8)};
  margin: 16px;
`;

export type SidebarMenu = 'keychain';

export interface SidebarProps {
  active: SidebarMenu;
}

function Sidebar({ active }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <MenuItem active={active === 'keychain'} onClick={() => { navigate('/'); }}>
        <MenuItemText active={active === 'keychain'}>Keychain</MenuItemText>
      </MenuItem>
    </Container>
  );
}

export default Sidebar;
