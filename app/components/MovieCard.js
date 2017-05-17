import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = ({ title, poster, overview, releaseDate, voteCount, votingAverage }) => {
  console.log(title)
  return (
    <article>
      <p>{title}</p>
      <img className="movie-poster"
           alt={title}
           src={poster} />
      <p>{overview}</p>
      <p>{releaseDate}</p>
      <p>{voteCount}</p>
      <p>{votingAverage}</p>
    </article>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  votingAverage: PropTypes.string.isRequired,
}
