import React from 'react';
import './selected-post.css';
import { useSelector } from 'react-redux';

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
