import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const sagaMiddleware = createSagaMiddleware();

const appStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default appStore;
