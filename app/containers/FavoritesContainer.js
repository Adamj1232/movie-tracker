import { connect } from 'react-redux'
import FavoritesGrid from '../components/FavoritesGrid'
import { deleteFavorite, showFavorites } from '../actions/index'

const mapStateToProps = (state) => {
  return { favorites: state.favoritesReducer, userData: state.userReducer }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleDeleteFave: (movie) => dispatch(deleteFavorite(movie)),
    updateFavorites: (movies) => dispatch(showFavorites(movies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesGrid)
