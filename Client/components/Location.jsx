import React from 'react';

const Location = ({ location }) => {
  const handleClick = () => {

  };
  const {
    city, state, country, desc,
  } = location;

  return !location.city
    ? <div />
    : (
      <div>
        <h3>Location</h3>
        { /* TODO: Figure out google maps API */ }
        <div className='loc-title'>
          <h4>
            {city}
            ,
            {state}
            ,
            {country}
          </h4>
        </div>
        <div>
          {desc.split(' ').slice(0, 40).join(' ')}
        </div>
      </div>
    );
};
Location.propTypes = {
  location: PropTypes.objectOf.isRequired,
};

export default Location;
