import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/">new project</NavLink></li>
      <li><NavLink to="/">log out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighthe-1" >btc</NavLink></li>
    </ul>
  )
}

export default SignedLinks
