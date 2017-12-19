import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import { map } from 'lodash';

import BlogList from 'components/widgets/blog/bloglist';
import PieChart from 'components/widgets/blog/piechart';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pieColumns = map(
      this.props.posts, post => [post.title, post.likesCounter]
    );

    return DOM.div(
      {className: 'ui grid'},
      React.createElement(
        BlogList,
        { posts: this.props.posts }
      ),
      DOM.div(
        {className: 'five wide column'},
        React.createElement(
          PieChart,
          { columns: pieColumns }
        )
        // add search field here
      )
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.array
};

export default BlogPage;
