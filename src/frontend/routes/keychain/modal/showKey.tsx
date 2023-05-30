import React, { useEffect, useState } from 'react';
import { useModal } from 'react-modal-hook';

import { IKeychain } from '../../../api';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import { ModalContentsContainer, ModalFooterContainer } from './new';
import TextArea from '../../../components/TextArea';

const useShowKeychainModal = () => {
  const [keychain, setKeychain] = useState<IKeychain | null>(null);
  const [type, setType] = useState<'public' | 'private' | null>(null);
  const [visible, setVisible] = useState(false);
  const [openModal, hideModal] = useModal(() => (
    <Modal
      title={`${type === 'public' ? 'Public' : 'Private'} key`}
      contents={(
        <ModalContentsContainer>
          <TextArea value={(type === 'private' ? keychain?.privateKey : keychain?.publicKey) || ''} readOnly />
        </ModalContentsContainer>
      )}
      footer={(
        <ModalFooterContainer>
          <Button onClick={() => { setVisible(false); }}>
            Close
          </Button>
        </ModalFooterContainer>
      )}
      onClose={() => {
        setVisible(false);
      }}
    />
  ), [keychain, type]);

  const open = (newKeychain: IKeychain, newType: 'public' | 'private') => {
    setVisible(true);
    setKeychain(newKeychain);
    setType(newType);
  };

  useEffect(() => {
    if (visible) {
      openModal();
    } else {
      hideModal();
    }
  }, [visible]);

  return { open };
};

export default useShowKeychainModal;
