import React from 'react';
import './post.css';
import { CustomButton } from "../CustomButton/CustomButton";

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
      <div className='h1-small' dangerouslySetInnerHTML={ {
        __html: highLiteText
          ? replaceText(title, highLiteText)
          : title
      } }>
      </div>
      <CustomButton
        className='fav-btn'
        title={ isFavorite ? 'Remove from favorites' : 'Add to favorites' }
        onClick={ (e) => onToggleFavorite(e, id) }
      >
        { isFavorite ? '\u2605' : '\u2606' }
      </CustomButton>
    </div>
    <p dangerouslySetInnerHTML={ {
      __html: highLiteText
        ? replaceText(body, highLiteText)
        : body
    } }>
    </p>
  </div>
);

const replaceText = (text, replaceText) => {
  const pattern = new RegExp(`(${ replaceText })`, 'gmi');
  return replaceText.length >= 3
    ? text.replace(/(?:\r\n|\r|\n)/g, ' ').replace(pattern, "<span class='highlited'>$1</span>")
    : text;
};
