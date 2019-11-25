import React from 'react';
import { NavLink } from 'react-router-dom';


// When the owner finishes going through the passport authentication, these are the links that will appear upon logging in:

const SignedInLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/'>Dashboard</NavLink></li>
      <li><NavLink to='/menu'>Menu</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      {/* This link needs to be associated with an id/route from the MERN Authentication branch */}
      <li><NavLink to='/'>Log-out</NavLink></li>

      {/* This will only work when you get to link it to the user authentication for Business Owner. For now this line of code will be commented out. */}
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'></NavLink></li>
    </ul>
  )
}

export default SignedInLinks;