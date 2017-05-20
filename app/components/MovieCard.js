import React from 'react';
import PropTypes from 'prop-types';
// import './MovieCard.css';


export const MovieCard = ({ title, poster_path, overview, release_date, vote_average, movie_id, user_id, handleAddFave, favorites, handleDeleteFave}) => {

  const favClick = (movieData) => {
    return Object.keys(favorites).find(title => {
      if(title === movieData.title){
        console.log('mmmmmmmatch', favorites[title].movie_id)
        return true
      }
    })
  }
  // 
  // const cleanFavData = (favData) => {
  //   return  favData.reduce((favObj, movie)=> {
  //     if(!favObj[movie.title]){
  //       favObj[movie.title]=movie
  //     }
  //     console.log(favObj)
  //     return favObj
  //   }, {})
  // }

  const addFavorite = (movieData) => {
    console.log(movieData)
    fetch('/api/users/favorites/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movieData)
    })
    handleAddFave(movieData)
  }

  // const getFavorites = (userId) => {
  //     fetch (`api/users/${userId}/favorites`)
  //   .then((resp) => resp.json())
  //   .then((json) =>  cleanFavData(json.data))
  //   .then((cleanJSON) => updateFavs(cleanJSON))
  //   .catch(() =>
  //     console.log('fetch error')
  //   )}

  const removeFavorite = (user_id, movie_id) => {
    console.log(user_id, movie_id)
    fetch(`api/users/${user_id}/favorites/${movie_id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user_id: user_id, movie_id})
    })
    handleDeleteFave({ title, poster_path, overview, release_date, vote_average, movie_id})

  }

  const clickHandler = (movieData) => {
    if(favClick(movieData)){
      removeFavorite(user_id, movie_id)
    } else {
      addFavorite(movieData)
    }
  }

  return (
    <article className="movie-card">
      <button
          onClick={()=>{clickHandler({movie_id, user_id, title, poster_path, release_date, vote_average, overview})}}>
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
