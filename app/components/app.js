import React, { Component } from 'react';
import MovieGridContainer from './MovieGridContainer'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <MovieGridContainer />
      </section>
    )
  }
}
