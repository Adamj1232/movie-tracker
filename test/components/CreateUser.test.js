import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import jest from 'jest';
import "babel-polyfill";
import expect from 'expect';

import CreateUser from '../../app/components/CreateUser';

describe(' CreateUser', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should have a default state',()=>{
    const wrapper = shallow(<CreateUser/>)
    // console.log(wrapper.state())
  })

  it('should update state after on user input',()=>{
    const wrapper = shallow(<CreateUser/>)
    const nameInput = wrapper.find('input').first()
    const emailInput = wrapper.find('input').at(1)
    const passWord = wrapper.find('input').last()
    // console.log(passWord)
    nameInput.simulate('change', {
      target: {
        value: 'test'
      }
    })
    emailInput.simulate('change', {
      target: {
        value: 'email'
      }
    })
    passWord.simulate('change', {
      target: {
        value: 'password'
      }
    })
    expect(wrapper.state()).toEqual({ name: 'test', email: 'email', password: 'password' })
    // console.log(wrapper.state())
  })

  it('should check if user inputs are already in use', async (done)=>{
    fetchMock.post('http://localhost:3000/api/users/new', {
      status: 500,
      body: {}
    });

    const wrapper = shallow(<CreateUser/>)
    const nameInput = wrapper.find('input').first()
    const emailInput = wrapper.find('input').at(1)
    const passWord = wrapper.find('input').last()
    const submitButton = wrapper.find('.login-submit')
      // console.log(submitButton)
    // console.log(passWord)
    nameInput.simulate('change', {
      target: {
        value: 'test'
      }
    })
    emailInput.simulate('change', {
      target: {
        value: 'email'
      }
    })
    passWord.simulate('change', {
      target: {
        value: 'password'
      }
    })
    submitButton.simulate('click', {
      preventDefault: ()=>{},
    })
    await wrapper.update()
    console.log(wrapper.state())
    done()
  })

// check the dom for the error
// console log wrapper -- should see after state of calling fn in error alert
// expect error header to populate
});
