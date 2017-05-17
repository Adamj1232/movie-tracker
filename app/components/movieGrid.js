import React, { Component } from 'react';
import { MovieCard } from './MovieCard';

export default class MovieGrid extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { movies } = this.props;
    if (!this.props.movies) {
      return (
       <h4>Guess there's nothing worth seeing....</h4>
      )
    }
    return (
      <section id="movie-grid">
        { Object.keys(this.props.movies).map((movie, index) => {
          return (
            <MovieCard title={this.props.movies[movie].title}
                       poster={this.props.movies[movie].poster}
                       overview={this.props.movies[movie].overview}
                       releaseDate={this.props.movies[movie].releaseDate}
                       voteCount={this.props.movies[movie].voteCount}
                       votingAverage={this.props.movies[movie].votingAverage} />
          )
        }) }
      </section>
    )
  }
}
