/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Health from './Health.jsx';
import Rules from './Rules.jsx';
import ToKnowModal from './ToKnowModal.jsx';

const ToKnow = ({ toKnow }) => {
  const [showRules, setRules] = useState(false);
  const [showSafety, setSafety] = useState(false);
  const [showCancel, setCancel] = useState(false);

  const { rules, health, cancelPolicy } = toKnow;
  const healthTitle = 'Health & safety';

  const openModal = (e, cb) => {
    e.preventDefault();
    cb(true);
  };

  return !rules ? <div />
    : (
      <div>
        <br />
        <div id='toKnow-title'>Things to know</div>
        <br />
        <div id='toKnow-grid'>
          <div>
            <div className='Know-subtitle'>House rules</div>
            <Rules rules={rules} />
            <a href='#' onClick={(e) => openModal(e, setRules)}>
              Show more
              <ChevronRightIcon />
            </a>
          </div>
          <div>
            <div className='Know-subtitle'>{healthTitle}</div>
            <Health health={health} />
            <a href='#' onClick={(e) => openModal(e, setSafety)}>
              Show more
              <ChevronRightIcon />
            </a>
          </div>
          <div>
            <div className='Know-subtitle'>Cancellation policy</div>
            {cancelPolicy.map((line) => <div className='rule'>{line}</div>)}
            <a href='#' onClick={(e) => openModal(e, setCancel)}>
              More details
              <ChevronRightIcon />
            </a>
          </div>
        </div>
        <br />
        <hr />
        <ToKnowModal whatToKnow={rules} show={showRules} close={() => setRules(false)} />
        <ToKnowModal whatToKnow={health} show={showSafety} close={() => setSafety(false)} />
        <ToKnowModal whatToKnow={cancelPolicy} show={showCancel} close={() => setCancel(false)} />
      </div>
    );
};

export default ToKnow;
