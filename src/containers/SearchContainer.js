import { connect } from 'react-redux';
import Search from 'components/widgets/blog/search';
import { fetchPosts } from 'actions/posts';

const actionsToProps = (dispatch) => ({
  search: (name) => {
    dispatch(fetchPosts(name));
  }
});

export default connect(null, actionsToProps)(Search);
