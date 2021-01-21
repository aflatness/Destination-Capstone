import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Health = ({ health }) => {
  const committed = <i className="fas fa-hand-sparkles" />;
  const clean = <i className="fas fa-hands-wash" />;
  const check = <CheckCircleIcon />;
  return (
    <div>
      {health.safety.map((rule) => {
        if (/alarm/.test(rule)) {
          return (
            <div className='rule'>
              {check}
              <span className='rule-line'>{rule}</span>
            </div>
          );
        }
        if (/committed/ig.test(rule)) {
          return (
            <div className='rule'>
              <div>{committed}</div>
              {/* <span>{rule}</span> */}
              <span className='rule-line'>Testing</span>
            </div>
          );
        }
        if (/guidelines/g.test(rule)) {
          return (
            <div className='rule'>
              <div>{clean}</div>
              <span className='rule-line'>{rule}</span>
            </div>
          );
        }
        return <div />;
      })}
    </div>
  );
};

export default Health;
