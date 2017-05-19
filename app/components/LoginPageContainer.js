import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { login } from '../actions'

const mapStateToProps = (state) => {
  return { activeUser: state.userReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (activeUser) => dispatch(login(activeUser)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
