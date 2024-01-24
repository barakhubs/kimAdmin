const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="auto-container">
                    <div className="widgets-section">
                        <div className="row clearfix">
                            <div className="column col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-widget links-widget">
                                    <div className="footer-title">
                                        <h2>Useful Links</h2>
                                    </div>
                                    <div className="widget-content">
                                        <div className="row clearfix">
                                            <div className="widget-column col-md-6 col-sm-6 col-xs-12">
                                                <ul className="footer-list">
                                                    <li>
                                                        <a to="/about">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a to="#">
                                                            Our Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a to="#">
                                                            Why Choose Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a to="/portfolio">
                                                            Our Works
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a to="/blog">
                                                            News & Updates
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget-column col-md-6 col-sm-6 col-xs-12">
                                                <ul className="footer-list">
                                                    <li>
                                                        <a to="/testimonials">
                                                            Testimonials
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a to="/faqs">FAQ’s</a>
                                                    </li>
                                                    <li>
                                                        <a to="/pricing">
                                                            Pricing Plans
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a to="/contact">
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a to="#">
                                                            Privacy Policy
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-widget subscribe-widget">
                                    <div className="footer-title">
                                        <h2>Subscribe Us</h2>
                                    </div>
                                    <div className="widget-content">
                                        <div className="text">
                                            Subscribe us for receive latest
                                            Updates <br /> News and Offers.
                                        </div>
                                        <div className="subscribe-form">
                                            <form
                                                method="post"
                                                action="contact.html"
                                            >
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address..."
                                                        required=""
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="theme-btn"
                                                    >
                                                        <span className="flaticon-right-arrow-1"></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="social-icon-one">
                                            <li>
                                                <a to="#">
                                                    <span className="fa fa-facebook-f"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a to="#">
                                                    <span className="fa fa-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a to="#">
                                                    <span className="fa fa-linkedin"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a to="#">
                                                    <span className="fa fa-rss"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a to="#">
                                                    <span className="fa fa-google-plus"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a to="#">
                                                    <span className="fa fa-vimeo"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="column col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-widget office-widget">
                                    <div className="footer-title">
                                        <h2>Contact us</h2>
                                    </div>
                                    <div className="widget-content">
                                        <div className="single-item-carousel owl-carousel owl-theme">
                                            {/* <div className="office-info">
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Address:
                                                        </strong>
                                                    </li>
                                                    <li>
                                                        Kampala - Uganda{" "}
                                                        <br /> Block 4 / 2C, New
                                                        York 10013, USA.
                                                    </li>
                                                    <li>
                                                        <a to="#">
                                                            Find Us On Map
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> */}

                                            <div className="office-info">
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Phone:
                                                        </strong>
                                                    </li>
                                                    <li>
                                                        +256 788948653{" "}
                                                        <br />
                                                        +256 704316255
                                                    </li>
                                                    <li>
                                                        <a to="tel:+256 788948653">
                                                            Call us now
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="office-info">
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Email:
                                                        </strong>
                                                    </li>
                                                    <li>
                                                        kimdigitary@gmail.com
                                                        <br />
                                                        info@kimdigitary.com
                                                    </li>
                                                    <li>
                                                        <a to="mailto:kimdigitary@gmail.com">
                                                            Mail to us
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    Copyright &copy; 2018 - 2024 <a to="#">Kim Digitary</a>{" "}
                     All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
