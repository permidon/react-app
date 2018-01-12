import React from 'react';
import BlogPage from 'components/widgets/blog/blogpage';

import Helmet from 'react-helmet';

const Index = ({ posts }) => (
  <div>
    <BlogPage posts={posts} />
    <Helmet
      title='Блоги Империи'
    />
  </div>
);

Index.propTypes = {
  posts: BlogPage.propTypes.posts
};

export default Index;
