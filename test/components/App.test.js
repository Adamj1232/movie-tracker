import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../../app/components/app.js';
import expect from 'expect';

describe('App component',()=>{
  const wrapper = shallow(<App/>)


  it('should render the expected elements',()=>{
    expect(wrapper.find('Route').length).toBe(4);
    expect(wrapper.find('NavBarContainer').length).toBe(1);
  })

})
