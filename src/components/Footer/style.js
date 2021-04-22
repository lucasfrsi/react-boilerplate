import { css } from 'styled-components';
import { colors } from 'style/variables';

export const footer = css`
  width: 100%;
  padding: 1rem;
  background-color: ${colors.primary};
  cursor: default;

  span {
    display: inline-block;
    width: 4rem;
    color: ${colors['white-3']};
    font-size: 2rem;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid ${colors['grey-l-2']};
    color: ${colors['grey-l-2']};
    font-size: 2rem;

    &:hover {
      cursor: pointer;
      border: 2px solid white;
      color: white;
    }

    &:focus {
      outline: none;
    }
  }

  p {
    margin-top: 1rem;
    color: ${colors['primary-l']};
    font-size: 1.4rem;
    font-weight: 300;
  }
`;
