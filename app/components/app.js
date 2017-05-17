import React, { Component } from 'react';
import MovieGridContainer from './moviegrid-container'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MovieGridContainer />
      </div>
    )
  }
}
