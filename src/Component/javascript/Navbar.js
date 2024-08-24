import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Navbar.css'; // If you want to add any custom CSS
import logo from './images/bachpanlogo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" className="navbar-brand">
                <h1 className="m-0 text-primary">
                    <img src={logo} alt="School-logo" style={{ width: '10%' }} />
                </h1>
            </a>
            <button 
                type="button" 
                className="navbar-toggler" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/facility" className="nav-item nav-link">Facilities</Link>
                <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
                <Link to="/admission" className="nav-item nav-link">Admission</Link>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;