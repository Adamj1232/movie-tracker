import { combineReducers } from 'redux'
import favoritesReducer from './favorites-reducer'
import movieReducer from './movies-reducer'
import loginReducer from './login-reducer'

const rootReducer = combineReducers({
  favoritesReducer,
  movieReducer,
  loginReducer
})

export default rootReducer
