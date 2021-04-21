import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPostRequestAction } from '../../store/actions/posts';

import * as styles from './style';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const createPostRequest = (t, b) => dispatch(createPostRequestAction(t, b));

  const handleSubmit = (event) => {
    event.preventDefault();
    createPostRequest(title, body);
    setTitle('');
    setBody('');
  };

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleBodyChange = (event) => setBody(event.target.value);

  return (
    <div css={styles.newpostform}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" name="title" value={title} onChange={handleTitleChange} required />
        </label>
        <label htmlFor="body">
          Body
          <textarea rows="5" type="text" name="body" value={body} onChange={handleBodyChange} required />
        </label>
        <button type="submit">Submit Post!</button>
      </form>
    </div>
  );
};

export default NewPostForm;
