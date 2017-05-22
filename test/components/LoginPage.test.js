import React from 'react';
import { mount, shallow } from 'enzyme';
import  {LoginPage} from '../../app/components/LoginPage.js';
import expect from 'expect';

describe.skip('NavBar component',()=>{

  it('should have two input fields',()=>{
    const wrapper = shallow(
      <LoginPage />)


       expect(wrapper.find('.').first().props().children).toEqual('Login')
       expect(wrapper.find('.').first().props().to).toEqual('/Login')

     })


  it('should alert if input field is not properly submitted',()=>{
    const wrapper = shallow(
      <LoginPage />)
      // console.log(wrapper.find('.button').last())

     })


})
