import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const About = () => {

    return (
        <>
            <section
                className="page-title"
                style={{
                    backgroundImage: 'url("images/background/pattern-4.png")',
                }}
            >
                <div className="auto-container">
                    <h1>About us</h1>
                </div>
                <div className="page-info">
                    <div className="auto-container">
                        <div className="inner-container">
                            <ul className="bread-crumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>About us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="we-are-section">
                <div class="auto-container">
                    <div class="row clearfix">
                        <div class="content-column col-md-6 col-sm-12 col-xs-12">
                            <div class="inner-column">
                                <h2>Who We are</h2>
                                <div class="bold-text">We're commited to serve you around the clock. </div>
                                <div class="text">
                                    <p>
                                        Kim Digitary is a full-service digital marketing agency that provides ROI (Return On Investment) Services. We are a service-based startup founded with an aim of making new strategies that help businesses reach clients regardless of the campaign size and budget.
                                    </p>
                                </div>
                                <Link to="/contact" class="theme-btn btn-style-one">Get in Touch</Link>
                            </div>
                        </div>
                        <div class="carousel-column col-md-6 col-sm-12 col-xs-12">
                            <div class="inner-column">

                                <div class="single-verticle-carousel">
                                    <div class="slide">

                                        <div class="monthy-block">
                                            <div class="inner-box">
                                                <div class="month"><span class="dott"></span></div>
                                                <h3><a href="#">Mission</a></h3>
                                                <div class="text">
                                                    <ul>
                                                        <li>Bridging the gap between the business and the target audience.</li>
                                                        <li>Creating pain relieving strategies to business’ target audience.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="monthy-block">
                                            <div class="inner-box">
                                                <div class="month"><span class="dott"></span></div>
                                                <h3><a href="#">Vision</a></h3>
                                                <div class="text">Being a 360 degrees digital marketing service provider to all businesses throughout the region and becoming an integral part of our clients’ success.</div>
                                            </div>
                                        </div>

                                        <div class="monthy-block">
                                            <div class="inner-box">
                                                <div class="month"><span class="dott"></span></div>
                                                <h3><a href="#">Slogan</a></h3>
                                                <div class="text">Building Brands, Branding Brands</div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-section-two">
                <div class="auto-container">
                    <div class="sec-title light centered">
                        <h2>Why Choose Us</h2>
                    </div>
                    <div class="row clearfix">

                        <div class="services-section-three col-md-4 col-sm-6 col-xs-12">
                            <div class="inner-box">
                                <h3><a href="services.html">6 Years Experience</a></h3>
                                <div class="title">In this Industry</div>
                                <div class="image">
                                    <img src="images/icons/services-4.png" alt="" />
                                </div>
                                <div class="text">Creating pain relieving strategies to business’ target audience.</div>
                            </div>
                        </div>

                        <div class="services-section-three col-md-4 col-sm-6 col-xs-12">
                            <div class="inner-box">
                                <h3><a href="services.html">Experienced Talented</a></h3>
                                <div class="title">Team</div>
                                <div class="image">
                                    <img src="images/icons/services-5.png" alt="" />
                                </div>
                                <div class="text">Commited to serve you around the clock.</div>
                            </div>
                        </div>

                        <div class="services-section-three col-md-4 col-sm-6 col-xs-12">
                            <div class="inner-box">
                                <h3><a href="services.html">A customer is our </a></h3>
                                <div class="title">First Priority</div>
                                <div class="image">
                                    <img src="images/icons/services-6.png" alt="" />
                                </div>
                                <div class="text">We're fellow business owners who understand day to day business' milestone.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section>
                <div class="accordian-boxed">
                    <h3>Professional Tools</h3>

                    <ul class="accordion-box">

                        <li class="accordion block active-block">
                            <div class="acc-btn active"><div class="icon-outer"><img src="images/icons/acc-1.png" alt="" /></div>Keyword Suggestion Tool</div>
                            <div class="acc-content" style={{ display: 'block' }}>
                                <div class="content">
                                    <div class="text">Pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master builder of human born and I will give you a complete account of the system.</div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion block">
                            <div class="acc-btn"><div class="icon-outer"><img src="images/icons/acc-2.png" alt="" /></div>Keyword List Generator</div>
                            <div class="acc-content current" style={{ display: 'none' }}>
                                <div class="content">
                                    <div class="text">Pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master builder of human born and I will give you a complete account of the system.</div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion block">
                            <div class="acc-btn"><div class="icon-outer"><img src="images/icons/acc-3.png" alt="" /></div>Link Suggestion Tool</div>
                            <div class="acc-content" style={{ display: 'none' }}>
                                <div class="content">
                                    <div class="text">Pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master builder of human born and I will give you a complete account of the system.</div>
                                </div>
                            </div>
                        </li>

                    </ul>

                </div>
            </section> */}

            <section class="marketing-section-two" style={{ backgroundImage: 'url(images/background/3.png)' }}>
                <div class="auto-container">
                    <div class="steps-blocks">
                        <div class="row clearfix">

                            <div class="step-block col-md-3 col-sm-6 col-xs-12">
                                <div class="inner-box">
                                    <div class="icon-box">
                                        <span class="icon"><img src="images/icons/market-icon-1.png" alt="" /></span>
                                    </div>
                                    <h3><a href="services.html">Get Client’s Goal</a></h3>
                                    <div class="step-number">Step 01</div>
                                </div>
                            </div>

                            <div class="step-block col-md-3 col-sm-6 col-xs-12">
                                <div class="inner-box">
                                    <div class="icon-box">
                                        <span class="icon"><img src="images/icons/market-icon-2.png" alt="" /></span>
                                    </div>
                                    <h3><a href="services.html">Realize Challenges</a></h3>
                                    <div class="step-number">Step 02</div>
                                </div>
                            </div>

                            <div class="step-block col-md-3 col-sm-6 col-xs-12">
                                <div class="inner-box">
                                    <div class="icon-box">
                                        <span class="icon"><img src="images/icons/market-icon-3.png" alt="" /></span>
                                    </div>
                                    <h3><a href="services.html">Find Solution</a></h3>
                                    <div class="step-number">Step 03</div>
                                </div>
                            </div>

                            <div class="step-block col-md-3 col-sm-6 col-xs-12">
                                <div class="inner-box">
                                    <div class="icon-box">
                                        <span class="icon"><img src="images/icons/market-icon-4.png" alt="" /></span>
                                    </div>
                                    <h3><a href="services.html">Final Result</a></h3>
                                    <div class="step-number">Step 04</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <h3>We’ll Make Your Web Presence More Efficient!</h3>
                    <Link to="/contact" class="theme-btn btn-style-one">Get in Touch</Link>
                </div>
            </section>

            {/* <section class="team-section">
                <div class="auto-container">
                    <div class="sec-title centered">
                        <h2>Meet Our Experts</h2>
                        <div class="text">We help you generate high-quality online sales leads by implementing highly structured, persuasive Internet marketing campaigns.</div>
                    </div>
                    <div class="row clearfix">

                        <div class="team-block col-md-3 col-sm-6 col-xs-12">
                            <div class="inner-box">
                                <div class="image">
                                    <img src="images/resource/team-1.jpg" alt="" />
                                </div>
                                <div class="lower-content-box">
                                    <div class="designation">CEO / Founder</div>
                                    <h3>Mark Fletcher</h3>
                                    <ul class="social-icon-two">
                                        <li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
                                        <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                        <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="team-block col-md-3 col-sm-6 col-xs-12">
                            <div class="inner-box">
                                <div class="image">
                                    <img src="images/resource/team-2.jpg" alt="" />
                                </div>
                                <div class="lower-content-box">
                                    <div class="designation">President</div>
                                    <h3>Jason Garrison</h3>
                                    <ul class="social-icon-two">
                                        <li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
                                        <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                        <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="team-block col-md-3 col-sm-6 col-xs-12">
                            <div class="inner-box">
                                <div class="image">
                                    <img src="images/resource/team-3.jpg" alt="" />
                                </div>
                                <div class="lower-content-box">
                                    <div class="designation">Consultant</div>
                                    <h3>Clark Sunguy</h3>
                                    <ul class="social-icon-two">
                                        <li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
                                        <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                        <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="team-block col-md-3 col-sm-6 col-xs-12">
                            <div class="inner-box">
                                <div class="image">
                                    <img src="images/resource/team-4.jpg" alt="" />
                                </div>
                                <div class="lower-content-box">
                                    <div class="designation">Administrator</div>
                                    <h3>Thomas Moriz</h3>
                                    <ul class="social-icon-two">
                                        <li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
                                        <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                        <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
        </>
    );
}

export default About;
