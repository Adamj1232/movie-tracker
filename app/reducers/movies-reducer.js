const movieReducer = (state={}, action) => {
  switch (action.type) {
  case 'RETRIEVED_MOVIES':
    return Object.assign({}, state, action.movies)
  default:
    return state
  }
}

export default movieReducer
