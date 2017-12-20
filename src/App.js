import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match } from 'react-router';
import { Provider } from 'react-redux';

import history from 'helpers/history';
import store from 'store';
import routes from 'routes';
import prepareData from 'helpers/prepareData';

import DevTools from 'containers/DevTools';

function historyCb(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });

  return true;
}

history.listenBefore(historyCb);

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;
