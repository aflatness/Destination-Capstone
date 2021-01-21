import React from 'react';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

const Rules = ({ rules }) => {
  const smoke = <SmokeFreeIcon />;
  const check = <ScheduleIcon />;
  const music = <VolumeOffIcon />;
  const pets = <img src='https://img.icons8.com/ios-glyphs/30/000000/pet-commands-dismiss.png' alt='' />;
  const noParty = <img src='https://img.icons8.com/ios-glyphs/30/000000/no-alcohol.png' alt='' />;
  const party = <img src='https://img.icons8.com/ios-glyphs/30/000000/champagne.png' alt='' />;
  const child = <RemoveShoppingCartIcon />;
  const jeff = <PersonAddDisabledIcon />;

  const template = (icon, rule) => (
    <div className='rule'>
      {icon}
      {rule}
    </div>
  );

  return (
    <div>
      {rules.map((rule) => {
        if (/smoking/.test(rule)) {
          return template(smoke, rule);
        }
        if (/check/ig.test(rule)) {
          return template(check, rule);
        }
        if (/pets/ig.test(rule)) {
          return template(pets, rule);
        }
        if (/music/.test(rule)) {
          return template(music, rule);
        }
        if (/children/.test(rule)) {
          return template(child, rule);
        }
        if (/(no\spart)|(event)/ig.test(rule)) {
          return template(noParty, rule);
        }
        if (/parties\sonly/ig.test(rule)) {
          return template(party, rule);
        }
        if (/jeff/ig.test(rule)) {
          return template(jeff, rule);
        }
        return <div />;
      })}
    </div>
  );
};

export default Rules;
