// import React, { Component } from 'react';
// import { MovieCard } from './MovieCard';
//
//
// export default class FavoritesGrid extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//
//   render() {
//     const { movies, userData } = this.props;
//     if (!this.props.movies) {
//       return (
//        <h4>You have no favorites selected...</h4>
//       )
//     }
//     return (
//       <section id="movie-grid">
//         { Object.keys(this.props.movies).map((movie, index) => {
//           return (
//             <MovieCard title={this.props.movies[movie].title}
//                        poster_path={this.props.movies[movie].poster_path}
//                        overview={this.props.movies[movie].overview}
//                        release_date={this.props.movies[movie].release_date}
//                        vote_average={this.props.movies[movie].vote_average}
//                        user_id={this.props.userData.id}
//                        movie_id={this.props.movies[movie].movie_id}
//                        key={index}/>
//           )
//         }) }
//       </section>
//     )
//   }
// }
