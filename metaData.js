const MetaData = ({ author, createdAt, updatedAt }) => (
  DOM.div({},
    React.createElement( 'p', {}, `Автор: ${ author }` ),
    React.createElement( 'p', {}, `Создано: ${ createdAt }` ),
    React.createElement( 'p', {}, `Изменено: ${ updatedAt }` )
  )
);

MetaData.defaultProps = {
  author: 'Anonymous',
  createdAt: moment().subtract(8, 'days').subtract(4, 'hours').subtract(14, 'minutes').subtract(49, 'seconds').format('MMMM Do YYYY, h:mm:ss a'),
  updatedAt: moment().format('MMMM Do YYYY, h:mm:ss a')
};

MetaData.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ]),
  updatedAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ])
};
