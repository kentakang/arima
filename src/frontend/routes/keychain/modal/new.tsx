import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useModal } from 'react-modal-hook';
import TextInput from '../../../components/TextInput';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const useNewKeychainModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const disabled = name === '' || email === '';
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const createKeychain = () => {
    if (name !== '' && email !== '') {
      setLoading(true);

      window.bridge.keychain.createKeychain({
        name,
        email,
        password,
      }).then(() => {
        setVisible(false);
      });
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setLoading(false);
  };

  const [openModal, hideModal] = useModal(() => (
    <Modal
      title="New keychain"
      contents={(
        <ContentsContainer>
          <TextInput
            title="Name"
            value={name}
            onChange={setName}
          />
          <TextInput
            type="email"
            title="Email"
            value={email}
            onChange={setEmail}
          />
          <TextInput
            type="password"
            title="Password"
            value={password}
            onChange={setPassword}
          />
        </ContentsContainer>
      )}
      footer={(
        <FooterContainer>
          <Button onClick={createKeychain} disabled={disabled || loading} loading={loading}>
            Create
          </Button>
        </FooterContainer>
      )}
      onClose={() => {
        setVisible(false);
      }}
    />
  ), [name, email, password, loading, disabled]);

  const open = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (visible) {
      openModal();
    } else {
      hideModal();
      reset();
    }
  }, [visible]);

  return { open };
};

export default useNewKeychainModal;
export {
  ContentsContainer as ModalContentsContainer,
};
