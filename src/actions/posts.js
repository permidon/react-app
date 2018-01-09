import * as types from 'constants/actionTypes/PostsActionTypes';

import { API_CALL } from 'middleware/API';
import { rootPath } from 'helpers/routes';

export function fetchPosts(name = '') {
  return {
    [API_CALL]: {
      endpoint: rootPath(),
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
