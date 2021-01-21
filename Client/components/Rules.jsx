import React from 'react';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const Rules = ({ rules }) => {
  const smoke = <SmokeFreeIcon />;
  const check = <ScheduleIcon />;
  const music = <VolumeOffIcon />;
  const pets = <img src='https://img.icons8.com/ios-glyphs/30/000000/pet-commands-dismiss.png' alt='' />;
  const noParty = <img src='https://img.icons8.com/ios-glyphs/30/000000/no-alcohol.png' alt='' />;
  const party = <img src='https://img.icons8.com/ios-glyphs/30/000000/champagne.png' alt='' />;
  const child = <RemoveShoppingCartIcon />;

  return (
    <div>
      {rules.house.map((rule) => {
        if (/smoking/.test(rule)) {
          return (
            <div className='rule'>
              {smoke}
              {rule}
            </div>
          );
        }
        if (/check/ig.test(rule)) {
          return (
            <div className='rule'>
              {check}
              {rule}
            </div>
          );
        }
        if (/pets/ig.test(rule)) {
          return (
            <div className='rule'>
              {pets}
              {rule}
            </div>
          );
        }
        if (/music/.test(rule)) {
          return (
            <div className='rule'>
              {music}
              {rule}
            </div>
          );
        }
        if (/children/.test(rule)) {
          return (
            <div className='rule'>
              {child}
              {rule}
            </div>
          );
        }
        if (/no\spart/ig.test(rule)) {
          return (
            <div className='rule'>
              {noParty}
              {rule}
            </div>
          );
        }
        if (/parties\sonly/ig.test(rule)) {
          return (
            <div className='rule'>
              {party}
              {rule}
            </div>
          );
        }
        return <div />;
      })}
    </div>
  );
};

export default Rules;
