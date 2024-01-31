import { useEffect } from "react";

const WorkFlow = () => {
    useEffect(() => {
        if (window.jQuery) {
            const jQuery = window.jQuery;
            jQuery('.single-item-carousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                nav: true, // Add this for navigation arrows
                navText: ["<i class='flaticon-left-arrow-1'></i>", "<i class='flaticon-right-arrow-1'></i>"], // Optional: customize the navigation text/icons
                // ...other options
            });
        }

        return () => {
            if (window.jQuery) {
                const jQuery = window.jQuery;
                jQuery('.single-item-carousel').owlCarousel('destroy');
            }
        }
    }, []);
    return (
        <>
            <section className="marketing-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="image-column col-md-6 col-sm-12 col-xs-12">
                            <div className="image">
                                <img src="images/programming.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="content-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <h2>
                                Your Digital Success <br></br>Starts Here with Kim Digitary!
                                </h2>
                                <div className="single-item-carousel owl-carousel owl-theme">
                                    <div className="market-content">
                                        <div className="content-inner">
                                            <div className="content-number">1.</div>
                                            <h3>Elevating Your Brand in the Digital World</h3>
                                            <div className="text">
                                            We make imaginative, eye-catching logos, blurbs, flyers, and websites that are competitive and moderate whereas keeping your campaign’s objective in intellect.
                                            </div>

                                            <div className="featured-block-three">
                                                <div className="featured-inner">
                                                    <div className="icon-box">
                                                        <span className="icon">
                                                            <img
                                                                src="images/icons/featured-icon-10.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Save your time</h4>
                                                    <div className="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="featured-block-three">
                                                <div className="featured-inner">
                                                    <div className="icon-box">
                                                        <span className="icon">
                                                            <img
                                                                src="images/icons/featured-icon-11.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Money Saving</h4>
                                                    <div className="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="market-content">
                                        <div className="content-inner">
                                            <div className="content-number">2.</div>
                                            <h3>Results-driven approach: Your success is our priority.</h3>
                                            <div className="text">
                                            We focuse on the results-driven methodology with an innovative, committed team behind its success.
                                            </div>

                                            <div className="featured-block-three">
                                                <div className="featured-inner">
                                                    <div className="icon-box">
                                                        <span className="icon">
                                                            <img
                                                                src="images/icons/featured-icon-10.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Save your time</h4>
                                                    <div className="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="featured-block-three">
                                                <div className="featured-inner">
                                                    <div className="icon-box">
                                                        <span className="icon">
                                                            <img
                                                                src="images/icons/featured-icon-11.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Money Saving</h4>
                                                    <div className="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="market-content">
                                        <div className="content-inner">
                                            <div className="content-number">3.</div>
                                            <h3>Let's embark on your digital journey together.</h3>
                                            <div className="text">
                                            Connect with Kim Digitary for personalized consultations, emphasizing accessibility and responsiveness.
                                            </div>

                                            <div className="featured-block-three">
                                                <div className="featured-inner">
                                                    <div className="icon-box">
                                                        <span className="icon">
                                                            <img
                                                                src="images/icons/featured-icon-10.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Save your time</h4>
                                                    <div className="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="featured-block-three">
                                                <div className="featured-inner">
                                                    <div className="icon-box">
                                                        <span className="icon">
                                                            <img
                                                                src="images/icons/featured-icon-11.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Money Saving</h4>
                                                    <div className="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
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
            </section>
        </>
    );
};

export default WorkFlow;
