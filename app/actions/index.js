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

export const addFavorites = () => {


}

export const showFavorites = () => {


}





Add Favorite - /users/favorites/new

To save a favorite you must send into the body: movie_id, user_id and title, poster_path, release_date, vote_average, overview. Keep in mind the response only gives the new favorite id

Receive All Favorites - /users/:id/favorites

To get a users favorite movies you need to send in the user ID through the params. This will return an array favorite objects.

Delete a Favorite - /users/:id/favorites/:favID

To delete a users favorite you must send in the users id and id of the movie.
