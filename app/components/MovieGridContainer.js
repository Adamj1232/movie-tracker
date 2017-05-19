import { connect } from 'react-redux'
import MovieGrid from './MovieGrid'
import { addFavorites } from '../actions/index.js'

const mapStateToProps = (state) => {
  return { movies: state.movieReducer, userData: state.userReducer }
}



export default connect(mapStateToProps, null)(MovieGrid)
