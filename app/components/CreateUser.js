import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  addNewUser(e) {
    console.log('add user fired')
    e.preventDefault()
    const { name, email, password } = this.state;

    fetch('/api/users/new', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name, email, password})
    })
    .catch((error) => {
      alert('User already exists')
      console.log(error, 'User already exists')
    })
    this.setState({
                    name: '',
                    email: '',
                    password: ''
                  })
  }


  render() {
    return (
      <form className = 'create-user-controls'>
        <input type='text'
               placeholder='please enter name'
               value={this.state.name}
               onChange={(e) => {
                 this.setState({ name: e.target.value })}} />
        <input type='text'
               placeholder='please enter email'
               value={this.state.email}
               onChange={(e) => {
                 this.setState({ email: e.target.value })}} />
        <input type='text'
               placeholder='please enter password'
               value={this.state.password}
               onChange={(e) => {
                 this.setState({ password: e.target.value })}} />
        <button className = 'login-submit'
                onClick={(e) => {
                  this.addNewUser(e)
                }}
          >Submit</button>
      </form>

    )
  }
}
