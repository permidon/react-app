import React from 'react';
import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';
import BlogItem from 'components/widgets/blog/blogitem';

import { posts } from 'constants/static/posts';

const Post = ({params}) => (
  <Item.Group>
    <BlogItem post={posts[params.id - 1]} />
  </Item.Group>
);

Post.propTypes = {
  params: PropTypes.object
};

export default Post;

