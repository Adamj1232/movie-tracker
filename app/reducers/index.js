import { combineReducers } from 'redux'
import favoritesReducer from './favorites-reducer'
import movieReducer from './movies-reducer'

const rootReducer = combineReducers({
  favoritesReducer,
  movieReducer
})

export default rootReducer
