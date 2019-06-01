import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <Link to="/"><h1>bloggle!</h1></Link>
    <nav>
      { user && <span>Welcome, {user.username}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </header>
)

export default Header
