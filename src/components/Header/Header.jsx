import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

export const Header = ({ children }) => (
  <header>
    <div className="header">
      {children}
    </div>
  </header>
);

Header.defaultProps = {
  children: PropTypes.node,
};

Header.propTypes = {
  children: PropTypes.node,
};
