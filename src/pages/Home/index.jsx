/* eslint-disable camelcase */
import React from 'react';

import reactlogo from 'assets/react-logo.svg';

const Home = () => (
  <div>
    <h1>REACT BOILERPLATE v1.0.0</h1>
    <h2><b>Mode:</b> {__webpack_devmode__ ? 'Development' : 'Production'}</h2>
    <img src={reactlogo} alt="react logo" />
  </div>
);

export default Home;
