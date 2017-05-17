import React, { Component } from 'react';
import MovieGridContainer from './MovieGridContainer'
import { NavBar } from './NavBar'
import CreateUserContainer from './CreateUserContainer'


export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section>
        <NavBar />
        <CreateUserContainer/>
        <MovieGridContainer />
      </section>
    )
  }
}
