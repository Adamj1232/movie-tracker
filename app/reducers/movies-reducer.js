const movieReducer = (state={}, action) => {
  console.log('movieReducer', action.movies);
  switch (action.type){
  case 'RETRIEVED_MOVIES':
    return Object.assign({}, state, action.movies)
  default:
    return state
  }
}

export default movieReducer
