import * as types from 'constants/actionTypes/PostActionTypes';

import { API_CALL } from 'middleware/API';

export function newPost(post) {
  return {
    [API_CALL]: {
      endpoint: '/posts/new',
      method: 'POST',
      query: { post },
      types: [
        types.NEW_POST_REQUEST,
        types.NEW_POST_SUCCESS,
        types.NEW_POST_ERROR
      ]
    }
  };
}
