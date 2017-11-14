const Meta = ({ author, createdAt, updatedAt }) => (
  DOM.div({style: { display: 'inline-block' }},
    React.createElement( 'p', {style: { fontSize: '14px' }}, `Написал: ${ author } ${ createdAt } (Изменено: ${ updatedAt })` )
  )
);

Meta.defaultProps = {
  author: 'Anonymous',
  createdAt: moment().subtract(8, 'days').subtract(4, 'hours').subtract(14, 'minutes').subtract(49, 'seconds').format('MM/DD/YYYY, h:mm a'),
  updatedAt: moment().format('MM/DD/YYYY, h:mm a')
};

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ]),
  updatedAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ])
};
