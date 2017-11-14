const BlogList = ({posts, addLike}) => (
  DOM.ul({},
    _.map(
      posts, (post) => (
        React.createElement('li', { key: post.id }, React.createElement( BlogItem, {id: post.id, image: post.image, txt: post.txt, meta: post.meta, addLike} ))
      )
    )
  )
);
