import React from 'react';
import DOM from 'react-dom-factories';
import { map } from 'lodash';

import BlogItem from 'components/widgets/blog/blogitem';

const BlogList = ({ posts, addLike }) => (
  DOM.div(
    {},
    DOM.ul({ style: { paddingLeft: '0px' } },
      map(
        posts, (post) => (
          React.createElement(
            'li',
            { style: { listStyle: 'none' }, key: post.id },
            React.createElement(BlogItem, { post, addLike })
          )
        )
      )
    )
  )
);

export default BlogList;
