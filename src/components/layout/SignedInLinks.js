import React from 'react';
import { NavLink } from 'react-router-dom';


// When the owner finishes going through the passport authentication, these are the links that will appear upon logging in:

const SignedInLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/'>Dashboard</NavLink></li>
      <li><NavLink to='/'>Menu</NavLink></li>
      <li><NavLink to='/'>Announcements</NavLink></li>
      <li><NavLink to='/'>About</NavLink></li>
      <li><NavLink to='/'>Log-out</NavLink></li>

      {/* This will only work when you get to link it to the user authentication for Business Owner. For now this line of code will be commented out. */}
      {/* <li><NavLink to='/' className='btn btn-floating pink lighten-1'>BO</NavLink></li> */}
    </ul>
  )
}

export default SignedInLinks;