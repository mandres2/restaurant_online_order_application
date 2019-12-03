import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/'>Dashboard</NavLink></li>
      <li><a href="https://restaurant-menu-link.herokuapp.com/" target="_blank" rel="noopener noreferrer">
Menu
</a></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/'>Log-out</NavLink></li>

      {/* This will only work when you get to link it to the user authentication for Business Owner. For now this line of code will be commented out. */}
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'></NavLink></li>
    </ul>
  )
}

export default SignedInLinks;