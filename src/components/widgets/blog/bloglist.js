import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import { map, isEmpty } from 'lodash';

import BlogItem from 'components/widgets/blog/blogitem';

const BlogList = ({ posts }) => {
  if (isEmpty(posts)) {
    return DOM.h4(
      {className: 'eleven wide column'},
      'Nothing found...'
    );
  } else {
    return DOM.div(
      {className: 'eleven wide column'},
      DOM.ul({ style: { paddingLeft: '0px' } },
        map(
          posts, (post) => (
            React.createElement(
              'li',
              { style: { listStyle: 'none' }, key: post.id },
              React.createElement(BlogItem, { post })
            )
          )
        )
      )
    );
  }
};

BlogList.propTypes = {
  posts: PropTypes.array,
};

BlogList.defaultProps = {
  posts: [],
};

export default BlogList;
