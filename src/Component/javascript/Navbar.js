import React from 'react';
import { Link } from 'react-router-dom';
import '/workspaces/BachpanSchoolProject/src/Component/style/Navbar.css';
// import logo from './Component/images/bachpanlogo.png'; 
import MetaData from '../MetaData.js';

function Navbar() {
  return (
    
    <div className="Nav">
      <MetaData title="Bachpan School"/>
      <header>
        <nav className="navbar">
          {/* <img src={logo} alt="logo" className="App-logo" /> */}
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/admission" className="nav-link">Admission</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
