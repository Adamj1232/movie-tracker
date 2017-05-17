import React, { Component } from 'react';
import MovieGridContainer from './MovieGridContainer'
import { NavBar } from './NavBar'
import CreateUserContainer from './CreateUserContainer'
import LoginPageContainer from './LoginPageContainer'


export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section>
        <NavBar />
        <CreateUserContainer/>
        <LoginPageContainer/>
        <MovieGridContainer />
      </section>
    )
  }
}
