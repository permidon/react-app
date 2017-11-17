const BlogItem = ({id, title, image, txt, meta, addLike}) => (
  DOM.div(
    {id: id, style: { marginBottom: '15px', background: 'lightgreen'} },
    DOM.div({style: { minHeight: '110px'}}, React.createElement( Image, image ), React.createElement( TextBox, {}, txt )),
    DOM.br({}),
    React.createElement( Meta, meta ),
    React.createElement( Like, {id: id, likesCounter: meta.likesCounter, addLike: addLike } )
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
