import React from 'react';
import PropTypes from 'prop-types';
// import './MovieCard.css';

 function addFavorites (movieData) {
   console.log(movieData)
  fetch('/api/users/favorites/new', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(movieData)
  })
}

export const MovieCard = ({ title, poster_path, overview, release_date, vote_average, movie_id, user_id }) => {
  return (
    <article className="movie-card">
      <button
          onClick={()=>{addFavorites({movie_id, user_id, title, poster_path, release_date, vote_average, overview})}}>
          Favorite
      </button>
      <img className="movie-poster"
           alt={title}
           src={poster_path} />
    </article>
  )
}


MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  votingAverage: PropTypes.number.isRequired,
}
