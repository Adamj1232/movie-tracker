import { connect } from 'react-redux'
import { NavBar } from './NavBar'
import { logout, showFavorites } from '../actions/index'

const mapStateToProps = (state) => {
  return { user: state.userReducer }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleLogout: (user) => {
      dispatch(logout(user))
    }
  //   handleFavorites: (movies) => {
  //     dispatch(showFavorites(movies))
  // }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
