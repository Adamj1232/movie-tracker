import React from 'react';
import PropTypes from 'prop-types';


export const FavoriteCard = ({ title, poster_path, overview, release_date, vote_average, movie_id, user_id, handleDeleteFave}) => {

  const deleteFavorite = (user_id, movie_id) => {
    console.log(user_id, movie_id)
    fetch(`api/users/${user_id}/favorites/${movie_id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user_id: user_id, movie_id})
    })
    // handleDeleteFave(movieData)
  }

  return (
    <article className="movie-card">
      <button
          onClick={() => { deleteFavorite(user_id, movie_id) }}>
          Unfavorite
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
