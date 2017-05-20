import React from 'react';
import PropTypes from 'prop-types';
// import './MovieCard.css';


export const MovieCard = ({ title, poster_path, overview, release_date, vote_average, movie_id, user_id, handleAddFave}) => {

  const addFavorite = (movieData) => {
    console.log(movieData)
    fetch('/api/users/favorites/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movieData)
    })
    handleAddFave(movieData)
  }

  return (
    <article className="movie-card">
      <button
          onClick={()=>{addFavorite({movie_id, user_id, title, poster_path, release_date, vote_average, overview})}}>
          Favorite
      </button>
      <img className="movie-poster"
           alt={title}
           src={poster_path} />
    </article>
  )
}


// MovieCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   poster_path: PropTypes.string.isRequired,
//   overview: PropTypes.string.isRequired,
//   release_date: PropTypes.string.isRequired,
//   vote_average: PropTypes.number.isRequired,
// }
