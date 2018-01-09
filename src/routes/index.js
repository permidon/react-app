import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from 'components/layouts/mainlayout';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import { rootPath, postsPath } from 'helpers/routes';
import { fetchPosts } from 'actions/posts';
import { fetchPost } from 'actions/post';

import { map } from 'lodash/collection';

export const routes = [
  {
    exact: true,
    path: rootPath(),
    component: PostsContainer,
    prepareData: (store) => {
      store.dispatch(fetchPosts());
    }
  },
  {
    path: postsPath(),
    component: PostContainer,
    prepareData: (store, query, params) => {
      store.dispatch(fetchPost(params.id));
    }
  }
];

export const AllRoutes = () => (
  <MainLayout>
    <Switch>
      { map(routes, (route, index) => <Route key={index} {...route} />) }
    </Switch>
  </MainLayout>
);

export default AllRoutes;
