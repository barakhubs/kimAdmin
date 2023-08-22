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
                                <img src="images/resource/firefox.jpg" alt="" />
                            </div>
                        </div>
                        <div className="content-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <h2>
                                    We’ll Make Your Web Marketing! <br /> More
                                    Efficient!
                                </h2>
                                <div className="single-item-carousel owl-carousel owl-theme">
                                    <div className="market-content">
                                        <div className="content-inner">
                                            <div className="content-number">1.</div>
                                            <h3>Save Time and Money</h3>
                                            <div className="text">
                                                How all this mistaken idea of
                                                denouncing pleasure and praising
                                                pain was born and I will give
                                                you a complete account of
                                                system, the actual teachings of
                                                the great explorer.
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
                                            <h3>Save Time and Money</h3>
                                            <div className="text">
                                                How all this mistaken idea of
                                                denouncing pleasure and praising
                                                pain was born and I will give
                                                you a complete account of
                                                system, the actual teachings of
                                                the great explorer.
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
                                            <h3>Save Time and Money</h3>
                                            <div className="text">
                                                How all this mistaken idea of
                                                denouncing pleasure and praising
                                                pain was born and I will give
                                                you a complete account of
                                                system, the actual teachings of
                                                the great explorer.
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
