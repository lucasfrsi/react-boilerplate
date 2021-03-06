import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from 'style/variables';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: ${fonts.primary};
    font-size: 1.6rem;
    font-weight: 400;
    color: ${colors['black-1']};
  }

  button,
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
`;

export default GlobalStyle;
