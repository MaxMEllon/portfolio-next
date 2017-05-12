import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Iterable } from 'immutable';
import reducer from '../reducers';
import rootSaga from '../sagas';

const stateTransformer = (state) => {
  const newState = {};
  Object.keys(state).forEach((v, k) => {
    newState[k] = Iterable.isIterable(v) ? v.toJS() : v;
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
