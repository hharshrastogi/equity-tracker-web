
import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#services">Services</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
