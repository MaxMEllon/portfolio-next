// @flow
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { isImmutable } from '../utils/M';
import reducer from '../reducers';
import rootSaga from '../sagas';

const stateTransformer = (state: any) => {
  const newState = {};
  Object.keys(state).forEach((k: string) => {
    const v = state[k];
    newState[k] = isImmutable(v) ? v.toJS() : v;
  });
  return newState;
};

const logger = createLogger({ stateTransformer });

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [];
  middlewares.push(sagaMiddleware);
  if (process.env.NODE_ENV !== 'production') middlewares.push(logger);
  const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);
  sagaMiddleware.run(rootSaga);
  return store;
}
