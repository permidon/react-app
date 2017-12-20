import { connect } from 'react-redux';
import Like from 'components/widgets/blog/elements/like';
import addLike from 'actions/like';

const stateToProps = (state, ownProps) => ({
  likesCounter: ownProps.likesCounter,
  id: ownProps.id
});

const mapActionsToProps = (dispatch) => ({
  addLike: (id) => {
    dispatch(addLike(id));
  }
});

export default connect(stateToProps, mapActionsToProps)(Like);
