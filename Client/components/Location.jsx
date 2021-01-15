import React, { useState } from 'react';
import initMap from '../gMap.js';

const Location = ({ location }) => {
  const [isShown, setModule] = useState(false);

  const showModule = () => {
    setModule(true);
  };

  const {
    city, state, country, desc,
  } = location;

  const query = `${city}, ${state}, ${country}`;

  if (city) {
    initMap(query);
  }

  return (
    <div>
      <hr />
      <h2 className='loc-title'>Location</h2>
      <div id='wrapper'>
        <div id='map' />
        <div id='loc-notice'>Exact location provided after booking</div>
        <div id='sel-transit'>
          <label htmlFor='transit'>
            <input id='transit' type='checkbox' value='Transit' />
            Public Transit
          </label>
        </div>
      </div>
      {city && (
      <div>
        <div className='loc-title'>
          <h4>{`${city}, ${state}, ${country}`}</h4>
        </div>
        <div>
          {desc.split(' ').slice(0, 40).join(' ')}
          ...
        </div>
      </div>
      )}
      <br />
      <button type='button' onClick={showModule}>More about the location</button>
      <hr />
      {/* TODO: Create Modal for when button is clicked to show all of map and more desc */}
      {isShown}
    </div>
  );
};

export default Location;
