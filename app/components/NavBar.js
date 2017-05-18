import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <section className="nav-bar">
      <h1> Movie</h1><h1 className='tracker'>Tracker</h1>
      <NavLink to='/Login' activeClassName='nav-button' className='button'>Login</NavLink>
      <NavLink to='/CreateAccount' activeClassName='nav-button' className='button'>Create Account</NavLink>
      <NavLink to='/Favorites' activeClassName='nav-button' className='button'>Favorites</NavLink>
      <NavLink exact to='/' activeClassName='nav-button' className='button'>Home</NavLink>
    </section>
  )
}
