import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">BLOG</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">home</Link>
          <Link className="nav-item nav-link" to="/tasks">Tasks</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;