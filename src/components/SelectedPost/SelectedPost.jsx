import React from 'react';
import { useSelector } from 'react-redux';

import './selected-post.css';

export const SelectedPost = () => {
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  return (
    <div className="selected-post">
      {
        selectedPost
        && (
          <>
            <h1>{selectedPost.title}</h1>
            <p>{selectedPost.body}</p>
          </>
        )
      }
    </div>
  );
};
