import APIKey from '../key'

export default class APICall{
  static fetchMovies () {
    return fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}`)
    .then((resp) =>
    resp.json()
    )
    .catch(() =>
      console.log('fetch error')
    )
  }
}
