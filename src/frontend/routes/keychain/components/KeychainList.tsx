import React from 'react';
import styled from 'styled-components';

import { IKeychain } from '../../../api';

const Container = styled.div`
  margin: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

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
    }
  }
`;

export interface KeychainListProps {
  keychains: IKeychain[];
}

function KeychainList({ keychains }: KeychainListProps) {
  return (
    <Container>
      <Table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {
            keychains.map((keychain, idx) => (
              <tr>
                <td>{ idx + 1 }</td>
                <td>{keychain.name}</td>
                <td>{keychain.email}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default KeychainList;
