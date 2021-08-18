import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from 'style/variables';
import sanitize from './sanitize';

const GlobalStyle = createGlobalStyle`
  ${sanitize}

  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  body {
    font-family: ${fonts.primary};
    font-size: 1.6rem;
    color: ${colors['black-1']};
  }
`;

export default GlobalStyle;
