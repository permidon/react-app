const BlogItem = ( props ) => (
  DOM.div(
    {style: { background: 'lightgreen'} },
    React.createElement( Image, {src: props.src} ),
    React.createElement( TextBox, {str: props.str} ),
    React.createElement( Like, props.metadata ),
    React.createElement( MetaData, props.metadata )
   )
);

BlogItem.propTypes = {
  src: PropTypes.string,
  str: PropTypes.string,
  metadata: PropTypes.object,
}

BlogItem.defaultProps = {
  src: Image.src,
  str: TextBox.str,
  metadata: MetaData.metadata
}
