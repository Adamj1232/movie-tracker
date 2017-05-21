import { connect } from 'react-redux';
import App from '../components/App';
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
