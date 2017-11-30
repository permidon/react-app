import MainLayout from 'components/layouts/mainlayout';
import BlogPage from 'components/blogpage';
import Post from 'components/post';

import { postsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postsPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
