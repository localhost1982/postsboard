import React from 'react';
import './custom-button.css';

export const CustomButton = ({callbackFunction, className, children, title}) => (
  <button className={ className } onClick={ callbackFunction } title={ title }>
    { children }
  </button>
);
