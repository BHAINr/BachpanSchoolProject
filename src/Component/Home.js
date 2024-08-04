import React from 'react';

import { Link } from 'react-router-dom'; // If using react-router-dom
// import screenshot from '.../images/background'; // Adjust the path to your image
// import homepagepic from './path/to/img/homepagepic.jpg'; // Adjust the path to your image

const Home = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative">
          {/* <img className="img-fluid" src={screenshot} alt="" /> */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    Welcome to Bachpan School! <br /> Where Learning is Fun and Inspiring
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    We foster a love for learning in a nurturing and supportive environment. Our dedicated educators are committed to guiding each child towards their full potential, ensuring they develop the skills and confidence needed for lifelong success.
                  </p>
                  <Link to="/about" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                  <Link to="/enroll" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Enroll</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          {/* <img className="img-fluid" src={homepagepic} alt="" /> */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    We empower students to achieve academic excellence and personal growth. Join us in creating a bright and promising future for our students.
                  </p>
                  <Link to="/about" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                  <Link to="/enroll" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Enroll</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;