import React from 'react';
import './search.css';

export const Search = ({ value, onChange }) => (
  <header>
    <div className='header'>
      <div className="search-field-container">
        <input type="text" value={ value } onChange={ onChange } className="search-string-input"
               placeholder="Search for..."/>
      </div>
    </div>
  </header>
);
