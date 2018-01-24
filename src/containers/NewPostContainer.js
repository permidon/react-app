import { connect } from 'react-redux';

import NewPost from 'components/views/newPost';

const stateToProps = () => ({
  initialValues: {
    txt: 'Расскажите нам что-нибудь',
    author: 'Anonymous',
  },
  enableReinitialize: true,
});

export default connect(stateToProps)(NewPost);
