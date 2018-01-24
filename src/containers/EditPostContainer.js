import { connect } from 'react-redux';
import { get } from 'lodash';

import EditPost from 'components/views/editPost';

const stateToProps = (state) => ({
  initialValues: {
    id: get(state, 'post.entry.id'),
    txt: get(state, 'post.entry.txt') || 'Будущее, с какого-то момента, \
будет в некоторой степени отличаться от настоящего. Есть много \
исторических анекдотов и поучительных историй, доказывающих эту теорию. \
Вот и все — теперь вы экономист.',
    author: get(state, 'post.entry.meta.author') || 'Anonymous',
    updatedAt: get(state, 'post.entry.meta.updatedAt') || '20110421',
  },
  enableReinitialize: true,
});

export default connect(stateToProps)(EditPost);
