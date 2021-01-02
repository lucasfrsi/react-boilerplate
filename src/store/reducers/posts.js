import {
  GET_POSTS_SUCCESS,
  POSTS_ERROR,
} from '../actions/types';

const initialState = {
  postsList: [],
  error: '',
};

const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postsList: payload.posts,
      };
    case POSTS_ERROR:
      // eslint-disable-next-line no-console
      console.log('[POSTS_ERROR REDUCER - MESSAGE COMING FROM SAGA]', payload.error);
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default postsReducer;
