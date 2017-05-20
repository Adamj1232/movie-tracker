import { connect } from 'react-redux'
import MovieGrid from './MovieGrid'
import { addFavorite } from '../actions/index.js'

const mapStateToProps = (state) => {
  return { movies: state.movieReducer, userData: state.userReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddFave: (movie) => {
      dispatch(addFavorite(movie))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid)
