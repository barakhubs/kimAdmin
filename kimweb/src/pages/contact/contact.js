import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Contact = () => {

    return (
        <>
        <section
                className="page-title"
                style={{
                    backgroundImage: 'url("images/background/pattern-4.png")',
                }}
            >
                <div className="auto-container">
                    <h1>Get in Touch</h1>
                </div>
                <div className="page-info">
                    <div className="auto-container">
                        <div className="inner-container">
                            <ul className="bread-crumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>Get in Touch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        <section className="contact-section">
            <div className="auto-container">
                <div className="row clearfix">

                    <div className="contact-form-column col-md-8 col-sm-12 col-xs-12">
                        <div className="inner-column">
                            <h2>Drop Your Message Here</h2>
                            <div className="text">We recently helped a small business grow from break-even to over $1 Million profit in less than 2 years, Have a general question, find below contact details .</div>
                            <div className="contact-form">
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="column col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="username" placeholder="Name*" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Email*" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="subject" placeholder="Subject" required/>
                                            </div>
                                        </div>

                                        <div className="column col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <textarea name="message" placeholder="Your Message..."></textarea>
                                            </div>
                                        </div>
                                        <div className="column btn-column col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form">Submit Now</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact-info-column col-md-4 col-sm-12 col-xs-12">
                        <div className="inner-column">
                            <div className="lower-box">
                                <ul className="info-list">
                                    <li><span className="icon"><img src="images/icons/address-icon.png" alt="" /></span> <strong>Address:</strong> 32, 2nd Breaking Stret, Kampala ,Uganda 10002.</li>
                                    <li><span className="icon"><img src="images/icons/phone-icon.png" alt="" /></span> <strong>Call Us:</strong><br/> +256 7567 89 012 & 79 023</li>
                                    <li><span className="icon"><img src="images/icons/mail-icon.png" alt="" /></span> <strong>Mail Us:</strong> info@kimdigitary.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="map-section">
            <div className="map-outer">
                <div className="map-canvas"
                    data-zoom="12"
                    data-lat="-37.817085"
                    data-lng="144.955631"
                    data-type="roadmap"
                    data-hue="#ffc400"
                    data-title="Envato"
                    data-icon-path="images/icons/map-marker.png"
                    data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@kimdigitary.com'>info@kimdigitary.com</a>">
                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;
