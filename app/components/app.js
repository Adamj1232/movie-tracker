import React, { Component } from 'react';
import MovieGridContainer from '../containers/MovieGridContainer'
import NavBarContainer from '../containers/NavBarContainer'
import CreateUserContainer from '../containers/CreateUserContainer'
import LoginPageContainer from '../containers/LoginPageContainer'
import FavoritesContainer from '../containers/FavoritesContainer'
import { Route, Link, Switch } from 'react-router-dom';


export default class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <section>
        <NavBarContainer />
        <Switch>
          <Route exact path ='/' component={MovieGridContainer} />
          <Route exact path ='/CreateAccount'
                 render={()=> { return (<CreateUserContainer history={this.props.history}/>)}}
          />
          <Route exact path='/Login'
                 render={()=> { return (<LoginPageContainer history={this.props.history}/>)}}
          />
          <Route exact path='/Favorites'
                 render={()=> { return (<FavoritesContainer history={this.props.history}/>)}}
          />
        </Switch>
      </section>
    )
  }
}
