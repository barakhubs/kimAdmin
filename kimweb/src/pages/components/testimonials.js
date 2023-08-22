import { useEffect } from "react";

const Testimonials = () => {
    useEffect(() => {
        if (window.jQuery) {
            const jQuery = window.jQuery;
            jQuery('.testimonial-carousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                nav: true, // Add this for navigation arrows
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], // Optional: customize the navigation text/icons
                // ...other options
            });
        }

        return () => {
            if (window.jQuery) {
                const jQuery = window.jQuery;
                jQuery('.testimonial-carousel').owlCarousel('destroy');
            }
        }
    }, []);
    return (
        <>
            <section
                class="testimonial-section"
                style={{backgroundImage:"url('images/background/2.jpg')" }}
            >
                <div class="auto-container">
                    <div class="row clearfix">
                        <div class="title-column col-md-5 col-sm-12 col-xs-12">
                            <div class="inner-column">
                                <h2>
                                    Words <br /> From Our Trusted <br />{" "}
                                    Customers.
                                </h2>
                            </div>
                        </div>
                        <div class="testimonial-column col-md-7 col-sm-12 col-xs-12">
                            <div class="testimonial-carousel owl-carousel owl-theme">
                                <div class="testimonial-block">
                                    <div class="inner-box">
                                        <div class="quote-icon">
                                            <span class="icon flaticon-straight-quotes"></span>
                                        </div>
                                        <div class="text">
                                            Must explain to you how mistaken our
                                            idea denouncing pleasure & praising
                                            pain was born & we will give expound
                                            human happiness know to pursue
                                            pleasure...
                                        </div>
                                        <a href="#" class="continue">
                                            <span class="icon flaticon-right-arrow-1"></span>{" "}
                                            Continue to Read
                                        </a>
                                        <div class="author-info">
                                            <div class="author-inner">
                                                <div class="image">
                                                    <img
                                                        src="images/resource/author-1.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <h3>Teena Venanda</h3>
                                                <div class="designation">
                                                    CEO/Founder
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="testimonial-block">
                                    <div class="inner-box">
                                        <div class="quote-icon">
                                            <span class="icon flaticon-straight-quotes"></span>
                                        </div>
                                        <div class="text">
                                            Must explain to you how mistaken our
                                            idea denouncing pleasure & praising
                                            pain was born & we will give expound
                                            human happiness know to pursue
                                            pleasure...
                                        </div>
                                        <a href="#" class="continue">
                                            <span class="icon flaticon-right-arrow-1"></span>{" "}
                                            Continue to Read
                                        </a>
                                        <div class="author-info">
                                            <div class="author-inner">
                                                <div class="image">
                                                    <img
                                                        src="images/resource/author-1.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <h3>Teena Venanda</h3>
                                                <div class="designation">
                                                    CEO/Founder
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="testimonial-block">
                                    <div class="inner-box">
                                        <div class="quote-icon">
                                            <span class="icon flaticon-straight-quotes"></span>
                                        </div>
                                        <div class="text">
                                            Must explain to you how mistaken our
                                            idea denouncing pleasure & praising
                                            pain was born & we will give expound
                                            human happiness know to pursue
                                            pleasure...
                                        </div>
                                        <a href="#" class="continue">
                                            <span class="icon flaticon-right-arrow-1"></span>{" "}
                                            Continue to Read
                                        </a>
                                        <div class="author-info">
                                            <div class="author-inner">
                                                <div class="image">
                                                    <img
                                                        src="images/resource/author-1.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <h3>Teena Venanda</h3>
                                                <div class="designation">
                                                    CEO/Founder
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

export default Testimonials;
