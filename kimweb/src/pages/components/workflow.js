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
            <section class="marketing-section">
                <div class="auto-container">
                    <div class="row clearfix">
                        <div class="image-column col-md-6 col-sm-12 col-xs-12">
                            <div class="image">
                                <img src="images/resource/firefox.jpg" alt="" />
                            </div>
                        </div>
                        <div class="content-column col-md-6 col-sm-12 col-xs-12">
                            <div class="inner-column">
                                <h2>
                                    We’ll Make Your Web Marketing! <br /> More
                                    Efficient!
                                </h2>
                                <div class="single-item-carousel owl-carousel owl-theme">
                                    <div class="market-content">
                                        <div class="content-inner">
                                            <div class="content-number">1.</div>
                                            <h3>Save Time and Money</h3>
                                            <div class="text">
                                                How all this mistaken idea of
                                                denouncing pleasure and praising
                                                pain was born and I will give
                                                you a complete account of
                                                system, the actual teachings of
                                                the great explorer.
                                            </div>

                                            <div class="featured-block-three">
                                                <div class="featured-inner">
                                                    <div class="icon-box">
                                                        <span class="icon">
                                                            <img
                                                                src="images/icons/featured-icon-10.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Save your time</h4>
                                                    <div class="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="featured-block-three">
                                                <div class="featured-inner">
                                                    <div class="icon-box">
                                                        <span class="icon">
                                                            <img
                                                                src="images/icons/featured-icon-11.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Money Saving</h4>
                                                    <div class="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="market-content">
                                        <div class="content-inner">
                                            <div class="content-number">2.</div>
                                            <h3>Save Time and Money</h3>
                                            <div class="text">
                                                How all this mistaken idea of
                                                denouncing pleasure and praising
                                                pain was born and I will give
                                                you a complete account of
                                                system, the actual teachings of
                                                the great explorer.
                                            </div>

                                            <div class="featured-block-three">
                                                <div class="featured-inner">
                                                    <div class="icon-box">
                                                        <span class="icon">
                                                            <img
                                                                src="images/icons/featured-icon-10.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Save your time</h4>
                                                    <div class="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="featured-block-three">
                                                <div class="featured-inner">
                                                    <div class="icon-box">
                                                        <span class="icon">
                                                            <img
                                                                src="images/icons/featured-icon-11.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Money Saving</h4>
                                                    <div class="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="market-content">
                                        <div class="content-inner">
                                            <div class="content-number">3.</div>
                                            <h3>Save Time and Money</h3>
                                            <div class="text">
                                                How all this mistaken idea of
                                                denouncing pleasure and praising
                                                pain was born and I will give
                                                you a complete account of
                                                system, the actual teachings of
                                                the great explorer.
                                            </div>

                                            <div class="featured-block-three">
                                                <div class="featured-inner">
                                                    <div class="icon-box">
                                                        <span class="icon">
                                                            <img
                                                                src="images/icons/featured-icon-10.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Save your time</h4>
                                                    <div class="featured-text">
                                                        Desires work obtain
                                                        itself in some great
                                                        pleasure.
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="featured-block-three">
                                                <div class="featured-inner">
                                                    <div class="icon-box">
                                                        <span class="icon">
                                                            <img
                                                                src="images/icons/featured-icon-11.png"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <h4>Money Saving</h4>
                                                    <div class="featured-text">
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
