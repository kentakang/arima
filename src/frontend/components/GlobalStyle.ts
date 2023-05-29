import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Pretendard' !important;
  }

  ${reset}
`;

export default GlobalStyle;
