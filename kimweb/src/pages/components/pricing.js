const Pricing = () => {
    return (
        <>
            <section className="price-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>Pricing Plans</h2>
                        <div className="text">
                            We help you generate high-quality online sales leads
                            by implementing highly structured, <b /> persuasive
                            Internet marketing campaigns.
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
                                <h2>Fast</h2>
                                <ul>
                                    <li>5 Analytics Campaigns</li>
                                    <li>300 Keywords</li>
                                    <li>250,000 Crawled Pages</li>
                                    <li>-</li>
                                    <li>15 Social Accounts</li>
                                </ul>
                                <div className="price">
                                    <sup>$</sup>99 <span>/ per month</span>
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
                                <h2>hot</h2>
                                <ul>
                                    <li>25 Analytics Campaigns</li>
                                    <li>1,900 Keywords</li>
                                    <li>1,250,000 Crawled Pages</li>
                                    <li>Includes Branded Reports</li>
                                    <li>50 Social Accounts</li>
                                </ul>
                                <div className="price">
                                    <sup>$</sup>120 <span>/ per month</span>
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
                                <h2>Bomb</h2>
                                <ul>
                                    <li>50 Analytics Campaigns</li>
                                    <li>2,500 Keywords</li>
                                    <li>1,250,000 Crawled Pages</li>
                                    <li>Includes Branded Reports</li>
                                    <li>75 Social Accounts</li>
                                </ul>
                                <div className="price">
                                    <sup>$</sup>199 <span>/ per month</span>
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
