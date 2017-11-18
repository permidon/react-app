import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import { formatDate } from 'helpers/date';

const Meta = ({ author, createdAt, updatedAt }) => (
  DOM.div({style: { display: 'inline-block' }},
    React.createElement('p', {style: { fontSize: '14px' }}, `Написал: ${author} ${createdAt} (Изменено: ${updatedAt})`)
  )
);

Meta.defaultProps = {
  author: 'Anonymous',
  createdAt: formatDate('2011111'),
  updatedAt: formatDate('2011111'),
};

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ]),
  updatedAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ])
};

export default Meta;
