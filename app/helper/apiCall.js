import APIKey from '../key'

export const cleaner = (data) => {
  return data.results.reduce((acc, movie) => {
    console.log(movie.id)
    if (!acc[movie.title]) {
      acc[movie.title] = {
        title: movie.title,
        poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        movie_id: movie.id
      }
    }
    return acc
  }, {})
}


export default class apiCall {
  static fetchMovies () {
    return fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}`)
    .then((resp) => resp.json())
    .then((json) => { return cleaner(json) })
    .catch(() =>
      console.log('fetch error')
    )
  }
}
