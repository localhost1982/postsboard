import React from 'react';
import './modal.css';
import { CustomButton } from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { hideModal, showModal } from "../../redux/actions";

const Modal = ({ children, hideModal }) => (
  <div className='modal-container active'>
    <div className="modal-backdrop" onClick={ hideModal }>
    </div>
    <div className='modal'>
      <div className="close-button-container">
        <CustomButton
          className='close-btn'
          onClick={ hideModal }
          title='Close'>
          &times;
        </CustomButton>
      </div>
      { children }
    </div>
  </div>
);

const mapDispatchToProps = {
  showModal,
  hideModal,
}

export default connect(null, mapDispatchToProps)(Modal);
