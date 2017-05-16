import { connect } from 'react-redux'
import App from './app'

const mapStateToProps = (state) => {
  return { movies: state.movies }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleFavorite: (text, id) => {
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
