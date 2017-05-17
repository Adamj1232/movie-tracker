import apiCall from '../helper/apiCall';
import cleaner from '../helper/cleaner';

export const getMovies = () => {
  return (dispatch) => {
    return apiCall.fetchMovies()
    .then((movies) => dispatch(retrieveMovies(movies)))
    .catch(() =>
      console.log('fetch2 error')
    )
  }
}

export const retrieveMovies = (movies) => {
  return {
    type: 'RETRIEVED_MOVIES',
    movies
  }
}
