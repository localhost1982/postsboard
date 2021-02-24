import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { CustomButton } from 'components';
import { generateUUID } from 'helpers';
import { showModal, toggleFavorites } from 'store/actions';

import './post.css';

const getHighlitedText = (text, textToHighlite) => {
  if (textToHighlite.length < 3) {
    return text;
  }
  const parts = text
    .replace(/(?:\r\n|\r|\n)/g, ' ')
    .split(new RegExp(`(${textToHighlite})`, 'gi'));
  return (
    <span>
      {
        parts.map((part) => (
          <span
            key={generateUUID()}
            className={part.toLowerCase() === textToHighlite.toLowerCase() ? 'highlited' : ''}
          >
            {part}
          </span>
        ))
      }
    </span>
  );
};

export const Post = ({
  post: {
    id, title, body, isFavorite,
  },
}) => {
  const dispatch = useDispatch();
  const textToHighlite = useSelector((state) => state.posts.searchString);

  return (
    <div className="post">
      <div className="post-header">
        <CustomButton
          className="view-btn"
          title="View post"
          onClick={() => dispatch(showModal({
            id, title, body, isFavorite,
          }))}
        >
          {'\uD83D\uDD0D'}
        </CustomButton>
        <div className="h1-small">
          {getHighlitedText(title, textToHighlite)}
        </div>
        <CustomButton
          className="fav-btn"
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={() => dispatch(toggleFavorites({
            id, title, body, isFavorite,
          }))}
        >
          {isFavorite ? '\u2605' : '\u2606'}
        </CustomButton>
      </div>
      <p>
        {getHighlitedText(body, textToHighlite)}
      </p>
    </div>
  );
};

Post.defaultProps = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    isFavorite: PropTypes.bool || undefined,
  }),
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    isFavorite: PropTypes.bool || undefined,
  }),
};
