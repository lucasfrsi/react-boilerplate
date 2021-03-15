import {
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from '../actions/types';

const initialState = {
  postsList: [],
  status: '',
};

const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS_SUCCESS:
      return {
        postsList: payload.posts,
        status: payload.success,
      };
    case CREATE_POST_SUCCESS:
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        status: payload.success,
      };
    case GET_POSTS_ERROR:
    case CREATE_POST_ERROR:
    case DELETE_POST_ERROR:
      return {
        ...state,
        status: payload.error,
      };
    default:
      return state;
  }
};

export default postsReducer;
