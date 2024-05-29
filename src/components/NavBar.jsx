import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Wells Fargo</div>
      <div className="navbar-buttons">
        <Link to="/login">
          <button className="navbar-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="navbar-button">Signup</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
