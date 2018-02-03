import { editPost } from 'actions/editPost';
import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

describe('editPost action', () => {
  it('should return correct action', () => {
    const post = {id: 1};
    const expectedAction = {
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
    expect(editPost(post)).toEqual(expectedAction);
  });
});
