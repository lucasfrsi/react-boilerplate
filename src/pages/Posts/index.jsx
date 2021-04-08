import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsRequestAction, deletePostRequestAction } from '../../store/actions/posts';

import NewPostForm from '../../components/NewPostForm';

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
    <div>
      <h1>POSTS</h1>
      <NewPostForm />
      <hr />
      <h2>Status: <span>{posts.status}</span></h2>
      <hr />
      {posts.postsList.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button type="button" onClick={() => handleDeletePostClick(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
