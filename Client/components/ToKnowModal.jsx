import React from 'react';
import { Modal } from 'react-bootstrap';
import Health from './Health.jsx';
import Rules from './Rules.jsx';

const ToKnowModal = ({ whatToKnow, show, close }) => {
  let title = 'House rules';
  let subTitle = 'Additional rules';
  let toShow = <Rules rules={whatToKnow} />;

  if (whatToKnow.safety) {
    title = 'Health & safety';
    subTitle = 'You must also acknowledge';
    toShow = <Health health={whatToKnow} />;
  }
  if (Array.isArray(whatToKnow)) {
    title = 'Cancellation Policy';
    [subTitle] = whatToKnow;
    toShow = '';
  }

  return (
    <Modal
      show={show}
      onHide={close}
      centered
      animation
    >
      <Modal.Title>{title}</Modal.Title>
      <Modal.Body>
        {toShow}
        <div id='modal-subtitle'>
          {subTitle}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ToKnowModal;
