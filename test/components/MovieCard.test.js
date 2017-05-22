import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieCard from '../../app/components/MovieCard';
import { handleAddFave } from '../../app/reducers/favorites-reducer'

describe('MovieCard', () => {
  const movie = {
    poster_path: 'addressToSweetPoster',
    title: 'Super Sweet Movie 1',
    release_date: '2017-02-01',
    overview: 'Super sweet movie about super dope stuff',
    vote_average: 9.9
  }

  const favorites = {}

  it('should render a movie card', () => {
    let wrapper = shallow(<MovieCard title={movie.title} poster_path={movie.poster_path} overview={movie.overview} release_date={movie.release_date} vote_average={movie.vote_average} />)
    console.log(wrapper);
    expect(wrapper.find('.movie-card').length).toBe(1)

    // expect(wrapper.find('.movie-title').text()).toBe('Super Sweet Movie 1')
  })


})
