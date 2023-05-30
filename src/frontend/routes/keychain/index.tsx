import React, { useEffect, useState } from 'react';

import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import SidebarContents from '../../components/SidebarContents';
import { IKeychain } from '../../api';
import SidebarContentsHeader from '../../components/SidebarContentsHeader';
import Button from '../../components/Button';
import useNewKeychainModal from './modal/new';
import KeychainList from './components/KeychainList';

function KeychainRoute() {
  const [keychains, setKeychains] = useState<IKeychain[]>([]);

  const getKeychains = () => {
    window.bridge.keychain.getKeychains().then((newKeychains) => {
      setKeychains(newKeychains);
    });
  };

  const { open: openNewKeychainModal } = useNewKeychainModal({
    reloadKeychains: getKeychains,
  });

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
        <KeychainList keychains={keychains} reloadKeychains={getKeychains} />
      </SidebarContents>
    </Container>
  );
}

export default KeychainRoute;
