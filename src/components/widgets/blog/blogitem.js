import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import Image from 'components/widgets/blog/elements/image';
import TextBox from 'components/widgets/blog/elements/textbox';
import Like from 'components/widgets/blog/elements/like';
import Meta from 'components/widgets/blog/elements/meta';

const BlogItem = ({id, title, image, txt, meta, addLike}) => (
  DOM.div(
    {
      id,
      style: { marginBottom: '15px', background: 'lightgray' }
    },
    DOM.div(
      {
        className: 'row',
        style: { minHeight: '150px' }
      },
      React.createElement(Image, image),
      DOM.h3({}, title),
      React.createElement(TextBox, {}, txt)),
    DOM.div(
      {
        className: 'row',
        style: { display: 'inline-block', minHeight: '50px' }
      },
      React.createElement(
        Like,
        {
          id,
          likesCounter: meta.likesCounter,
          addLike
        }
      ),
      React.createElement(Meta, meta)
    )
  )
);

BlogItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  txt: PropTypes.string,
  meta: PropTypes.object,
};

BlogItem.defaultProps = {
  id: null,
  title: 'Untitled',
  image: Image.props,
  txt: TextBox.children,
  meta: Meta.props,
};

export default BlogItem;
