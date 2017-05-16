import React, { Component } from 'react';
import fetchMovies from '../helper/apiCall'
import apiKey from '../key.js'
import {cleaner} from '../helper/cleaner.js'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Jacks Movie Watcher</h1>

      </div>
    )
  }
}
