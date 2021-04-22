/* eslint-disable camelcase */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCountAction, decreaseCountAction, resetCountAction } from '../../store/actions/counter';

import * as styles from './style';

const CounterFooter = () => {
  const dispatch = useDispatch();
  const decreaseCount = () => dispatch(decreaseCountAction());
  const resetCount = () => dispatch(resetCountAction());
  const increaseCount = () => dispatch(increaseCountAction());

  const counter = useSelector((state) => state.counter);

  return (
    <footer css={styles.footer}>
      <button type="button" onClick={() => decreaseCount()}>-</button>
      <span role="presentation" onClick={() => resetCount()}>{counter}</span>
      <button type="button" onClick={() => increaseCount()}>+</button>
      <p>Click the count to reset it!</p>
    </footer>
  );
};

export default CounterFooter;
