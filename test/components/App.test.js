import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../../app/components/app.js';
import expect from 'expect';

describe('App component',()=>{
  const wrapper = shallow(<App/>)

  it('should render the expected elements',()=>{
    expect(wrapper.find('Route').length).toBe(4);
    expect(wrapper.find('Connect(NavBar)').length).toBe(1);
    expect(wrapper.find('Switch').length).toBe(1);
    expect(wrapper.find('section').length).toBe(1);
  })
})
