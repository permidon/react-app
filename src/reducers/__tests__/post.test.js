import post from '../post';
import * as types from 'constants/actionTypes/PostActionTypes';
import * as type from 'constants/actionTypes/LikeActionTypes';

describe('Post reducer', () => {
  it('should return init state', () => {
    const initialState = {
      isFetching: false,
      error: false,
      entry: null
    };
    expect(post(undefined, {})).toEqual(initialState);
  });

  describe('Fetch post', () => {
    it('should request fetch post', () => {
      const result = post([], {
        type: types.FETCH_POST_REQUEST
      });
      expect(result.isFetching).toEqual(true);
    });

    it('should error fetch post', () => {
      const result = post([], {
        type: types.FETCH_POST_ERROR
      });
      expect(result.error).toEqual(true);
    });

    it('should succeed fetch post', () => {
      const result = post([], {
        type: types.FETCH_POST_SUCCESS,
        response: []
      });
      expect(result).toEqual({
        isFetching: false,
        error: false,
        entry: []
      });
    });
  });

  describe('Edit post', () => {
    const state = {
      isFetching: false,
      error: false,
      entry: []
    };

    it('should request edit post', () => {
      const result = post(state, {
        type: types.EDIT_POST_REQUEST
      });
      state.isFetching = true;
      expect(result).toEqual(state);
    });

    it('should error update post', () => {
      const result = post(state, {
        type: types.EDIT_POST_ERROR
      });
      state.error = true;
      expect(result).toEqual(state);
    });

    it('should succeed update post', () => {
      const result = post(state, {
        type: types.EDIT_POST_SUCCESS,
        response: ['edited']
      });
      state.entry = ['edited'];
      expect(result).toEqual(state);
    });
  });

  describe('Like post', () => {
    const state = {
      isFetching: false,
      error: false,
      entry: []
    };

    it('should succeed add like', () => {
      const result = post(state, {
        type: type.LIKE_POST_SUCCESS,
        response: ['+1']
      });
      state.entry = ['+1'];
      expect(result).toEqual(state);
    });
  });

  describe('Create post', () => {
    const state = {
      isFetching: false,
      error: false,
      entry: null
    };

    it('should succeed create post', () => {
      const result = post(state, {
        type: types.NEW_POST_SUCCESS,
        response: ['created']
      });
      state.entry = ['created'];
      expect(result).toEqual(state);
    });
  });
});
