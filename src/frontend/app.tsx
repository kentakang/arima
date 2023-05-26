import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import DraggableArea from './components/DraggableArea';
import GlobalStyle from './components/GlobalStyle';
import KeychainRoute from './routes/keychain';

const router = createBrowserRouter([
  {
    path: '/',
    element: <KeychainRoute />,
  },
]);

function App() {
  return (
    <RecoilRoot>
      <DraggableArea />
      <RouterProvider router={router} />
      <GlobalStyle />
    </RecoilRoot>
  );
}

export default App;
