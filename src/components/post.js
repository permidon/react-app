import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import BlogItem from 'components/widgets/blog/blogitem';

import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.addLike = this.addLike.bind(this);
  }

  componentDidMount() {
    this.fetchPost(this.state.params.id);
  }

  fetchPost(id) {
    request.get(
      `http://localhost:3001/posts/${id}`,
      {},
      (err, res) => this.setState({ post: res.body })
    );
  }

  addLike() {
    this.setState((prevState) => {
      const post = prevState.post;
      post.likesCounter += 1;
      return { post: prevState.post };
    });
  }

  render() {
    return DOM.div(
      {},
      React.createElement(
        BlogItem,
        { post: this.state.post, addLike: this.addLike }
      )
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
