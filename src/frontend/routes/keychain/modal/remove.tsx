import React, { useEffect, useState } from 'react';
import { useModal } from 'react-modal-hook';

import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import { ModalFooterContainer } from './new';

const useRemoveKeychainModal = ({ reloadKeychains }: { reloadKeychains: () => void; }) => {
  const [itemIdx, setItemIdx] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const removeKeychain = () => {
    if (itemIdx !== null) {
      setLoading(true);

      window.bridge.keychain.removeKeychain(itemIdx).then(() => {
        setVisible(false);
        reloadKeychains();
        setLoading(false);
      });
    }
  };

  const [openModal, hideModal] = useModal(() => (
    <Modal
      title="Are you sure you want to delete the key?"
      contents={(
        <p>You can&#39;t recover a deleted key.</p>
      )}
      footer={(
        <ModalFooterContainer>
          <Button
            disabled={loading}
            backgroundColor="#efefef"
            textColor="#131313"
            onClick={() => { setVisible(false); }}
          >
            Cancel
          </Button>
          <Button disabled={loading} onClick={removeKeychain} loading={loading}>
            Yes, delete
          </Button>
        </ModalFooterContainer>
      )}
      onClose={() => {
        setVisible(false);
      }}
    />
  ), [itemIdx]);

  const open = (idx: number) => {
    setItemIdx(idx);
    setVisible(true);
  };

  useEffect(() => {
    if (visible) {
      openModal();
    } else {
      setItemIdx(null);
      hideModal();
    }
  }, [visible]);

  return { open };
};

export default useRemoveKeychainModal;
