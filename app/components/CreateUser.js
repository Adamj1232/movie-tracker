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
    e.preventDefault()
    const { name, email, password } = this.state;

    fetch('/api/users/new', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name, email, password})
    })
    .then((resp) => {
      resp.status !== 200 ?
        alert('User already exists, please login') :
        this.changeRoute()
    })
    // .then(() => this.setState({ name: '',
    //                             email: '',
    //                             password: ''
    //                           }))

    .catch((error) => {
      console.log(error, 'user already exists')
    })
  }

  changeRoute(){
    const { handleSubmit, history } = this.props
    this.props.history.replace('/')
    handleSubmit(this.state)

  }

  render() {
    return (
      <form className = 'create-user-controls'>
        <input type='text'
               value={this.state.name}
               placeholder='please enter name'
               onChange={(e) => {
                 this.setState({ name: e.target.value })}} />
        <input type='text'
               value={this.state.email}
               placeholder='please enter email'
               onChange={(e) => {
                 this.setState({ email: e.target.value.toLowerCase() })}} />
        <input type='password'
               value={this.state.password}
               placeholder='please enter password'
               onChange={(e) => {
                 this.setState({ password: e.target.value })}} />
        <button className = 'login-submit'
                onClick={(e) => {
                  this.addNewUser(e)
                }}>
        Submit
        </button>
      </form>

    )
  }
}
