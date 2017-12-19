import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/PostsActionTypes';
import * as type from 'constants/actionTypes/LikeActionTypes';

import update from 'immutability-helper';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

function addLike(entries, id) {
  if (entries) {
    const postId = id - 1;
    let updatedPosts;

    if (postId > -1) {
      const entry = entries[postId];
      const updatedPost = update(entry, {
        likesCounter: {$set: (entry.likesCounter + 1)}
      });

      updatedPosts = {
        entries: entries
          .slice(0, postId)
          .concat(updatedPost)
          .concat(entries.slice(postId + 1))
      };
    }
    return updatedPosts.entries;
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case type.ADD_LIKE: {
      return assign(
        {},
        initialState,
        { entries: addLike(state.entries, action.id) }
      );
    }
    default:
      return state;
  }
}
