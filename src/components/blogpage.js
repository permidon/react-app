import React from 'react';
import DOM from 'react-dom-factories';

import _ from 'lodash';
import { posts } from 'constants/static/posts';

import BlogList from 'components/widgets/blog/bloglist';
import PieChart from 'components/widgets/blog/piechart';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    
    const posts = _.assign({}, props.posts);
    
    this.state = { posts };
    this.addLike = this.addLike.bind(this);  
  }
    
  addLike(id) {
    this.setState((prevState) => {
      const post = _.find(prevState.posts, ['id', id]);
      post.meta.likesCounter += 1;
      return { posts: prevState.posts };
    });
  }
    
  render() {
    const pieColumns = _.map(posts, post => [post.title, post.meta.likesCounter]);
    
    return DOM.div({},
      React.createElement(BlogList, { posts: this.state.posts, addLike: this.addLike }),
      React.createElement(PieChart, { columns: pieColumns })
    );
  }
}

export default BlogPage;

