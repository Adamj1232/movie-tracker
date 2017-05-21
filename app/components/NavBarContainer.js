import { connect } from 'react-redux'
import { NavBar } from './NavBar'
import { logout, faveLogout } from '../actions/index'

const mapStateToProps = (state) => {
  return { user: state.userReducer, favorites: state.favoritesReducer }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleLogout: (user) => {
      dispatch(logout(user))
    },
    handleFaveLogout: () => {
      dispatch(faveLogout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
