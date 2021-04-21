import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsRequestAction, deletePostRequestAction } from '../../store/actions/posts';

import NewPostForm from '../../components/NewPostForm';

import * as styles from './style';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const onGetPostsRequest = useCallback(() => dispatch(getPostsRequestAction()), [dispatch]);
  const deletePostRequest = useCallback(() => dispatch(deletePostRequestAction()), [dispatch]);

  useEffect(() => {
    onGetPostsRequest();
  }, [onGetPostsRequest]);

  const handleDeletePostClick = (postId) => {
    deletePostRequest(postId);
  };

  return (
    <div css={styles.posts}>
      <h1>POSTS</h1>
      <NewPostForm />
      <hr />
      <h2><b>Status:</b> <span>{posts.status}</span></h2>
      <hr />
      {posts.postsList.map((post) => (
        <div key={post.id} className="post-item">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button type="button" onClick={() => handleDeletePostClick(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
