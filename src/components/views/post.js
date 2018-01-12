import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

import Helmet from 'react-helmet';

import BlogItem from 'components/widgets/blog/blogitem';

const Post = ({ post }) => (
  <div>
    <Item.Group>
      { post && <BlogItem post = { post } /> }
    </Item.Group>
    { post && <Helmet title={post.title} /> }
  </div>
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
