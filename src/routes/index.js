import React from 'react';
import { Route } from 'react-router-dom';

import initialLoad from 'helpers/initialLoad';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import Contacts from 'components/views/contacts';
import { rootPath, postPath, contactsPath } from 'helpers/routes';
import { fetchPosts } from 'actions/posts';
import { fetchPost } from 'actions/post';

export const routes = [
  {
    path: rootPath(),
    exact: true,
    component: PostsContainer,
    prepareData: (store) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    }
  },
  {
    path: postPath(),
    exact: true,
    component: PostContainer,
    prepareData: (store, query, params) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPost(params.id));
    }
  },
  {
    path: contactsPath(),
    component: Contacts
  }
];

export const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
);
