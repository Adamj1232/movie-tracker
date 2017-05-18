import { connect } from 'react-redux'
import CreateUser from './CreateUser'
import { createUser } from '../actions/index'

const mapStateToProps = (state) => {
  return { user: state.createUserReducer }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleSubmit: (user) => {
      dispatch(createUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
