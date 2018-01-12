import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath, StaticRouter } from 'react-router-dom';
import { assign } from 'lodash';
import { parse } from 'qs';

import Helmet from 'react-helmet';

import createStore from 'store';
import { routes, RouteWithSubRoutes } from 'routes';
import MainLayout from 'components/layouts/mainlayout';
import prepareData from 'helpers/prepareData';

export default (req, res) => {
  const store = createStore();
  routes.some(route => {
    const match = matchPath(req.url, route);
    const state = { params: {}, routes: [], query: {} };

    if (match) {
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, parse(req.url.substr(1)));
      prepareData(store, state).then(() => {
        const initialState = JSON.stringify(store.getState());

        const content = ReactDOMServer.renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={state}>
              <MainLayout>
                {
                  routes.map(
                    (route, i) => (
                      <RouteWithSubRoutes key={i} {...route}/>
                    )
                  )
                }
              </MainLayout>
            </StaticRouter>
          </Provider>
        );

        const head = Helmet.rewind();

        res.status(200);
        res.render(
          'index',
          { initialState, content, head }
        );
      });
    }
    return match;
  });
};
