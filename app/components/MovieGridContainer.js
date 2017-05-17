import { connect } from 'react-redux'
import MovieGrid from './MovieGrid'

const mapStateToProps = (state) => {
  console.log('movieGridContainer', state.movieReducer)
  return { movies: state.movieReducer }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleFavorite: (text, id) => {
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid)
