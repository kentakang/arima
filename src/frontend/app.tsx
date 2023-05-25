import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Hello, React!dd</p>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
