import { css } from 'styled-components';

export const newpostform = css`
  form {
    width: 100%;

    label,
    input,
    textarea {
      display: block;
      margin: 0.5rem 0 0;
    }

    label {
      text-align: left;
    }

    input,
    textarea {
      padding: 0.5rem;
      resize: none;
    }

    button {
      padding: 0.5rem;
      margin: 1rem 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
