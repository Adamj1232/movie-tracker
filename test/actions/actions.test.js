import * as actions from '../../app/actions/index';
import fetchMock from 'fetch-mock';
import jest from 'jest';
import expect from 'expect';

describe('Testing actions', () => {

  it('should create an action to retrieve movies', () => {
    const movies = { movie1: { title: 'movie1',
                               overview: 'great film',
                               poster:'http://www.movie1.com'
                             },
                     movie2: { title: 'movie2',
                               overview: 'lousy film',
                               poster:'http://www.movie2.com'
                             }
                   }

    const expectedAction = {
      type: 'RETRIEVED_MOVIES',
      movies
    }

    expect(actions.retrieveMovies(movies)).toEqual(expectedAction)
  })

  it('should create an action to create a user', () => {
    const users = { name: 'Jack',
                   email: 'jack@example.com',
                   password: 'password'
                 }
    const expectedAction = {
      type: 'CREATE_USER',
      users
    }

    expect(actions.createUser(users)).toEqual(expectedAction)
  })

  it('should create an action to login a user', () => {
    const users = { email: 'jack@example.com',
                    password: 'password'
                  }
    const expectedAction = {
      type: 'LOGIN',
      users
    }

    expect(actions.login(users)).toEqual(expectedAction)
  })

  it('should create an action to logout a user', () => {
    const users = { email: 'jack@example.com',
                    password: 'password'
                  }
    const expectedAction = {
      type: 'LOGOUT',
      users
    }

    expect(actions.logout(users)).toEqual(expectedAction)
  })

  it('should create an action to show favorite movies', () => {
    const movies = { movie1: { title: 'movie1',
                               overview: 'great film',
                               poster:'http://www.movie1.com'
                             },
                     movie2: { title: 'movie2',
                               overview: 'lousy film',
                               poster:'http://www.movie2.com'
                             }
                   }
    const expectedAction = {
      type: 'SHOW_FAVES',
      movies
    }

    expect(actions.showFavorites(movies)).toEqual(expectedAction)
  })

  it('should create an action to add a favorite movie', () => {
    const movie = { movie1: { title: 'movie1',
                               overview: 'great film',
                               poster:'http://www.movie1.com'
                             }
                   }
    const expectedAction = {
      type: 'ADD_FAVE',
      movie
    }

    expect(actions.addFavorite(movie)).toEqual(expectedAction)
  })

  it('should create an action to remove a favorite movie', () => {
    const movie = { movie1: { title: 'movie1',
                               overview: 'great film',
                               poster:'http://www.movie1.com'
                             }
                   }
    const expectedAction = {
      type: 'DELETE_FAVE',
      movie
    }

    expect(actions.deleteFavorite(movie)).toEqual(expectedAction)
  })

  it('should create an action object for favorite logout', () => {
    const expectedAction = {
      type: 'FAVE_LOGOUT',
    }

    expect(actions.faveLogout()).toEqual(expectedAction)
  })
})

describe('api call tests', () => {

  it('should return an json object of movie data', () => {
    const mockedData = {}
  })
})
