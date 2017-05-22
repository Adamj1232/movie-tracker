import React from 'react'
import { apiCall, cleaner } from '../app/helper/apiCall';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import APIKey from '../app/key'

describe('Helper function tests', () => {
  it('Should return a json of movie data from api database', () => {
    const mockedData = {
            poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
            adult: false,
            overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
            release_date: "2017-04-24",
            genre_ids: [
            12,
            28,
            35,
            878
            ],
            id: 283995,
            original_title: "Guardians of the Galaxy Vol. 2",
            original_language: "en",
            title: "Guardians of the Galaxy Vol. 2",
            backdrop_path: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
            popularity: 116.176817,
            vote_count: 1701,
            video: false,
            vote_average: 7.6
          }

    const mockedClean = {'Guardians of the Galaxy Vol. 2': {
      title: 'Guardians of the Galaxy Vol. 2',
      poster_path: 'https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg',
      overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      vote_average: 7.6,
      release_date: "2017-04-24",
      movie_id: undefined
    }}

    fetchMock.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}`, {
      status: 200,
      body: mockedData
    })

    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('should clean the movie data', () => {
    const mockedData = {
            page: 1,
            results: [
            {
            poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
            adult: false,
            overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
            release_date: "2017-04-24",
            genre_ids: [
            12,
            28,
            35,
            878
            ],
            id: 283995,
            original_title: "Guardians of the Galaxy Vol. 2",
            original_language: "en",
            title: "Guardians of the Galaxy Vol. 2",
            backdrop_path: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
            popularity: 116.176817,
            vote_count: 1701,
            video: false,
            vote_average: 7.6
          }]}

    const mockedClean = {'Guardians of the Galaxy Vol. 2': {
      title: 'Guardians of the Galaxy Vol. 2',
      poster_path: 'https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg',
      overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      vote_average: 7.6,
      release_date: "2017-04-24",
      movie_id: 283995
    }}

    expect(cleaner(mockedData)).toEqual(mockedClean)
  })
})
