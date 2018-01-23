import { assign, cloneDeep } from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';
import * as type from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case type.LIKE_POST_SUCCESS: {
      if (state.entry && state.entry.id == action.response.id) {
        const item = cloneDeep(state.entry);
        item.likesCounter = action.response.likesCounter;
        return assign({}, state, { entry: action.response });
      } else {
        return state;
      }
    }
    case types.EDIT_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.EDIT_POST_ERROR:
      return assign({}, state, { error: true });
    case types.EDIT_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    default:
      return state;
  }
}
