/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Moment from 'moment';

const HostInfo = ({ host }) => {
  const [showMore, setShow] = useState(false);

  const {
    name, desc, photo, joinDate, verified, reviews, response,
  } = host;

  return !host.name ? <div />
    : (
      <div>
        <div id='host-bar'>
          <img src={photo} alt='' style={{ display: 'inline-flex' }} />
          <div>
            <h3 id='host-name'>
              {`Hosted by ${name.split(' ')[0]}`}
            </h3>
            <div id='host-join'>
              {`Joined in ${Moment(joinDate).format('MMMM YYYY')}`}
            </div>
          </div>
        </div>
        <br />
        <div id='host-info'>
          <div>
            <ul id='host-data'>
              <li id='reviews'>
                {`${reviews} Reviews`}
              </li>
              <li id='verified'>
                {verified ? 'Identity Verified' : 'Not verified'}
              </li>
            </ul>
            <div id='host-desc'>
              {showMore && desc}
              {!showMore && desc.split(' ').slice(0, 25).join(' ')}
              {!showMore && '...  '}
              {!showMore && <a href='#' onClick={() => setShow(true)}>read more</a>}
            </div>
          </div>
          <div id='host-contact'>
            <div>
              {`Response rate: ${response.rate}%`}
            </div>
            <br />
            <div>
              {`Response time: ${response.time}`}
            </div>
            <br />
            <button type='button'>Contact host</button>
            <ul>
              <li>
                {`To protect your payment, never transfer
                 money or communicate outside of the Airbnb
                 website or app.`}
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
};

export default HostInfo;
