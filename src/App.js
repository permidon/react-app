import React from 'react';

import BlogPage from 'components/blogpage';
import { posts } from 'constants/static/posts';

const App = () => (
  <BlogPage posts={posts} />
);

export default App;
