import APICall from '../helper/apiCall'

export const getMovies = () => {
  return (dispatch) => {
    return APICall.fetchMovies()
    .then((movies) =>
    dispatch(retrieveMovies(movies))
    )
    .catch(() =>
      console.log('fetch2 error')
    )
  }
}

export const retrieveMovies = (movies) => {
  console.log(movies)
  return {
    type: 'RETRIEVED_MOVIES',
    movies
  }
}
