import React from 'react';

export const NavBar = () => {
  return (
    <section className="nav-bar">
      <h1> Movie</h1><h1 className='tracker'>Tracker</h1>
      <button className='login-button'>Login</button>
      <button className='account-button'>Create Account</button>
      <button className='fav-button'>Favorites</button>
      <button className='home-button'>Home</button>
    </section>
  )
}
