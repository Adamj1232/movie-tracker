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

  it('should update state after user input',()=>{
    const wrapper = shallow(<CreateUser/>)
    const nameInput = wrapper.find('input').first()
    const emailInput = wrapper.find('input').at(1)
    const passWord = wrapper.find('input').last()
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

  it.skip('should check if user inputs are already in use', async (done)=>{
    fetchMock.post('http://localhost:3000/api/users/new', {
      status: 500,
      body: {}
    });

    const wrapper = shallow(<CreateUser/>)
    const nameInput = wrapper.find('input').first()
    const emailInput = wrapper.find('input').at(1)
    const passWord = wrapper.find('input').last()
    const submitButton = wrapper.find('.login-submit')

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
    done()
  })
});
