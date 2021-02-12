import React from 'react';
import './modal.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { CustomButton } from '../index';
import { hideModal } from '../../redux/actions';

export const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal-container active">
      <div role="presentation" className="modal-backdrop" onClick={() => dispatch(hideModal())} />
      <div className="modal">
        <div className="close-button-container">
          <CustomButton
            className="close-btn"
            onClick={() => dispatch(hideModal())}
            title="Close"
          >
            &times;
          </CustomButton>
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  children: PropTypes.node,
};

Modal.propTypes = {
  children: PropTypes.node,
};
