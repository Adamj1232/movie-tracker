import React, { Component } from 'react';
import MovieGridContainer from './MovieGridContainer'
import NavBarContainer from './NavBarContainer'
import CreateUserContainer from './CreateUserContainer'
import LoginPageContainer from './LoginPageContainer'
import { Route, Link, Switch } from 'react-router-dom';


export default class App extends Component {
  constructor() {
    super()
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
        </Switch>
      </section>
    )
  }
}
