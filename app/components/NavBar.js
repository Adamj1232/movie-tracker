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

  if (!userKey.length) {
    return (
      <section className="nav-bar">
        <h1> Movie</h1><h1 className='tracker'>Tracker</h1>
        <NavLink to='/Login' activeClassName='nav-button' className='button'>Login</NavLink>
        <NavLink to='/CreateAccount' activeClassName='nav-button' className='button'>Create Account</NavLink>
        <NavLink to='/' activeClassName='nav-button' className='button'>Home</NavLink>
      </section>
    )
  }

  return (
    <section className='nav'>
      <div className="nav-bar">
      <h1> Movie</h1><h1 className='tracker'>Tracker</h1>
      <NavLink to='/' activeClassName='nav-button' className='button'>Home</NavLink>
      <NavLink to='/Favorites' activeClassName='nav-button' className='button' onClick={ () => { handleFavorites() }}>Favorites</NavLink>
      <NavLink to='/'
               activeClassName='nav-button'
               className='button'
               onClick={ () => { handleLogout() }}>Sign Out</NavLink>
      </div>
      <h2 className='user-name'>Welcome {user.name}</h2>
    </section>
  )
}
