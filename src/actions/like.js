import * as types from 'constants/actionTypes/LikeActionTypes';

import { API_CALL } from 'middleware/API';

export function addLike(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}/like`,
      method: 'POST',
      query: { id },
      types: [
        types.LIKE_POST_REQUEST,
        types.LIKE_POST_SUCCESS,
        types.LIKE_POST_ERROR
      ]
    }
  };
}
