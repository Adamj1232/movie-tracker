import apiKey from '../key.js'
import cleaner from './cleaner.js'

export const fetchMovies = () => {
  const movieApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

  return fetch(movieApi)
  .then((resp) => {
    return resp.json()
  })
  .then((moviesJSON) => {
    console.log(cleaner(moviesJSON));
    return cleaner(moviesJSON)
  })
}
