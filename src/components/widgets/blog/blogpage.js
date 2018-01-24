import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import BlogList from 'components/widgets/blog/bloglist';
import PieChartContainer from 'containers/PieChartContainer';
import SearchContainer from 'containers/SearchContainer';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return DOM.div(
      {className: 'ui grid'},
      React.createElement(
        BlogList,
        { posts: this.props.posts }
      ),
      DOM.div(
        {className: 'five wide column'},
        React.createElement(SearchContainer),
        React.createElement(PieChartContainer)
      )
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.array
};

export default BlogPage;
