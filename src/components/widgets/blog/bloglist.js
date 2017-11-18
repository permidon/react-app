import React from 'react';
import DOM from 'react-dom-factories';
import _ from 'lodash';

import BlogItem from 'components/widgets/blog/blogitem';

const BlogList = ({posts, addLike}) => (
  DOM.ul({ style: {paddingLeft: '0px'}},
    _.map(
      posts, (post) => (
        React.createElement('li', { style: {listStyle: 'none' }, key: post.id },
          React.createElement(BlogItem, {
            id: post.id, image: post.image, title: post.title,
            txt: post.txt, meta: post.meta, addLike
          })
        )
      )
    )
  )
);

export default BlogList;
