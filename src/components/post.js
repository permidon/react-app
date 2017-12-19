import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/blogitem';

const Post = ({ post }) => (
  <Item.Group>
    { post && <BlogItem post = { post } /> }
  </Item.Group>
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
