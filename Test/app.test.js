/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/**
 * @test-environment jsdom
 */
import 'jsdom-global/register';
import React from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
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
  it('should only show a preview of the location', (done) => {
    const locComp = shallow(<Location location={locations} />);
    expect(locComp.find('#desc-prev').text().length).toBeLessThan(locations.desc.length);
    done();
  });

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
  const hostComp = shallow(<HostInfo host={hosts} />);
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);
  const e = {
    preventDefault: () => {},
    stopPropagation: () => {},
  };

  it('should only show only a preview of the host description', (done) => {
    expect(hostComp.find('#host-desc').text().length).toBeLessThan(hosts.desc.length);
    done();
  });

  it('should show the full host description when read more is clicked', (done) => {
    hostComp.find('a').props().onClick(e);
    expect(hostComp.find('#host-desc').text()).toBe(hosts.desc);
    done();
  });

  describe('Contact host modal', () => {
    it('should have a Modal ready to render onto the page', (done) => {
      expect(hostComp.find(Modal).length).toBe(1);
      done();
    });

    it('should not show the modal if contact host hasn\'t been clicked', (done) => {
      expect(hostComp.find(Modal).prop('show')).toBe(false);
      done();
    });

    it('should show the modal once contact host is clicked', (done) => {
      hostComp.find('button').simulate('click');
      expect(hostComp.find(Modal).prop('show')).toBe(true);
      done();
    });

    it('should close the modal when close is clicked', (done) => {
      expect(hostComp.find(Modal).prop('show')).toBe(true);
      hostComp.find(Button).last().simulate('click');
      expect(hostComp.find(Modal).prop('show')).toBe(false);
      done();
    });

    it('should not close the modal when submit is clicked and forms aren\'t validated', (done) => {
      e.currentTarget = {
        checkValidity: () => false,
      };
      hostComp.find('button').simulate('click');
      expect(hostComp.find(Modal).prop('show')).toBe(true);
      hostComp.find(Form).props().onSubmit(e);
      expect(hostComp.find(Modal).prop('show')).toBe(true);
      done();
    });

    it('should close the modal when submit is clicked and forms are correct', async (done) => {
      e.currentTarget = {
        checkValidity: () => true,
      };
      axios.put.mockResolvedValue('');
      hostComp.find(Form).props().onSubmit(e);
      await new Promise(setImmediate);
      expect(hostComp.find(Modal).prop('show')).toBe(false);
      done();
    });
  });
});
