import * as types from 'constants/actionTypes/PostActionTypes';

import { API_CALL } from 'middleware/API';

export function editPost(post) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${post.id}/edit`,
      method: 'PUT',
      query: { post },
      types: [
        types.EDIT_POST_REQUEST,
        types.EDIT_POST_SUCCESS,
        types.EDIT_POST_ERROR
      ]
    }
  };
}
