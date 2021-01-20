import React, { useState, useEffect, useRef } from 'react';
import initMap from '../gMap.js';

const Location = ({ location }) => {
  const [isShown, setModule] = useState(false);
  const maps = useRef('map');

  const {
    city, state, country, desc,
  } = location;

  const query = `${city}, ${state}, ${country}`;

  useEffect(() => {
    (async () => {
      await initMap(query);
    })();
  }, [isShown, location]);

  if (isShown) {
    const pars = desc.split('\n\n').map((par) => par.split(':'));
    return (
      <div id='loc-overlay'>
        <button type='button' onClick={() => setModule(false)}>{'<'}</button>
        <div id='loc-info'>
          <div>
            <h1>Location</h1>
            <div className='loc-title '>
              <h6>{`${city}, ${state}, ${country}`}</h6>
            </div>
            <div>
              <div id='loc-desc'>
                {pars.map((par) => (
                  par.length > 1
                    ? (
                      <div key={par}>
                        <h4>{par[0]}</h4>
                        <p>{par[1]}</p>
                      </div>
                    )
                    : (
                      <div key={par}>
                        <p>{par}</p>
                      </div>
                    )
                ))}
              </div>
            </div>
          </div>
          <div>
            <div id='map' ref={maps} />
            {/* <div id='loc-notice'>Exact location provided after booking</div>
            <div id='sel-transit'>
              <label htmlFor='transit'>
                <input id='transit' type='checkbox' value='Transit' />
                Public Transit
              </label>
            </div> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <hr />
      <h4 className='loc-title'>Location</h4>
      <div id='wrapper'>
        <div id='map' ref={maps} />
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
          <h6>{`${city}, ${state}, ${country}`}</h6>
        </div>
        <div id='desc-prev'>
          {desc.split(' ').slice(0, 40).join(' ')}
          ...
        </div>
      </div>
      )}
      <br />
      <button type='button' onClick={() => setModule(true)}>More about the location</button>
      <hr />
    </div>
  );
};

export default Location;
