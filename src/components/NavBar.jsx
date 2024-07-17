
import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/form">FORM</Link></li>
        <li className="navbar-item"><a href="#services">Services</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
