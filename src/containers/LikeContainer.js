import { connect } from 'react-redux';
import Like from 'components/widgets/blog/elements/like';
import { addLike } from 'actions/like';

const stateToProps = (state, ownProps) => ({
  likesCounter: state.posts.entries[ownProps.id - 1].likesCounter
});

const actionsToProps = (dispatch) => ({
  addLike: (id) => dispatch(addLike(id))
});

export default connect(stateToProps, actionsToProps)(Like);
