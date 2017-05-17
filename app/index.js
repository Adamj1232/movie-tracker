import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app-container';
import AppContainer from './components/app-container'

// import './index.css';
// import React from 'react';
// import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { getMovies } from './actions/index'

import rootReducer from './reducers/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

store.dispatch(getMovies())
ReactDOM.render(
  <Provider store={store} >
    <AppContainer />
  </Provider>,
  document.getElementById('main')
)
