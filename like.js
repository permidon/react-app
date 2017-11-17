Like = ({ id, addLike, likesCounter }) => {
  return (
    <div>
      <p><span>Likes: {likesCounter} <button onClick={() => addLike(id)}>
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i></button>
      </span></p>
    </div>
  )
};

Like.defaultProps = {
  likesCounter: 0
};

Like.propTypes = {
  likesCounter: PropTypes.number
};
