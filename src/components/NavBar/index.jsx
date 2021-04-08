import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: red;

  &.active {
    color: blue;
  }

  &:hover {

  }
`;

const NavBar = () => (
  <div>
    <StyledNavLink exact to="/">Home</StyledNavLink>
    <StyledNavLink to="/posts">Posts</StyledNavLink>
  </div>
);

export default NavBar;
