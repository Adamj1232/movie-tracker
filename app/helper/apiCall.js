import APIKey from '../key'

export const cleaner = (data) => {
  return data.results.reduce((acc, movie) => {
    if (!acc[movie.title]) {
      acc[movie.title] = {
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        overview: movie.overview,
        votingAverage: movie.vote_average,
        voteCount: movie.vote_count,
        releaseDate: movie.release_date
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
