export const retrieveMovies = (fetchMovies) => {
  return {
    type: 'RETRIEVED_MOVIES',
    fetchMovies
  }
}
