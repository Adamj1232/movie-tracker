import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../../app/components/app.js';
import expect from 'expect';

describe('App component',()=>{


  it('should display sign in button if no user is signed in',()=>{
    const wrapper = shallow(<App/>)
    // console.log(wrapper.debug())

  })

  it('should clear the user input values after click',()=>{

  })

  it('should display user name and sign out button after the user has signed in',()=>{

  })
})
