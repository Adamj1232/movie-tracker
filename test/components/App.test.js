import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../../app/components/app.js';
import expect from 'expect';

describe('App component',()=>{


  it('should clear the user input values after click',()=>{
    const wrapper = shallow(
      <NavBar
        user={{id:1 , name: 'test', password: 'test'}}
        favorites={{}}
        handleLogout={()=>{}}
      />)
      console.log(wrapper.debug())
     })

    




})
