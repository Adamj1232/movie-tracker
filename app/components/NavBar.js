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
        <h1>MOVIE<span className='tracker'> tracker</span></h1>
        <div className="nav-links">
          <NavLink to='/Login' activeClassName='nav-button' className='button'>Login</NavLink>
          <NavLink to='/CreateAccount' activeClassName='nav-button' className='button'>Create Account</NavLink>
          <NavLink to='/' activeClassName='nav-button' className='button'>Home</NavLink>
        </div>
      </section>
    )
  }

  let name = user.name
  let capsName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <section className='nav'>
      <div className="nav-bar">
      <h1>MOVIE<span className='tracker'> tracker</span></h1>
      <div className="nav-links">
        <NavLink to='/' activeClassName='nav-button' className='button'>Home</NavLink>
        <NavLink to='/Favorites' activeClassName='nav-button' className='button'>Favorites</NavLink>
        <NavLink to='/'
                 activeClassName='nav-button'
                 className='button'
                 onClick={ () => { handleLogout(), handleFaveLogout() }}>Sign Out</NavLink>
      </div>
      </div>
      <h2 className='user-name'>Welcome {capsName}</h2>
    </section>
  )
}
