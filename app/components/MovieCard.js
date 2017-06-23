import React from 'react';
import PropTypes from 'prop-types';


export const MovieCard = ({ title, poster_path, overview, release_date, vote_average, user_id, movie_id, userData, handleAddFave, favorites, handleDeleteFave}) => {

  const favClick = (movieData) => {
    return Object.keys(favorites).find(title => {
      if(title === movieData.title){
        return true
      }
    })
  }

  const addFavorite = (movieData) => {
    fetch('/api/users/favorites/new', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData)
    })
    handleAddFave(movieData)
  }

  const removeFavorite = (user_id, movie_id) => {
    fetch(`api/users/${ user_id }/favorites/${ movie_id }`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user_id, movie_id })
    })
    handleDeleteFave({ title, poster_path, overview, release_date, vote_average, movie_id })

  }

  const clickHandler = (movieData, userData) => {
    const userArray = Object.keys(userData)
    if (!userArray.length) {
      alert('Please login to view favorites')
    } else if  (favClick(movieData)){
      removeFavorite(user_id, movie_id)
    } else {
      addFavorite(movieData)
    }
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

  const styleFromLength = (overview) => {
    return overview.length > 340 ? 'longOverviewDiv' : 'overviewDiv'
  }

  return (
    <article  className="movie-card">
      <button className={checkIfFavorited(title)}
              onClick={()=>{clickHandler({movie_id, user_id, title, poster_path, release_date, vote_average, overview}, userData)}}>
          &#9734;
      </button>
      <span className='overviewSpan'>
        <img className="movie-poster"
             alt={title}
             src={poster_path} />
        <div className={styleFromLength(overview)}>
          <h4 className='overviewHeader top'>OVERVIEW</h4>
          <p className='overview'>{overview}</p>
          <h4 className='overviewHeader'>RELEASE DATE</h4>
          <p className='overview'>{release_date}</p>
          <h4 className='overviewHeader'>VOTE AVERAGE</h4>
          <p className='overview'>{vote_average}</p>
        </div>
      </span>
    </article>
  )
}
