import { connect } from 'react-redux'
import CreateUser from '../components/CreateUser'
import { createUser } from '../actions/index'

const mapStateToProps = (state) => {
  return { newUser: state.userReducer }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleSubmit: (newUser) => {
      dispatch(createUser(newUser))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
