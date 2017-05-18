import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state={
      email: '',
      password: ''
    }
  }

validateUser(databaseUsers){
  databaseUsers.data.find(eachUser =>{
    console.log(eachUser.email === this.state.email && eachUser.password === this.state.password)
  })
}

  userLogin(e){
    e.preventDefault()
    const { email, password } = this.state
    fetch('/api/users',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({ email, password})
    })
    .then((resp)=> resp.json())
    .then((user)=>console.log(user))
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
  }

  render() {
    return (
      <form>
        <input placeholder='please enter e-mail'
        type='text'
        id = 'email'
        onChange={(e)=>{
          this.setState({email:e.target.value.toLowerCase()})
        }}/>
        <input placeholder='please enter password'
        type= 'password'
        id = 'password'
        onChange={(e)=>{
          this.setState({password:e.target.value})
        }}/>
        <button className = 'login-submit' onClick={(e)=>{this.userLogin(e)}}>Login</button>
      </form>

    )
  }
}
