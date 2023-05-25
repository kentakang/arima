import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
    <>
      <DraggableArea />
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
