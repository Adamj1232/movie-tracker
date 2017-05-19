import { combineReducers } from 'redux'
import movieReducer from './movies-reducer'
import userReducer from './user-reducer'
import favoritesReducer from './favorites-reducer'

const rootReducer = combineReducers({
  movieReducer,
  userReducer,
  favoritesReducer
})

export default rootReducer
