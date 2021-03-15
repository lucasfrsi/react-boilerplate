/* eslint-disable camelcase */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCountAction, decreaseCountAction, resetCountAction } from '../../store/actions/counter';

import styles from './style.scss';

const CounterFooter = () => {
  const dispatch = useDispatch();
  const decreaseCount = () => dispatch(decreaseCountAction());
  const resetCount = () => dispatch(resetCountAction());
  const increaseCount = () => dispatch(increaseCountAction());

  const counter = useSelector((state) => state.counter);

  return (
    <footer className={styles.footer}>
      <p>Build #{__webpack_hash__}</p>
      <button className={[styles.button, styles.subtract].join(' ')} type="button" onClick={() => decreaseCount()}>-</button>
      <span role="presentation" className={styles.span} onClick={() => resetCount()}>{counter}</span>
      <button className={[styles.button, styles.add].join(' ')} type="button" onClick={() => increaseCount()}>+</button>
      <p>Click the count to reset it!</p>
    </footer>
  );
};

export default CounterFooter;
