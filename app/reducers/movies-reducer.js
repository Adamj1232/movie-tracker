const movies = (state=[], action) => {
  switch(action.type){
    case 'RETRIEVED_MOVIES':
      return [...state, ...action.movies.results]
    default:
      return state
  }
}

export default movies
