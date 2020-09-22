import React from 'react';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import './post.css';

export const Post = ({ onToggleFavorite, onShowPost, post: { id, title, body, isFavorite } }) => (
  <div className='post' onClick={ () => onShowPost(id) }>
    <div className='h1-small'>{ title }</div>
    <p>{ body }</p>
    <FavoritesButton
      selected={ isFavorite }
      onFavoriteClick={ (e) => onToggleFavorite(e, id) }
    />
  </div>
);
