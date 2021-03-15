/* eslint-disable no-console */
import {
  takeEvery,
  takeLatest,
  call,
  put,
  fork,
  take,
} from 'redux-saga/effects';

import {
  GET_POSTS_REQUEST,
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
} from '../actions/types';

import {
  getPostsSuccessAction,
  getPostsErrorAction,
  createPostSuccessAction,
  createPostErrorAction,
  deletePostSuccessAction,
  deletePostErrorAction,
} from '../actions/posts';

import * as api from '../../services/api/posts';

// GET POSTS
function* getPosts() {
  try {
    const response = yield call(api.getPosts);
    yield put(getPostsSuccessAction(response.data, 'Success on getting posts.'));
    console.log('[GET POSTS SAGA - API RESPONSE]', response);
  } catch (error) {
    yield put(getPostsErrorAction('An error occurred when trying to get all the posts.'));
    console.log(error);
  }
}

function* watchGetPostsRequest() {
  yield takeEvery(GET_POSTS_REQUEST, getPosts);
}

// CREATE POST
function* createPost(action) {
  const { payload } = action;

  try {
    const response = yield call(api.createPost, {
      title: payload.title,
      body: payload.body,
    });
    yield put(createPostSuccessAction('Success on creating post.'));
    console.log('[CREATE POST SAGA - API RESPONSE]', response);
    // yield call(getPosts);
  } catch (error) {
    yield put(createPostErrorAction('An error occurred when trying to create the post.'));
    console.log(error);
  }
}

function* watchCreatePostRequest() {
  yield takeLatest(CREATE_POST_REQUEST, createPost);
}

// DELETE POST
function* deletePost(postId) {
  try {
    const response = yield call(api.deletePost, postId);
    yield put(deletePostSuccessAction('Success on deleting post.'));
    console.log('[DELETE POST SAGA - API RESPONSE]', response);
    // yield call(getPosts);
  } catch (error) {
    yield put(deletePostErrorAction('An error occurred when trying to delete this post.'));
    console.log(error);
  }
}

function* watchDeletePostRequest() {
  while (true) {
    const action = yield take(DELETE_POST_REQUEST);
    yield call(deletePost, action.payload.postId);
  }
}

// WATCHERS EXPORT
const postsSagas = [
  fork(watchGetPostsRequest),
  fork(watchCreatePostRequest),
  fork(watchDeletePostRequest),
];

export default postsSagas;
