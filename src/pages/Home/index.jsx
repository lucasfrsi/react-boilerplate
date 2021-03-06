/* eslint-disable camelcase */
import React from 'react';

import reactlogo from 'assets/react-logo.svg';
import * as styles from './style';

const Home = () => (
  <div css={styles.home}>
    <h1>REACT BOILERPLATE</h1>
    <h2><b>Mode:</b> {__webpack_devmode__ ? 'Development' : 'Production'}</h2>
    <img src={reactlogo} alt="react logo" />
  </div>
);

export default Home;
