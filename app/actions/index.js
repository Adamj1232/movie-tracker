import apiCall from '../helper/apiCall';
import cleaner from '../helper/cleaner';

export const retrieveMovies = (movies) => {
  return {
    type: 'RETRIEVED_MOVIES',
    movies
  }
}

export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    user
  }
}

export const login = (user) => {
  return {
    type: 'LOGIN',
    user
  }
}



export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const getMovies = () => {
  return (dispatch) => {
    return apiCall.fetchMovies()
    .then((movies) => dispatch(retrieveMovies(movies)))
    .catch(() =>
      console.log('fetch2 error')
    )
  }
}
