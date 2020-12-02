import React from 'react';
import './modal.css';
import { CustomButton } from "../CustomButton/CustomButton";

export const Modal = ({ children, onClose, closeOnBackdropClick }) => (
  <div className='modal-container active'>
    <div className="modal-backdrop" onClick={ closeOnBackdropClick ? (e) => onClose(e) : null }>
    </div>
    <div className='modal'>
      <div className="close-button-container">
        <CustomButton
          className='close-btn'
          onClick={ (e) => onClose(e) }
          title='Close'>
          &times;
        </CustomButton>
      </div>
      { children }
    </div>
  </div>
);
