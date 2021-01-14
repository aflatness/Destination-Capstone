import React, { useState } from 'react';

const Location = ({ location }) => {
  const [isShown, setModule] = useState(false);

  const showModule = () => {
    setModule(true);
  };

  const {
    city, state, country, desc,
  } = location;
  return !location.city
    ? <div />
    : (
      <div>
        <hr />
        <h2 className='loc-title'>Location</h2>
        { /* TODO: Figure out google maps API */ }
        <div className='loc-title'>
          <h4>{`${city}, ${state}, ${country}`}</h4>
        </div>
        <div>
          {desc.split(' ').slice(0, 40).join(' ')}
          ...
        </div>
        <br />
        <button type='button' onClick={showModule}>More about the location</button>
        <hr />
      </div>
    );
};

export default Location;
