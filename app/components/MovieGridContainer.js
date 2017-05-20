import { connect } from 'react-redux'
import MovieGrid from './MovieGrid'
import { addFavorite } from '../actions/index.js'

const mapStateToProps = (state) => {
  return { movies: state.movieReducer, userData: state.userReducer, favorites: state.favoritesReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddFave: (movie) => dispatch(addFavorite(movie)),
    updateFavs: (movies) => dispatch(showFavorites(movies))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid)
