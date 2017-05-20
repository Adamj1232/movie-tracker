import React, { Component } from 'react';
import { FavoriteCard } from './FavoriteCard';


export default class FavoritesGrid extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { favorites, userData, updateFavorites, handleDeleteFave } = this.props;
    if (!favorites) {
      return (
       <h4>You have no favorites selected...</h4>
      )
    }
    return (
      <section id="movie-grid">
        { Object.keys(favorites).map((movie, index) => {
          return (
            <FavoriteCard title={favorites[movie].title}
                       poster_path={favorites[movie].poster_path}
                       overview={favorites[movie].overview}
                       release_date={favorites[movie].release_date}
                       vote_average={favorites[movie].vote_average}
                       user_id={userData.id}
                       movie_id={favorites[movie].movie_id}
                       updateFavorites={updateFavorites}
                       handleDeleteFave={handleDeleteFave}
                       favorites={favorites}
                       key={index}/>
          )
        }) }
      </section>
    )
  }
}
