import { connect } from 'react-redux'
import movieIndex from './movieIndex'

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

export default connect(mapStateToProps, mapDispatchToProps)(movieIndex)
