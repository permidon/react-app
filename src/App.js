import React from 'react';
import ReactDOM from 'react-dom';

import { AllRoutes, routes } from 'routes';
import { Provider } from 'react-redux';
import { matchPath, Router } from 'react-router';
import { assign } from 'lodash';
import { parse } from 'qs';

import store from 'store';
import history from 'helpers/history';
import prepareData from 'helpers/prepareData';

// eslint-disable-next-line
import DevTools from 'containers/DevTools';

function historyCb(location) {
  const state = { params: {}, routes: [] };
  routes.some(route => {
    const match = matchPath(location.pathname, route);
    if (match)
    {
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, parse(location.search.substr(1)));
      prepareData(store, state);
    }
    return match;
  });
}

history.listen(historyCb);
historyCb(history.location);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <AllRoutes />
    </Router>
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;
