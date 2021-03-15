/* eslint-disable camelcase */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './sagas';

const composeEnhancers = (__webpack_devmode__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger({
  collapsed: true,
});

const reduxMiddlewares = [];

reduxMiddlewares.push(sagaMiddleware);
if (__webpack_devmode__) reduxMiddlewares.push(loggerMiddleware);

const appStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...reduxMiddlewares)),
);

sagaMiddleware.run(rootSaga);

export default appStore;
