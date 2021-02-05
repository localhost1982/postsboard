import React from 'react';
import { CustomButton } from "../CustomButton";

import './post.css';
import { connect } from "react-redux";
import { toggleFavorites, showModal } from "../../redux/actions";

const Post = ({ toggleFavorites, showModal, post: { id, title, body, isFavorite }, textToHighlite }) => (
  <div className='post'>
    <div className='post-header'>
      <CustomButton
        className='view-btn'
        title='View post'
        onClick={ () => showModal({ id, title, body, isFavorite }) }
      >
        { '\uD83D\uDD0D' }
      </CustomButton>
      <div className='h1-small'>
        { getHighlitedText(title, textToHighlite) }
      </div>
      <CustomButton
        className='fav-btn'
        title={ isFavorite ? 'Remove from favorites' : 'Add to favorites' }
        onClick={ () => toggleFavorites({ id }) }
      >
        { isFavorite ? '\u2605' : '\u2606' }
      </CustomButton>
    </div>
    <p>
      { getHighlitedText(body, textToHighlite) }
    </p>
  </div>
);

const getHighlitedText = (text, textToHighlite) => {
  if (textToHighlite.length < 3) {
    return text;
  }
  const parts = text
    .replace(/(?:\r\n|\r|\n)/g, ' ')
    .split(new RegExp(`(${textToHighlite})`, 'gi'));
  return <span>
    {
      parts.map((part, i) =>
        <span key={ Math.floor(Math.random() * Math.floor(new Date().getTime())) }
              className={ part.toLowerCase() === textToHighlite.toLowerCase() ? 'highlited' : '' }>
          { part }
        </span>
      )
    }
  </span>;
}

const mapDispatchToProps = {
  toggleFavorites,
  showModal,
}

const mapStateToProps = state => {
  return {
    textToHighlite: state.posts.searchString,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
