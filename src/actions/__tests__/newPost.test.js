import { newPost } from 'actions/newPost';
import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

describe('newPost action', () => {
  it('should return correct action', () => {
    const post = 'new post';
    const expectedAction = {
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
    expect(newPost(post)).toEqual(expectedAction);
  });
});
