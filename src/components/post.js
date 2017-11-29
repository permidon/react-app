import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import BlogItem from 'components/widgets/blog/blogitem';

import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
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

  render() {
    return DOM.div(
      {},
      React.createElement(
        BlogItem,
        { post: this.state.post }
      )
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
