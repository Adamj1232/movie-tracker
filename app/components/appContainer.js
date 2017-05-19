import { connect } from 'react-redux';
import App from './app';

function mapStateToProps(state) {
  return { state }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     handleUpcomingFilms: (movies) => {
//       dispatch(upcomingFilms(movies))
//     }
//   }
// }

export default connect(mapStateToProps, null)(App)
