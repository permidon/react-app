import * as types from 'constants/actionTypes/PostActionTypes';

import { API_CALL } from 'middleware/API';
import { postsPath } from 'helpers/routes';

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: postsPath(id),
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    }
  };
}
