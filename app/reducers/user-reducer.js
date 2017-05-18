const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return Object.assign({}, state, action.users)
    case 'LOGIN':
      return Object.assign({}, state, action.users)
    case 'LOGOUT':
      return state
    default:
      return state
  }
}

export default userReducer
