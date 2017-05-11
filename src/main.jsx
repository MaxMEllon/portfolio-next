import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App';
import createStore from './stores';
import { initialState } from './reducers';

const el = document.getElementById('root');
const store = createStore(initialState);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    el,
  );
};

render(App);

if (module.hot) module.hot.accept('./containers/App', () => render(App));
