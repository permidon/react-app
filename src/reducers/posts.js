import { assign, cloneDeep } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';
import * as type from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case type.LIKE_POST_SUCCESS: {
      const items = cloneDeep(state.entries);
      const item = items[action.response.id - 1];
      if (item) {
        item.likesCounter = action.response.likesCounter;
        return assign({}, state, { entries: items });
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
