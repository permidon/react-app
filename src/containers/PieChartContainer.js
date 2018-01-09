import { connect } from 'react-redux';
import { map } from 'lodash';

import PieChart from 'components/widgets/blog/piechart';

const stateToProps = (state) => ({
  columns: map(state.posts.entries, post => [post.title, post.likesCounter])
});

export default connect(stateToProps)(PieChart);
