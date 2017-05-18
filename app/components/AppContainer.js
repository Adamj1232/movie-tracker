import { connect } from 'react-redux';
import App from './app';
import { upcomingFilms } from '../actions/index'

function mapStateToProps(state) {
 return { state }
}

function mapDispatchToProps(dispatch) {
 return {
   handleUpcomingFilms: (movies) => {
     dispatch(upcomingFilms(movies))
   }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
