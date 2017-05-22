import React from 'react';
import { mount, shallow } from 'enzyme';
import  {MovieCard} from '../../app/components/MovieCard.js';
import expect from 'expect';

describe('MovieCard component',()=>{


    it('should display a favorites button',()=>{

      const wrapper = shallow(
        <MovieCard    favorites={{}}
                      handleDeleteFave={()=>{}}
                      movie_id={'test_movieId'}
                      overview={'test_overview'}
                      poster_path={'test_posterPath'}
                      release_date={'test_release_date'}
                      title={'test_title'}
                      updateFavorites={()=>{}}
                      user_id={1}
        />)
        console.log(wrapper.debug())
        expect(wrapper.find('button').length).toEqual(1)
        expect(wrapper.find('button').props().className).toEqual('unfavorited')



        //  expect(wrapper.find('.button').first().props().children).toEqual('Login')
        //  expect(wrapper.find('.button').first().props().to).toEqual('/Login')

       })

       it('should dispaly an image of favorited movie',()=>{

         const wrapper = shallow(
           <MovieCard favorites={{}}
                         handleDeleteFave={()=>{}}
                         movie_id={'test_movieId'}
                         overview={'test_overview'}
                         poster_path={'test_posterPath'}
                         release_date={'test_release_date'}
                         title={'test_title'}
                         updateFavorites={()=>{}}
                         user_id={1}
           />)
           console.log(wrapper.debug())
           expect(wrapper.find('.movie-poster').length).toEqual(1)
       })

     })

