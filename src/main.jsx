import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App.jsx';

const el = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    el
  );
}

render(App);

if (module.hot) module.hot.accept('./containers/App.jsx', () => render(App));
