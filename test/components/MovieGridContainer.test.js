import 'jsdom-global/register'
import React, { Component } from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';

import MovieGrid from '../../app/components/MovieGrid';
import MovieGridContainer from '../../app/containers/MovieGridContainer';

const mockStore = configureMockStore()({
  movies: {
    SweetMovie1: {
      title: 'SweetMovie1',
      poster_path: 'https://image.tmdb.org/t/p/w500AWESOMEMOVIE',
      overview: 'Super sweet movie about super cool things',
      vote_average: 10,
      release_date: '5/21/17',
      movie_id: 1
    },
    SweetMovie2: {
      title: 'SweetMovie2',
      poster_path: 'https://image.tmdb.org/t/p/w500AWESOMEMOVIE2',
      overview: 'Super sweet movie about super cool things the sequal',
      vote_average: 11,
      release_date: '5/21/17',
      movie_id: 2
    }
  },
  userData: {
    anything: 'ANYTHING!!!'
  },
  favorites: {
    SweetMovie2: {
      title: 'SweetMovie2',
      poster_path: 'https://image.tmdb.org/t/p/w500AWESOMEMOVIE2',
      overview: 'Super sweet movie about super cool things the sequal',
      vote_average: 11,
      release_date: '5/21/17',
      movie_id: 2
    }
  }
});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><MovieGridContainer/></Provider>);
  const Component = Container.find(MovieGrid);

  return {
    Container,
    Component
  }
}

describe('MovieGridContainer', () => {
  const { Container, Component } = setup()
  //
  // it('should pass the appropriate props from state', () => {
  //   console.log(Component.props())
  //   expect(Component.props().movies).toEqual([
  //     SweetMovie1: {
  //       title: 'SweetMovie1',
  //       poster_path: 'https://image.tmdb.org/t/p/w500AWESOMEMOVIE',
  //       overview: 'Super sweet movie about super cool things',
  //       vote_average: 10,
  //       release_date: '5/21/17',
  //       movie_id: 1
  //     },
  //     SweetMovie2: {
  //       title: 'SweetMovie2',
  //       poster_path: 'https://image.tmdb.org/t/p/w500AWESOMEMOVIE2',
  //       overview: 'Super sweet movie about super cool things the sequal',
  //       vote_average: 11,
  //       release_date: '5/21/17',
  //       movie_id: 2
  //     }
  //   ])
  // })

  it.skip('should pass down the correct action as props', () => {
    expect(Object.keys(Component.props())).toContain('handleAddFave')
    expect(Object.keys(Component.props())).toContain('handleDeleteFave')
  })
})
