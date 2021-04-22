import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar';
import Footer from '../Footer';

import * as styles from './style';

const Layout = ({ children }) => (
  <div css={styles.layout}>
    <NavBar />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
