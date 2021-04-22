import { css } from 'styled-components';
import { colors } from 'style/variables';

export const layout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem auto 0;

  max-width: 35rem;
  text-align: center;

  border: 1px solid ${colors['primary-d']};
`;
