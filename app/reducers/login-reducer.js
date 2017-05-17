const login = (state=[], action) => {
  switch(action.type){
    case 'GET_LOGIN':
      return [...action.favorites]
    default:
      return state
  }
}

export default login
