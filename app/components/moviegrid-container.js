import { connect } from 'react-redux'
import MovieGrid from './movieGrid'

const mapStateToProps = (state) => {
  console.log(state);
  return { movies: state.movies }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleFavorite: (text, id) => {
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid)
