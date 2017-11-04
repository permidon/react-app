class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: props.likes };

    this.handleClick = bind(this.handleClick, this);
  }

  handleClick(e) {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <div>
        <p>Likes: {this.state.likes}</p>
        <button onClick={this.handleClick}>Like</button>
      </div>
    )
  }
};

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number
};
