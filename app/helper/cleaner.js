export const cleaner = (data) => {
  return data.results.reduce((acc, movie) => {
    if (!acc[movie.title]) {
      acc[movie.title] = {
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        overview: movie.overview,
        votingAverage: movie.voting_average,
        voteCount: movie.vote_count,
        releaseDate: movie.release_date
      }
    }
    return acc
  }, {})
}
