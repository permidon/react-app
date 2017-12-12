import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import Image from 'components/widgets/blog/elements/image';
import TextBox from 'components/widgets/blog/elements/textbox';
import Like from 'components/widgets/blog/elements/like';
import Meta from 'components/widgets/blog/elements/meta';

import Link from 'components/elements/link';
import { postsPath } from 'helpers/routes';

const BlogItem = ({ post, addLike }) => (
  DOM.div(
    {
      id: post.id,
      style: { marginBottom: '15px', background: 'lightgray' }
    },
    DOM.div(
      {
        className: 'row',
        style: { minHeight: '150px' }
      },
      React.createElement(Image, post.image),
      DOM.h3(
        {},
        React.createElement(Link, {to: postsPath(post.id)}, post.title)
      ),
      React.createElement(TextBox, {}, post.txt)),
    DOM.div(
      {
        className: 'row',
        style: { display: 'inline-block', minHeight: '50px' }
      },
      React.createElement(
        Like,
        {
          id: post.id,
          likesCounter: post.likesCounter,
          addLike
        }
      ),
      React.createElement(Meta, post.meta)
    )
  )
);

BlogItem.propTypes = {
  post: PropTypes.object
};

BlogItem.defaultProps = {
  post: {}
};

export default BlogItem;
