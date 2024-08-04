// //import logo from './logo.svg';
// //import './App.css';

// import AdmissionForm from "./AdmissionForm";
// import Navbar from "./Component/Navbar";

// function App() {
//   return (
//     // <div>
//     //   <Navbar />
//     //   <AdmissionForm />
//     // </div>
//   );
// }

// export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home.js';
import Gallery from './Component/javascript/Gallery.js';
import About from './Component/javascript/about.js';
// import Facilities from './Component/javascript/facility.js';
import Contact from './Component/javascript/contact.js';
import Navbar from './Component/javascript/Navbar.js';
import AdmissionForm from './Component/javascript/AdmissionForm.js';


function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/facility" element={<Facilities />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

