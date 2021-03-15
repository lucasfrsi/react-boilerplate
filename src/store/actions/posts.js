import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from './types';

// REQUESTS
// Sagas always listen to request actions
export const getPostsRequestAction = () => ({
  type: GET_POSTS_REQUEST,
});

export const createPostRequestAction = (title, body) => ({
  type: CREATE_POST_REQUEST,
  payload: {
    title,
    body,
  },
});

export const deletePostRequestAction = (postId) => ({
  type: DELETE_POST_REQUEST,
  payload: {
    postId,
  },
});

// SUCCESS AND ERROR
// Both success and error actions go directly to reducers
export const getPostsSuccessAction = (posts, success) => ({
  type: GET_POSTS_SUCCESS,
  payload: {
    posts,
    success,
  },
});

export const getPostsErrorAction = (error) => ({
  type: GET_POSTS_ERROR,
  payload: {
    error,
  },
});

export const createPostSuccessAction = (success) => ({
  type: CREATE_POST_SUCCESS,
  payload: {
    success,
  },
});

export const createPostErrorAction = (error) => ({
  type: CREATE_POST_ERROR,
  payload: {
    error,
  },
});

export const deletePostSuccessAction = (success) => ({
  type: DELETE_POST_SUCCESS,
  payload: {
    success,
  },
});

export const deletePostErrorAction = (error) => ({
  type: DELETE_POST_ERROR,
  payload: {
    error,
  },
});
