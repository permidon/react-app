import { assign, cloneDeep } from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';
import * as type from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

function addLike(entry) {
  if (entry) {
    entry.likesCounter += 1;
    return entry;
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case type.ADD_LIKE: {
      const entry = cloneDeep(state.entry);
      return assign({}, initialState, { entry: addLike(entry) });
    }
    default:
      return state;
  }
}
