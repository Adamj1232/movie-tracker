import reducer from '../../app/reducers/favorites-reducer';
import expect from 'expect'

describe('favorites-reducer testing', () => {

  it('should return the initial state', () => {

    expect(reducer(undefined, {})).toEqual({})
  })

  it('Should show all favorites from the server', () => {
    const action = {
      type: 'SHOW_FAVES',
      movies: { 'Alien: Covenant': {
        poster_path: 'posterURL',
        title: 'Alien: Covenant',
      },
        'Guardians of the Galaxy, Vol2': {
          poster_path: 'posterURL',
          title: 'Guardians of the Galaxy, Vol2',
        },
      },
    };

    const expected = { 'Alien: Covenant': {
      poster_path: 'posterURL',
      title: 'Alien: Covenant',
    },
      'Guardians of the Galaxy, Vol2': {
        poster_path: 'posterURL',
        title: 'Guardians of the Galaxy, Vol2',
      }
    }

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('Should add a favorite to the favorites object', () => {
    const action = {
      type: 'ADD_FAVE',
      movie: { 'Furious 8': {
        poster_path: 'posterURL',
        title: 'Furious 8',
      }
      }
    }
    const expected = {'undefined': { 'Furious 8': {
      poster_path: 'posterURL',
      title: 'Furious 8',
    }
    }
    }

    expect(reducer(undefined, action)).toEqual(expected)
  })

  it('Should remove a favorite from favorites object', () => {
    const actionDelete = {
      type: 'DELETE_FAVE',
      movie: { 'Guardians': {
        poster_path: 'posterURL',
        title: 'Guardians',
      }
      }
    }

    const actionAdd = {
      type: 'ADD_FAVE',
      movie: { 'Guardians': {
        poster_path: 'posterURL',
        title: 'Guardians',
      }
      }
    }

    const expected = {'undefined': { 'Guardians': {
      poster_path: 'posterURL',
      title: 'Guardians',
    }
    }
    }

    expect(reducer(undefined, actionAdd)).toEqual(expected)
    expect(reducer(undefined, actionDelete)).toEqual({});
  })

  it('Should return an empty object when action type if FAVE_LOGOUT', () => {
    const action = {
      type: 'FAVE_LOGOUT'
    }

    expect(reducer(undefined, action)).toEqual({})
  })
})
