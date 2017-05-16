import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import MovieIndex from './components/movieIndex';

// import './index.css';
// import React from 'react';
// import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('main')
)
