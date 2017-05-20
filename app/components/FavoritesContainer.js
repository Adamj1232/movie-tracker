import { connect } from 'react-redux'
import FavoritesGrid from './FavoritesGrid'
import { deleteFavorite } from '../actions/index'

const mapStateToProps = (state) => {
  return { favorites: state.favoritesReducer, userData: state.userReducer }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleDeleteFave: (movie) => {
      dispatch(deleteFavorite(movie))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesGrid)
