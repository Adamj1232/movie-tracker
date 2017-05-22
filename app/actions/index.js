import apiCall from '../helper/apiCall';

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

export const showFavorites = (movies) => {
  return {
    type: 'SHOW_FAVES',
    movies
  }
}

export const addFavorite = (movie) => {
  return {
    type: 'ADD_FAVE',
    movie
  }
}

export const deleteFavorite = (movie) => {
  return {
    type: 'DELETE_FAVE',
    movie
  }
}

export const faveLogout = () => {
  return {
    type: 'FAVE_LOGOUT'
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

export const allFavorites = (userId) => {
  return fetch (`http://localhost:3000/api/users/${userId}/favorites`)
  .then((resp) => resp.json())
  .catch(() =>
    console.log('fetch error')
  )
}
