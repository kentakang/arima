import React, { useEffect, useState } from 'react';

import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import SidebarContents from '../../components/SidebarContents';
import { IKeychain } from '../../api';
import SidebarContentsHeader from '../../components/SidebarContentsHeader';
import Button from '../../components/Button';
import useNewKeychainModal from './modal/new';

function KeychainRoute() {
  const [keychains, setKeychains] = useState<IKeychain[]>([]);
  const { open: openNewKeychainModal } = useNewKeychainModal();

  const getKeychains = () => {
    window.bridge.keychain.getKeychains().then((newKeychains) => {
      setKeychains(newKeychains);
    });
  };

  useEffect(() => {
    getKeychains();
  }, []);

  return (
    <Container>
      <Sidebar active="keychain" />
      <SidebarContents>
        <SidebarContentsHeader title="Keychain">
          <Button
            onClick={() => {
              openNewKeychainModal();
            }}
          >
            New keychain
          </Button>
        </SidebarContentsHeader>
      </SidebarContents>
    </Container>
  );
}

export default KeychainRoute;
