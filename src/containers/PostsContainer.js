import { connect } from 'react-redux';

import BlogList from 'components/widgets/blog/bloglist';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(BlogList);
