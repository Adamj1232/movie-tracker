import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor(props) {
    super(props)
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
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error))
    this.props.handleSubmit(this.state)
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
  }


  render() {
    return (
      <form className = 'create-user-controls'>
        <input type='text'
               placeholder='please enter name'
               onChange={(e) => {
                 this.setState({ name: e.target.value })}} />
        <input type='text'
               placeholder='please enter email'
               onChange={(e) => {
                 this.setState({ email: e.target.value.toLowerCase() })}} />
        <input type='password'
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
