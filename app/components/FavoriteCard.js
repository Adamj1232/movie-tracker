import React from 'react';

export const FavoriteCard = ({ title, poster_path, overview, release_date, vote_average, movie_id, user_id, handleDeleteFave, updateFavorites, favorites }) => {

  const deleteFavorite = (user_id, movie_id, title) => {
    fetch(`api/users/${ user_id }/favorites/${ movie_id }`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user_id, movie_id })
    })

    handleDeleteFave({ title, poster_path, overview, release_date, vote_average, movie_id, user_id, handleDeleteFave, updateFavorites })
  }

  const checkIfFavorited = (title) => {
    let favoriteClass = '';
    if (Object.keys(favorites).includes(title)) {
      favoriteClass = 'favorited';
    } else {
      favoriteClass = 'unfavorited'
    }
    return favoriteClass;
  };

  return (
    <article  className="movie-card">
      <button className={ checkIfFavorited(title) }
              onClick={() => { deleteFavorite(user_id, movie_id, title) }}>
        &#9734;
      </button>
      <img className="movie-poster"
           alt={title}
           src={poster_path} />
    </article>
  )
}
