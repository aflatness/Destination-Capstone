import React, { useState, useEffect } from 'react';

const Location = ({ location }) => {
  const [isShown, setModule] = useState(false);

  const showModule = () => {
    setModule(true);
  };

  const {
    city, state, country, desc,
  } = location;

  let loc = {
    lat: 37,
    lng: 0,
  };

  const mapOptions = {
    center: loc,
    zoom: 14,
    mapId: '3946a506a540b218'
  };

  const query = `${city}, ${state}, ${country}`;

  window.initMap = function () {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': 'Austin, Texas'}, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        loc.lat = results[0].geometry.location.lat();
        loc.lng = results[0].geometry.location.lng();

        new google.maps.Map(document.getElementById('map'), mapOptions);
      } else {
        console.log('error');
      }
    });
  };

  return (
    <div>
      <hr />
      <h2 className='loc-title'>Location</h2>
      <div id='map'></div>
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
    </div>
  );
};

export default Location;
