/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import styled from 'styled-components';
import { EllipsisVertical } from 'react-ionicons';

import { IKeychain } from '../../../api';
import useRemoveKeychainModal from '../modal/remove';

const Container = styled.div`
  height: 100%;
  margin: 16px;
`;

const Table = styled.table`
  width: 100%;

  th {
    padding: 12px;
    background: rgba(255, 118, 117, 0.2);
    font-size: 14px;
    font-weight: 500;
  }

  tr {
    border-bottom: 1px solid #efefef;

    td {
      text-align: center;
      padding: 12px;
      font-size: 14px;
      font-weight: 400;
      position: relative;
    }
  }
`;

const MoreViewModal = styled.div`
  width: auto;
  min-width: 80px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 8px;
  position: absolute;
  bottom: -24px;
  right: 0;
  z-index: 1;
`;

const MoreViewListItem = styled.div<{ last?: boolean; }>`
  padding: 8px;
  border-bottom: ${(props) => (props.last ? 0 : 1)}px solid #efefef;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
`;

export interface KeychainListProps {
  keychains: IKeychain[];
  reloadKeychains: () => void;
}

function KeychainList({ keychains, reloadKeychains }: KeychainListProps) {
  const [moreActiveIdx, setMoreActiveIdx] = useState<number | null>(null);
  const { open: openRemove } = useRemoveKeychainModal({
    reloadKeychains,
  });

  return (
    <Container onClick={() => { setMoreActiveIdx(null); }}>
      <Table>
        <thead>
          <th style={{ borderTopLeftRadius: 8 }}>#</th>
          <th>Name</th>
          <th>Email</th>
          <th style={{ borderTopRightRadius: 8 }} />
        </thead>
        <tbody>
          {
            keychains.map((keychain, idx) => (
              <tr>
                <td>{ idx + 1 }</td>
                <td>{keychain.name}</td>
                <td>{keychain.email}</td>
                <td>
                  <EllipsisVertical
                    width={14}
                    height={14}
                    color="#989898"
                    style={{ cursor: 'pointer' }}
                    onClick={(event) => {
                      event.stopPropagation();

                      if (moreActiveIdx === idx) {
                        setMoreActiveIdx(null);
                      } else {
                        setMoreActiveIdx(idx);
                      }
                    }}
                  />
                  {
                    moreActiveIdx === idx && (
                      <MoreViewModal onClick={(event) => { event.stopPropagation(); }}>
                        <MoreViewListItem
                          style={{ color: '#d63031' }}
                          onClick={() => {
                            openRemove(idx);
                          }}
                        >
                          Delete
                        </MoreViewListItem>
                      </MoreViewModal>
                    )
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default KeychainList;
