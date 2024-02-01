import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ServicesSidebar from "./components/sidebar";

const WebDesign = () => {

    return (
        <>
            <section
                className="page-title"
                style={{
                    backgroundImage: 'url("images/background/pattern-4.png")',
                }}
            >
                <div className="auto-container">
                    <h1>Website Design</h1>
                </div>
                <div className="page-info">
                    <div className="auto-container">
                        <div className="inner-container">
                            <ul className="bread-crumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="#">Services</Link>
                                </li>
                                <li>Website Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div class="sidebar-page-container">
                <div class="auto-container">
                    <div class="row clearfix">

                        <div class="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <ServicesSidebar />
                        </div>

                        <div class="content-side col-lg-9 col-md-8 col-sm-12 col-xs-12">
                            <div class="services-single">
                                <div class="inner-box">
                                    <h2>Website Design</h2>
                                    <div class="image">
                                        <img src="images/resource/service-single.jpg" alt="" />
                                    </div>
                                    <div class="lower-content">
                                        <div class="text">
                                            <p>
                                                Through meticulous research and discovery, we delve into your business, industry, and target audience, extracting unique selling propositions to inform our design strategy. Our process includes wireframing and prototyping, ensuring a visualized structure and functionality before full-scale development. The custom design phase focuses on creating visually stunning, cohesive visuals that align with your brand identity, incorporating elements like color schemes, typography, and imagery. In development, we prioritize responsiveness, guaranteeing a seamless experience across devices. Our websites are not just aesthetically pleasing; they are robust in functionality, supporting your brand's growth by providing an engaging online presence.
                                            </p>
                                        </div>
                                        <div class="two-column">
                                            <div class="row clearfix">

                                                <div class="graph-column col-md-6 col-sm-6 col-xs-12">
                                                    <div class="inner-column">
                                                        <h4>OUTSTANDING LOOKS</h4>
                                                        <div class="services-text">Our website are eye attracting to visitors, Our teams blends all company details in modules that are simple, precise and attractive.</div>
                                                    </div>
                                                </div>

                                                <div class="graph-column col-md-6 col-sm-6 col-xs-12">
                                                    <div class="inner-column">
                                                        <h4>SECURITY A PRIORITY</h4>
                                                        <div class="services-text">A client's company data is kept secure with the latest tools and technologies. Never worry about scams and any other cyber attacks.</div>
                                                    </div>
                                                </div>

                                                <div class="graph-column col-md-6 col-sm-6 col-xs-12">
                                                    <div class="inner-column">
                                                        <h4>COST EFFECTIVE PLANS
                                                        </h4>
                                                        <div class="services-text">All our plans are price friendly to everyone and encompasses all features. From as low as UGX 350,000 ($100) with all technologies encompassed.</div>
                                                    </div>
                                                </div>

                                                <div class="graph-column col-md-6 col-sm-6 col-xs-12">
                                                    <div class="inner-column">
                                                        <h4>DEVICE RESPONSIVE
                                                        </h4>
                                                        <div class="services-text">Websites developed by Kim Digitary are responsive to all web browsers and devices ranging from smart phones, tablets and computers.</div>
                                                    </div>
                                                </div>

                                                <div class="graph-column col-md-6 col-sm-6 col-xs-12">
                                                    <div class="inner-column">
                                                        <h4>INSTANT SUPPORT</h4>
                                                        <div class="services-text">Our team is available to respond to any inquiries from a client instantly and effectively.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="graph-column col-md-6 col-sm-6 col-xs-12">
                                                    <div class="inner-column">
                                                        <h4>TRUST</h4>
                                                        <div class="services-text">What we promise to offer is what is provide to our clients. IN summary what we promise, is what we give,
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default WebDesign;
