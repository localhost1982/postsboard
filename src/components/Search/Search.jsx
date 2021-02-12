import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPosts } from '../../redux/actions';

import './search.css';

export const Search = () => {
  const searchString = useSelector((state) => state.posts.searchString);
  const dispatch = useDispatch();

  const getPosts = (event) => {
    dispatch(searchPosts(event.target.value));
  };

  return (
    <div className="search-field-container">
      <input
        type="text"
        value={searchString}
        onChange={getPosts}
        className="search-string-input"
        placeholder="Search for..."
      />
    </div>
  );
};
