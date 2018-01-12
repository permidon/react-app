import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './App';

import '../semantic/dist/semantic.min.css';

const rootEl = document.getElementById('app');
ReactDOM.hydrate(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.hydrate(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
