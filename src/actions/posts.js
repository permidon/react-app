import * as types from 'constants/actionTypes/PostsActionTypes';

import { API_CALL } from 'middleware/API';

export function fetchPosts(name = '') {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: { name },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
