import React from 'react';
import { mount, shallow } from 'enzyme';
import  {FavoriteCard} from '../../app/components/FavoriteCard.js';
import expect from 'expect';

describe('FavoriteCard component',()=>{

  it('should display a favorites button',()=>{

    const wrapper = shallow(
      <FavoriteCard title = {test_title}
        poster_path = {test_path}
        overview = {test_overview}
        release_date = {test_date}
        vote_average = {test_average}
        movie_id = {test_movieId}
        user_id = {test_userId}
        handleDeleteFave = {()=>{}}
        updateFavorites = {()=>{}} />)

      console.log(wrapper)

      //  expect(wrapper.find('.button').first().props().children).toEqual('Login')
      //  expect(wrapper.find('.button').first().props().to).toEqual('/Login')

     })

  it('should render movie information', ()=>{

  })


   })
