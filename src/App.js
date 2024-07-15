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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './AdmissionForm';
import Gallery from './component1/Gallery';
import About from '/workspaces/BachpanSchoolProject/src/component2/about.js';
import Admission from './component4/Admission';
import Contact from '/workspaces/BachpanSchoolProject/src/component3/contact.js';
import Navbar from './Component/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

