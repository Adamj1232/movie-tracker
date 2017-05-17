import React from 'react';
import PropTypes from 'prop-types';
// import './MovieCard.css';


export const MovieCard = ({ title, poster, overview, releaseDate, voteCount, votingAverage }) => {
  return (
    <article className="movie-card">
      <p>{title}</p>
      <button>Favorite</button>
      <img className="movie-poster"
           alt={title}
           src={poster} />
      <p>{overview}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Vote Count: {voteCount}</p>
      <p>Vote Average: {votingAverage}</p>
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
