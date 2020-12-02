import React from 'react';
import './custom-button.css';

export const CustomButton = ({ onClick, className, children, title }) => (
  <button className={ className } onClick={ onClick } title={ title }>
    { children }
  </button>
);
