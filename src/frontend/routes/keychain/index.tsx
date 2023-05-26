import React, { useEffect, useState } from 'react';

import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import SidebarContents from '../../components/SidebarContents';
import { IKeychain } from '../../api';

function KeychainRoute() {
  const [keychains, setKeychains] = useState<IKeychain[]>([]);

  useEffect(() => {
    window.bridge.keychain.getKeychains().then((newKeychains) => {
      console.log(newKeychains);

      setKeychains(newKeychains);
    });
  }, []);

  return (
    <Container>
      <Sidebar active="keychain" />
      <SidebarContents />
    </Container>
  );
}

export default KeychainRoute;
