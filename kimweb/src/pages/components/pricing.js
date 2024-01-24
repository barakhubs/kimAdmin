const Pricing = () => {
    return (
        <>
            <section className="price-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>Pricing Plans</h2>
                        <div className="text">
                        We offer the most affordable pricing to our clients, See here
                        </div>
                    </div>
                    <div className="clearfix">
                        <div className="price-block col-md-4 col-sm-6 col-xs-12">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon">
                                        <img
                                            src="images/icons/price-icon.png"
                                            alt=""
                                        />
                                    </span>
                                </div>
                                <h2>Website Design & Dev't</h2>
                                <ul>
                                    <li>Starting From</li>
                                </ul>
                                <div className="price">
                                    <sup>UGX</sup> 350,000 <span></span>
                                </div>
                                <a href="#" className="theme-btn btn-style-two">
                                    Order Now
                                </a>
                            </div>
                        </div>

                        <div className="price-block active col-md-4 col-sm-6 col-xs-12">
                            <div className="inner-box">
                                <div className="ribbon">popular</div>
                                <div className="icon-box">
                                    <span className="icon">
                                        <img
                                            src="images/icons/price-icon.png"
                                            alt=""
                                        />
                                    </span>
                                </div>
                                <h2>Logo Designing</h2>
                                <ul>
                                    <li>Starting from</li>
                                </ul>
                                <div className="price">
                                    <sup>UGX </sup>100,000 <span></span>
                                </div>
                                <a href="#" className="theme-btn btn-style-two">
                                    Order Now
                                </a>
                            </div>
                        </div>

                        <div className="price-block col-md-4 col-sm-6 col-xs-12">
                            <div className="inner-box">
                                <div className="off">
                                    20%
                                    <br />
                                    OFF
                                </div>
                                <div className="icon-box">
                                    <span className="icon">
                                        <img
                                            src="images/icons/price-icon.png"
                                            alt=""
                                        />
                                    </span>
                                </div>
                                <h2>Social media graphics</h2>
                                <ul>
                                    <li>Starting from</li>
                                </ul>
                                <div className="price">
                                    <sup>UGX </sup>250,000 <span></span>
                                </div>
                                <a href="#" className="theme-btn btn-style-two">
                                    Order Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
