import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavBar = (props) => {
  const { user, handleLogout } = props
  return (
    <section className="nav-bar">
      { userStatus(user, handleLogout) }
    </section>
  )
}

const userStatus = (user, handleLogout) => {
  const userKey = Object.keys(user)

  const capsUserName = () => {
    if(user.name){
      let name = user.name
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }

  if (!userKey.length) {
    return (
      <section className="nav-bar">
        <div className='header'>
          <h1 className='movie-header'>MOVIE</h1>
          <img className="clapper"
             src="../styles/images/clapper.png"
             alt='black and white clapperbox used when filming movies'>
          </img>
          <h1 className='tracker'>
            tracker
          </h1>
        </div>
        <div className="nav-links">
          <NavLink to='/Login' activeClassName='nav-button' className='button'>Login</NavLink>
          <NavLink to='/CreateAccount' activeClassName='nav-button' className='button'>Create Account</NavLink>
          <NavLink to='/' activeClassName='nav-button' className='button'>Home</NavLink>
        </div>
      </section>
    )
  }

  return (
    <section className='nav'>
      <div className="nav-bar">
        <div className='header'>
          <h1 className='movie-header'>MOVIE</h1>
          <img className="clapper"
             src="../styles/images/clapper.png"
             alt='black and white clapperbox used when filming movies'>
          </img>
          <h1 className='tracker'>
            tracker
          </h1>
        </div>
        <div className="nav-links">
          <NavLink to='/' activeClassName='nav-button' className='button'>Home</NavLink>
          <NavLink to='/Favorites' activeClassName='nav-button' className='button'>Favorites</NavLink>
          <NavLink to='/'
                   activeClassName='nav-button'
                   className='button'
                   onClick={ () => {
                    handleLogout(),
                    handleFaveLogout()
                   }}>
            Sign Out
          </NavLink>
        </div>
      </div>
      <h2 className='user-name'>Welcome { capsUserName() }</h2>
    </section>
  )
}
