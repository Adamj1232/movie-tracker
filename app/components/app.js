import React, { Component } from 'react';
import MovieGridContainer from './MovieGridContainer'
import { NavBar } from './NavBar'
import CreateUserContainer from './CreateUserContainer'
import LoginPageContainer from './LoginPageContainer'
import { Route, Link, Switch } from 'react-router-dom';



export default class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.props.history)
    return (
      <section>
        <NavBar/>
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
