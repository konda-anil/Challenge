import React from 'react';
import { ModalProps } from './modal.types';
import './modal.css';

export const Modal = (props: ModalProps) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className='custom-modal-wrapper'>
      <div className='custom-modal-background'></div>
      <div className="custom-modal" id="modal">
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}