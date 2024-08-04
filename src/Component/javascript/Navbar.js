import React from 'react';
import { Link } from 'react-router-dom'; // If using react-router-dom
import logo from './images/bachpanlogo.png'; // Adjust the path to your image

const Navbar = () => {
  return (
    <>
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only"></span>
        </div>
      </div>
      

      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <Link to="/" className="navbar-brand">
          <h1 className="m-0 text-primary">
            <img src={logo} alt="School-logo" width="10%" />
          </h1>
        </Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/facility" className="nav-item nav-link">Facilities</Link>
            <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
            <Link to="/admission" className="nav-item nav-link">Admission</Link>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;