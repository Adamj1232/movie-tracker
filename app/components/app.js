import React, { Component } from 'react';
import MovieGridContainer from './MovieGridContainer'
import { NavBar } from './NavBar'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <NavBar />
        <MovieGridContainer />
      </section>
    )
  }
}
