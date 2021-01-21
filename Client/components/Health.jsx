import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const Health = ({ health }) => {
  const committed = <i className="fas fa-hand-sparkles" />;
  const clean = <i className="fas fa-hands-wash" />;
  const check = <CheckCircleIcon />;
  const card = <CreditCardIcon />;

  const template = (icon, rule) => (
    <div className='rule'>
      {icon}
      <div className='rule-line'>{rule}</div>
    </div>
  );

  return (
    <div>
      {health.map((rule) => {
        if (/alarm/.test(rule)) {
          return template(check, rule);
        }
        if (/committed/ig.test(rule)) {
          return template(committed, rule);
        }
        if (/guidelines/g.test(rule)) {
          return template(clean, rule);
        }
        if (/security/ig.test(rule)) {
          return template(card, rule);
        }
        return <div />;
      })}
    </div>
  );
};

export default Health;
