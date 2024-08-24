import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome CSS
import './Facility.css';

const Facilities = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-3">School Facilities</h1>
                    <p>Our school offers a wide range of facilities, including safe transportation, a positive environment, and fun learning experiences.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6">
                        <div className="facility-item">
                            <div className="facility-icon bg-primary">
                                <span className="bg-primary"></span>
                                <i className="fa fa-bus fa-3x text-primary"></i>
                                <span className="bg-primary"></span>
                            </div>
                            <div className="facility-text bg-primary">
                                <h3 className="text-primary mb-3">School Van</h3>
                                <p className="mb-0">Our school provides a reliable and safe van service for students, ensuring convenient and secure transportation to and from school.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="facility-item">
                            <div className="facility-icon bg-success">
                                <span className="bg-success"></span>
                                <i className="fa fa-baseball fa-3x text-success"></i>
                                <span className="bg-success"></span>
                            </div>
                            <div className="facility-text bg-success">
                                <h3 className="text-success mb-3">Play Area</h3>
                                <p className="mb-0">Our school features a dedicated play area designed to inspire fun and creativity among students.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="facility-item">
                            <div className="facility-icon bg-warning">
                                <span className="bg-warning"></span>
                                <i className="fa fa-home fa-3x text-warning"></i>
                                <span className="bg-warning"></span>
                            </div>
                            <div className="facility-text bg-warning">
                                <h3 className="text-warning mb-3">Healthy Canteen</h3>
                                <p className="mb-0">Our school embraces a fun learning facility that makes education an engaging and enjoyable experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="facility-item">
                            <div className="facility-icon bg-info">
                                <span className="bg-info"></span>
                                <i className="fa fa-chalkboard-teacher fa-3x text-info"></i>
                                <span className="bg-info"></span>
                            </div>
                            <div className="facility-text bg-info">
                                <h3 className="text-info mb-3">Positive Learning</h3>
                                <p className="mb-0">Our school provides a positive learning environment where students feel supported and motivated to succeed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;