import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  userLogin(e){
    e.preventDefault()
    const { email, password } = this.state
    const { handleLogin } = this.props;

    fetch('/api/users',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({ email, password})
    })
    .then((resp)=> resp.json())
    .then((user) => handleLogin(user.data))

    .catch((error) => {
      alert('Cannot find user, please check email and password')
      console.log(error, 'cannot find user')
    })
    this.setState({ email: '',
                    password: ''
                  })


    console.log(this.state.history)
  }

  render() {
    return (
      <form>
        <input  placeholder='please enter e-mail'
                type='text'
                value={this.state.email}
                id = 'email'
                onChange={(e)=>{
                  this.setState({email:e.target.value.toLowerCase()})
        }}/>
        <input placeholder='please enter password'
               type= 'password'
               value={this.state.password}
               id = 'password'
               onChange={(e)=>{
                this.setState({password:e.target.value})
        }}/>
        <button className = 'login-submit'
                onClick={(e)=>{this.userLogin(e)}}>
          Login
        </button>
      </form>

    )
  }
}
