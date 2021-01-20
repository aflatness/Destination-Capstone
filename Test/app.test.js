/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/**
 * @test-environment jsdom
 */
import 'jsdom-global/register';
import React from 'react';
import axios from 'axios';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../Client/components/app.jsx';
import Location from '../Client/components/Location.jsx';
import HostInfo from '../Client/components/HostInfo.jsx';
import { hosts, toKnow, locations } from './fakeData.js';

configure({ adapter: new Adapter() });

jest.mock('axios');

const getData = () => Promise.all([
  (axios.get.mockResolvedValue({ data: locations }))(),
  (axios.get.mockResolvedValue({ data: hosts }))(),
  (axios.get.mockResolvedValue({ data: toKnow }))(),
]);

let wrapper;

describe('Basic app functionality', () => {
  it('should render', (done) => {
    wrapper = shallow(<App getData={getData} />);
    expect(wrapper.exists()).toBeTruthy();
    done();
  });

  it('should have an inital state', (done) => {
    wrapper = shallow(<App getData={getData} />);
    expect(wrapper.state()).toEqual(expect.any(Object));

    expect(wrapper.state().location).toMatchObject({});
    expect(wrapper.state().HostInfo).toMatchObject({});
    expect(wrapper.state().ToKnow).toMatchObject({});
    done();
  });

  it('should have child components ready to be rendered', (done) => {
    wrapper = shallow(<App getData={getData} />);
    expect(wrapper.find('Location')).toHaveLength(1);
    expect(wrapper.find('HostInfo')).toHaveLength(1);
    // expect(wrapper.find('ToKnow')).toHaveLength(1);
    done();
  });

  describe('App mounting functionality', () => {
    let instance;
    let location;
    let hostInfo;
    let ToKnow;

    beforeEach(async (done) => {
      wrapper = shallow(<App getData={getData} />);
      instance = wrapper.instance();

      jest.spyOn(instance, 'componentDidMount');
      instance.componentDidMount();

      await new Promise(setImmediate);
      done();
    });

    it('should call componentDidMount and update the state', (done) => {
      expect(instance.componentDidMount).toHaveBeenCalledTimes(1);
      location = instance.state.location;
      hostInfo = instance.state.HostInfo;
      ToKnow = instance.state.ToKnow;

      expect(location).toMatchObject(locations);
      expect(hostInfo).toMatchObject(hosts);
      expect(ToKnow).toMatchObject(toKnow);
      done();
    });

    it('should pass down updated location to Location component', (done) => {
      expect(wrapper.find('Location').props()).not.toBeNull();
      expect(wrapper.find('Location').props().location).toMatchObject(locations);
      done();
    });

    it('should pass down updated hostInfo to HostInfo component', (done) => {
      expect(wrapper.find('HostInfo').props()).not.toBeNull();
      expect(wrapper.find('HostInfo').props().host).toMatchObject(hosts);
      done();
    });

    // it('should pass down updated toKnow to ToKnow component', (done) => {
    //   expect(wrapper.find('ToKnow').props()).not.toBeNull();
    //   expect(wrapper.find('ToKnow').props().toKnow).toMatchObject(toKnow);
    //   done();
    // });
  });
});

describe('Location component functionality', () => {
  const setModule = jest.fn();
  const useState = jest.spyOn(React, 'useState');
  useState.mockImplementation((isShown) => [isShown, setModule]);

  it('should show the overLay when more about location is clicked', (done) => {
    const locComp = shallow(<Location location={locations} />);
    expect(locComp.find('#loc-overlay')).toHaveLength(0);
    locComp.find('button').simulate('click');
    expect(locComp.find('#loc-overlay')).toHaveLength(1);
    done();
  });

  it('should show a detailed description about the city and areas when more about is clicked', (done) => {
    const locComp = shallow(<Location location={locations} />);
    locComp.find('button').simulate('click');
    expect(locComp.find('#loc-desc').children().length).toBeGreaterThan(1);
    done();
  });
});

describe('HostInfo component functionality', () => {
  const hostComp = mount(<HostInfo host={hosts} />);

  it('should not show the modal if contact host', (done) => {
    console.log(hostComp.find('.modal-header').length);
    expect(hostComp.find('.modal-header').length).toBe(0);
    done();
  });

  // TODO: write more tests tomorrow
});
