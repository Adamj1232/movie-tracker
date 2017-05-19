import { connect } from 'react-redux'
import { NavBar } from './NavBar'
import { logout } from '../actions/index'

const mapStateToProps = (state) => {
  return { user: state.userReducer }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleLogout: (user) => {
      dispatch(logout(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
