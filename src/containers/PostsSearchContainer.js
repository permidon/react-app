import { connect } from 'react-redux';
import PostsSearch from 'components/elements/PostsSearch';
import { fetchPosts } from 'actions/posts';

const actionsToProps = (dispatch) => (
  {
    search: (event) => {
      dispatch(fetchPosts(event.currentTarget.value));
    }
  }
);

export default connect(null, actionsToProps)(PostsSearch);
