import React from 'react';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome CSS

const Contact = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-3">Get In Touch</h1>
                    <p>We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us through any of the following methods:</p>
                </div>
                <div className="row g-4 mb-5">
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '75px', height: '75px' }}>
                            <i className="fa fa-map-marker fa-2x text-danger"></i>
                        </div>
                        <h6>
                            <a href="https://maps.app.goo.gl/sCjDqZwSiHnmPdvh8" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-map-marker me-3"></i>Bachpan School, Ladnun
                            </a>
                        </h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '75px', height: '75px' }}>
                            <i className="fa fa-envelope-open fa-2x text-danger"></i>
                        </div>
                        <h6>
                            <a href="mailto:ramasharma1582001@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-envelope me-3"></i>bachpanladnun@gmail.com
                            </a>
                        </h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '75px', height: '75px' }}>
                            <i className="fa fa-phone fa-2x text-danger"></i>
                        </div>
                        <h6>
                            <a href="tel:9024623069" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-phone me-3"></i>+91 9024623069
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
