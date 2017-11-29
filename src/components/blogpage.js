import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import _ from 'lodash';

import request from 'superagent';

import BlogList from 'components/widgets/blog/bloglist';
import PieChart from 'components/widgets/blog/piechart';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.addLike = this.addLike.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }
    
  addLike(id) {
    this.setState((prevState) => {
      const post = _.find(prevState.posts, ['id', id]);
      post.meta.likesCounter += 1;
      return { posts: prevState.posts };
    });
  }

  render() {
    const pieColumns = _.map(
      this.state.posts, post => [post.title, post.meta.likesCounter]
    );
    
    return DOM.div(
      {},
      React.createElement(
        BlogList,
        { posts: this.state.posts, addLike: this.addLike }
      ),
      React.createElement(
        PieChart,
        { columns: pieColumns }
      )
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.array
};

export default BlogPage;

