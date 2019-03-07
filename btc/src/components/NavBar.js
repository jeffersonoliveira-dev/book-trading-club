import React from 'react'
import { Link } from 'react-router-dom'
import SignedLinks from './SignedLinks.js'
import SignedOutLinks from './SignedOutLinks.js'

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">book-trading-club</Link>
        <SignedLinks/>
        <SignedOutLinks/>
      </div>
    </nav>
  )
}

export default NavBar
