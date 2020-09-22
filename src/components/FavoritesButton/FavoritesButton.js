import React from 'react';
import './favorite-button.css'

export const FavoritesButton = ({ onFavoriteClick, selected }) => (
  <button className='fav-btn' onClick={ onFavoriteClick }>
    { selected ? '\u2605' : '\u2606' }
  </button>
);
