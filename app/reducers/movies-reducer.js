const movies = (state=[], action) => {
  switch(action.type){
    case 'RETRIEVED_MOVIES':
      return [...state]
    default:
      return state
  }
}

export default movies
