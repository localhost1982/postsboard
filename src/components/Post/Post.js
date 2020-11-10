import React from 'react';
import './post.css';
import { CustomButton } from "../CustomButton/CustomButton";

export const Post = ({onToggleFavorite, onShowPost, post: {id, title, body, isFavorite}}) => (
  <div className='post'>
    <div className='post-header'>
      <CustomButton
        className='view-btn'
        title='View post'
        callbackFunction={ () => onShowPost(id) }
      >
        { '\uD83D\uDD0D' }
      </CustomButton>
      <div className='h1-small'>{ title }</div>
      <CustomButton
        className='fav-btn'
        title={ isFavorite ? 'Remove from favorites' : 'Add to favorites' }
        callbackFunction={ (e) => onToggleFavorite(e, id) }
      >
        { isFavorite ? '\u2605' : '\u2606' }
      </CustomButton>
    </div>
    <p>{ body }</p>
  </div>
);
