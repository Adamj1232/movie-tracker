import apiKey from '../key.js'

export const fetchMovies = () => {
  const movieApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

  fetch(movieApi)
  .then((resp) => {
    return resp.json()
  })
  .then((moviesJSON) => {
    return cleaner(moviesJSON)
  })
}
