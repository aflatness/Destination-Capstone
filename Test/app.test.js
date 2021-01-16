/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../Client/components/app.jsx';
import { hosts, locations, toKnow } from '../Database/seed.js';

configure({ adapter: new Adapter() });

jest.mock('axios');

const getData = () => (
  Promise.all([
    axios.get.mockImplementation(() => Promise.resolve(locations)),
    axios.get.mockImplementation(() => Promise.resolve(hosts)),
    axios.get.mockImplementation(() => Promise.resolve(toKnow)),
  ])
);

describe('App', () => {
  it('should render', (done) => {
    const wrapper = shallow(<App getData={getData} />);
    expect(wrapper.exists()).toBeTruthy();
    done();
  });

  it('should have a state', (done) => {
    const wrapper = shallow(<App getData={getData} />);
    expect(wrapper.state()).toBeTruthy();
    expect(wrapper.state().location).toMatchObject({});
    done();
  });
});
