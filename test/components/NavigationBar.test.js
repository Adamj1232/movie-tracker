import React from 'react';
import { mount, shallow } from 'enzyme';
import  { NavBar } from '../../app/components/NavBar.js';
import expect from 'expect';

describe('NavBar component',()=>{

  it('should display sign in button if no user is signed in',()=>{
    const wrapper = shallow(
      <NavBar
      user={{}}
      favorites={{}}
      handleLogout={()=>{}}
      />)

       expect(wrapper.find('.button').first().props().children).toEqual('Login')
       expect(wrapper.find('.button').first().props().to).toEqual('/Login')

     })

     it('should redirect the user to the home page after login',()=>{
         const wrapper = shallow(
           <NavBar
             user={{id:1 , name: 'test', password: 'test'}}
             favorites={{}}
             handleLogout={()=>{}}
           />)
           expect(wrapper.find('.button').first().props().children).toEqual('Home')
           expect(wrapper.find('.button').first().props().to).toEqual('/')
          })

  it('should display user name after the user has signed in',()=>{
    const wrapper = shallow(
      <NavBar
        user={{id:1 , name: 'test', password: 'test'}}
        favorites={{}}
        handleLogout={()=>{}}
      />)

      console.log(wrapper.find('.user-name').props().children)
      expect(wrapper.find('.user-name').props().children).toEqual(['Welcome ', 'Test'])
      // console.log(wrapper.find('.button').first().props().children)
      // console.log(wrapper.find('.button').last())

     })

})
