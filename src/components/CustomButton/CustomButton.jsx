import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.css';

export const CustomButton = ({
                               onClick, className, children, title,
                             }) => (
  <button type="button" className={className} onClick={onClick} title={title}>
    {children}
  </button>
);

CustomButton.defaultProps = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
