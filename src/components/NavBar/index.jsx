import React from 'react';

import * as styles from './style';
import { StyledNavLink } from './style';

const NavBar = () => (
  <div css={styles.navbar}>
    <StyledNavLink exact to="/">Home</StyledNavLink>
    <StyledNavLink to="/posts">Posts</StyledNavLink>
  </div>
);

export default NavBar;
