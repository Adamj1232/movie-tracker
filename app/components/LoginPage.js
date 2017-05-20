import React, { Component } from 'react';
// import { allFavorites } from './actions/index'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  cleanFavData(favData){
    return  favData.reduce((favObj, movie)=> {
      if(!favObj[movie.title]){
        favObj[movie.title]=movie
      }
      console.log(favObj)
      return favObj
    }, {})
  }


getFavorites(userId){
  const { handleFavorites } = this.props;
  console.log(userId)
    fetch (`api/users/${userId}/favorites`)
  .then((resp) => resp.json())
  .then((json) =>  this.cleanFavData(json.data))
  .then((cleanJSON) =>  handleFavorites(cleanJSON))
  .catch(() =>
    console.log('fetch error')
  )}

  userLogin(e){
    e.preventDefault()
    const { email, password } = this.state

    fetch('/api/users',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({ email, password})
    })
    .then((resp)=> resp.json())
    .then((user) => this.changeHistory(user.data))

    .catch((error) => {
      alert('Cannot find user, please check email and password')
      console.log(error, 'cannot find user')
    })
    this.setState({ email: '',
                    password: ''
                  })
  }

  changeHistory(userInfo){
    const { handleLogin, history, handleFavorites } = this.props;
    if(userInfo) {
      handleLogin(userInfo)
      this.getFavorites(userInfo.id)
      this.props.history.replace('/')
    } else {
      alert('Cannot find user, please check email and password')
    }
  }

  verifyInputFields(e){
    e.preventDefault()
    const { name, email, password } = this.state;
    if(email === '' || password === ''){
        return alert('Please enter your user name and password')
    } else {
      this.userLogin(e)
    }
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
                onClick={(e)=>{this.verifyInputFields(e)}}>
          Login
        </button>
      </form>

    )
  }
}
