import React from 'react';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import { login, showFavorites } from '../actions'

const mapStateToProps = (state) => {
  return { activeUser: state.userReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (activeUser) => dispatch(login(activeUser)),
    handleFavorites: (movies) => dispatch(showFavorites(movies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
