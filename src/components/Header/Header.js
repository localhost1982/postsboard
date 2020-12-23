import React from 'react';
import './header.css';

export const Header = ({children}) => (
  <header>
    <div className='header'>
      { children }
    </div>
  </header>
);
