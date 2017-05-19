const favoritesReducer = (state={}, action) => {
  switch (action.type) {
    case 'SHOW_FAVES':
      return Object.assign({}, state, action.movies)
    case 'ADD_FAVE':
      return Object.assign({}, state, { [action.movie.title]: action.movie})
  case 'DELETE_FAVE':
      const newState = delete state[action.movie.title]
      return Object.assign({}, state, newState)
    default:
      return state
  }
}

export default favoritesReducer
