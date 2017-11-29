import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import { formatDate } from 'helpers/date';

const Meta = ({ author, createdAt, updatedAt }) => (
  DOM.div({style: { display: 'inline-block' }},
    React.createElement('p',
      { style: { fontSize: '14px' } },
      `Написал: ${author} ${formatDate(createdAt)}
      (Изменено: ${formatDate(updatedAt)})`)
  )
);

Meta.defaultProps = {
  author: 'Anonymous',
  createdAt: '2011111',
  updatedAt: '2011111',
};

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

export default Meta;
