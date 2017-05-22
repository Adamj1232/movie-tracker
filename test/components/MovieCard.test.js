import React from 'react';
import { mount, shallow } from 'enzyme';
import  {MovieCard} from '../../app/components/MovieCard.js';
import expect from 'expect';

describe('FavoriteCard component',()=>{

  it('should display a favorites button',()=>{

    const wrapper = shallow(
      <MovieCard />)

      console.log(wrapper)

      //  expect(wrapper.find('.button').first().props().children).toEqual('Login')
      //  expect(wrapper.find('.button').first().props().to).toEqual('/Login')

     })

  it('should render movie information', ()=>{

  })


   })
