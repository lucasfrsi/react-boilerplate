import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/posts">Posts</NavLink>
  </div>
);

export default NavBar;
