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
                                        <h2>Usefull Links</h2>
                                    </div>
                                    <div className="widget-content">
                                        <div className="row clearfix">
                                            <div className="widget-column col-md-6 col-sm-6 col-xs-12">
                                                <ul className="footer-list">
                                                    <li>
                                                        <a href="#">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Our Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Why Choose Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            How It Works
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            News & Updates
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget-column col-md-6 col-sm-6 col-xs-12">
                                                <ul className="footer-list">
                                                    <li>
                                                        <a href="#">
                                                            Testimonials
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">FAQ’s</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Pricing Plans
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
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
                                            Subscribe us for recieve latest
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
                                                <a href="#">
                                                    <span className="fa fa-facebook-f"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="fa fa-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="fa fa-linkedin"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="fa fa-rss"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="fa fa-google-plus"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
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
                                        <h2>Corporate Office</h2>
                                    </div>
                                    <div className="widget-content">
                                        <div className="single-item-carousel owl-carousel owl-theme">
                                            <div className="office-info">
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Address:
                                                        </strong>
                                                    </li>
                                                    <li>
                                                        425 Cowly Brown Road{" "}
                                                        <br /> Block 4 / 2C, New
                                                        York 10013, USA.
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Find Us On Map
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="office-info">
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Address:
                                                        </strong>
                                                    </li>
                                                    <li>
                                                        425 Cowly Brown Road{" "}
                                                        <br /> Block 4 / 2C, New
                                                        York 10013, USA.
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Find Us On Map
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
                    Copyright &copy; 2012-2018 The <a href="#">Kim Digitary</a>{" "}
                     All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
