import React from 'react';
import { Route } from 'react-router-dom';

import initialLoad from 'helpers/initialLoad';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import { rootPath, postsPath } from 'helpers/routes';
import { fetchPosts } from 'actions/posts';
import { fetchPost } from 'actions/post';

export const routes = [
  {
    exact: true,
    path: rootPath(),
    component: PostsContainer,
    prepareData: (store) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    }
  },
  {
    path: postsPath(),
    component: PostContainer,
    prepareData: (store, query, params) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPost(params.id));
    }
  }
];

export const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
);
