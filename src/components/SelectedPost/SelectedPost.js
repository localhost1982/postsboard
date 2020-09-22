import React from 'react';
import './selected-post.css'

export const SelectedPost = ({ post }) => (
  <div className='selected-post'>
    {
      post ?
        <>
          <h1>{ post.title }</h1>
          <p>{ post.body }</p>
        </>
      : ''
    }
  </div>
);
