import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const businessOwnerNavbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Restaurant Name</Link>
        <SignedInLinks />
      </div>
    </nav>
  )
}

export default businessOwnerNavbar;