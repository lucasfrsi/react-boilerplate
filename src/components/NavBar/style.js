import styled, { css } from 'styled-components';
import { colors } from 'style/variables';

import { NavLink } from 'react-router-dom';

export const navbar = css`
  width: 100%;
  background-color: ${colors.primary};
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: ${colors['white-3']};
  text-decoration: none;

  &.active,
  &:hover {
    text-decoration: underline;
  }

  margin: 0.5rem 1rem;
`;
