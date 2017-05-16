const favorites = (state=[], action) => {
  switch(action.type){
    case 'SHOW_FAVES':
      return [...action.favorites]
    default:
      return state
  }
}

export default favorites
