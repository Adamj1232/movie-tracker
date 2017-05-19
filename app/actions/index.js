import apiCall from '../helper/apiCall';
// import cleaner from '../helper/cleaner';

export const retrieveMovies = (movies) => {
  return {
    type: 'RETRIEVED_MOVIES',
    movies
  }
}

export const createUser = (users) => {
  return {
    type: 'CREATE_USER',
    users
  }
}

export const login = (users) => {
  return {
    type: 'LOGIN',
    users
  }
}

export const logout = (users) => {
  return {
    type: 'LOGOUT',
    users
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
