import reducer from '../../app/reducers/movies-reducer';
import expect from 'expect';

describe('Movies reducer tests', () => {
  it('should return the initial state', () => {

    expect(reducer(undefined, {})).toEqual({})
  })

  it('Should return all the movies from the database when action type is RETRIEVED_MOVIES', () => {
    const action = {
      type: 'RETRIEVED_MOVIES',
      movies: {'Guardians': {
        title: 'Guardians',
        year: '2017',
        poster_path: 'posterURL'
      }}
    }

    const expected = {
      'Guardians': {
        title: 'Guardians',
        year: '2017',
        poster_path: 'posterURL'
      }
    }

    expect(reducer(undefined, action)).toEqual(expected)
  })
})
