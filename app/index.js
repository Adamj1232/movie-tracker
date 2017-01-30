import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import MovieIndex from './components/movieIndex';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={MovieIndex} />
      </Route>
    </Router>
)

ReactDOM.render(router, document.getElementById('main'))
