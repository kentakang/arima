import React from 'react';

import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import SidebarContents from '../../components/SidebarContents';

function KeychainRoute() {
  return (
    <Container>
      <Sidebar active="keychain" />
      <SidebarContents />
    </Container>
  );
}

export default KeychainRoute;
