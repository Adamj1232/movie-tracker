import React from 'react';
import { mount, shallow } from 'enzyme';
import  FavoritesGrid from '../../app/components/FavoritesGrid.js';
import expect from 'expect';

describe('FavoritesGrid component',()=>{

  it.skip('should render favorites card',()=>{

    const wrapper = shallow(<FavoritesGrid />)

      console.log(wrapper)
      //  expect(wrapper.find('.button').first().props().children).toEqual('Login')
      //  expect(wrapper.find('.button').first().props().to).toEqual('/Login')

     })

   })
