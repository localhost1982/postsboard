import React from 'react';
import { CustomButton } from "../CustomButton";

import './post.css';

export const Post = ({ onToggleFavorite, onShowPost, post: { id, title, body, isFavorite }, highLiteText }) => (
  <div className='post'>
    <div className='post-header'>
      <CustomButton
        className='view-btn'
        title='View post'
        onClick={ () => onShowPost(id) }
      >
        { '\uD83D\uDD0D' }
      </CustomButton>
      <div className='h1-small'>
        { getHighlitedText(title, highLiteText, id) }
      </div>
      <CustomButton
        className='fav-btn'
        title={ isFavorite ? 'Remove from favorites' : 'Add to favorites' }
        onClick={ (e) => onToggleFavorite(e) }
      >
        { isFavorite ? '\u2605' : '\u2606' }
      </CustomButton>
    </div>
    <p>
      { getHighlitedText(body, highLiteText, id) }
    </p>
  </div>
);

const getHighlitedText = (text, textToHighlite, key) => {
  if (textToHighlite.length < 3) {
    return text;
  }
  const parts = text
    .replace(/(?:\r\n|\r|\n)/g, ' ')
    .split(new RegExp(`(${textToHighlite})`, 'gi'));
  return <span>
    {
      parts.map((part, i) =>
        <span key={ key } className={ part.toLowerCase() === textToHighlite.toLowerCase() ? 'highlited' : '' }>
          { part }
        </span>
      )
    }
  </span>;
}
