import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import counterReducer from 'store/reducers/counter';
import Footer from './index';

describe('Test App', () => {
  // Reducer and Store Setup
  const rootReducer = combineReducers({
    counter: counterReducer,
  });
  const counterStore = createStore(rootReducer, {
    counter: 0,
  });

  const renderFooter = () => render(
    <Provider store={counterStore}>
      <Footer />
    </Provider>,
  );

  // Arrange for every test
  beforeEach(() => renderFooter());

  test('renders buttons', () => {
    const subButton = screen.getByText('-');
    const addButton = screen.getByText('+');
    const counter = screen.getByRole('presentation');

    // Assert
    expect(subButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(counter).toBeInTheDocument();
  });

  test('increments counter', () => {
    const addButton = screen.getByText('+');
    const counter = screen.getByRole('presentation');

    // Act
    userEvent.click(addButton);
    // Assert
    expect(counter).toHaveTextContent(/^1$/);
  });

  test('decrements counter', () => {
    const subButton = screen.getByText('-');
    const counter = screen.getByRole('presentation');

    // Act
    userEvent.click(subButton);
    // Assert
    expect(counter).toHaveTextContent(/^0$/);
  });

  test('resets counter', () => {
    const addButton = screen.getByText('+');
    const counter = screen.getByRole('presentation');

    // Act
    userEvent.click(addButton);
    userEvent.click(addButton);
    userEvent.click(counter);
    // Assert
    expect(counter).toHaveTextContent(/^0$/);
  });
});
