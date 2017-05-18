import { combineReducers } from 'redux'
import favoritesReducer from './favorites-reducer'
import movieReducer from './movies-reducer'
import createUserReducer from './createUser-reducer'

const rootReducer = combineReducers({
  favoritesReducer,
  movieReducer,
  createUserReducer
})

export default rootReducer
