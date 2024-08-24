import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'react-owl-carousel2/lib/styles.css';
 // Import carousel styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut',
        nav: false,
        dots: true,
        autoplayHoverPause: true,
    };

    return (
        <div className="container-fluid p-0 mb-5">
            {/* <OwlCarousel {...options} className="owl-carousel header-carousel position-relative"> */}
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/Screenshot (428).png" alt="" />
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                        style={{ background: 'rgba(0, 0, 0, .2)' }}
                    >
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown mb-4">
                                        Welcome to Bachpan School! <br /> Where Learning is Fun and Inspiring
                                    </h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                        We foster a love for learning in a nurturing and supportive environment. Our dedicated educators
                                        are committed to guiding each child towards their full potential, ensuring they develop the skills
                                        and confidence needed for lifelong success.
                                    </p>
                                    <a
                                        href="about.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                                    >
                                        Learn More
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                                    >
                                        Enroll
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/homepagepic.jpg" alt="" />
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                        style={{ background: 'rgba(0, 0, 0, .2)' }}
                    >
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown mb-4">
                                        Make A Brighter Future For Your Child
                                    </h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                        We empower students to achieve academic excellence and personal growth. Join us in creating a
                                        bright and promising future for our students.
                                    </p>
                                    <a
                                        href="about.html"
                                        className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                                    >
                                        Learn More
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                                    >
                                        Enroll
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </OwlCarousel> */}
        </div>
    );
};

export default Home;