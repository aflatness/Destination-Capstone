/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/**
 * @test-environment jsdom
 */
import 'jsdom-global/register';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../Client/components/app.jsx';

const app = require('../server.js');

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have a state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state()).toBeTruthy();
  });
});
