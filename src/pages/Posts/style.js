import { css } from 'styled-components';

export const posts = css`
  h1 {
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }

  hr {
    margin: 1rem 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

  .post-item {
    text-align: right;
    margin: 2rem;

    h3,
    p {
      text-align: left;
      margin-bottom: .5rem;
    }
  }
`;
