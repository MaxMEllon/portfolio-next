import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import rootSaga from '../sagas';

const logger = createLogger({});

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      sagaMiddleware,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
