import { useEffect, useState } from "react";
import { ASSET_URL, axiosPrivate } from "../../config/axios";
// adjust the import path

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Fetch testimonials using the axios instance
        axiosPrivate
            .get("/testimonials")
            .then((response) => setTestimonials(response.data.testimonials))
            .catch((error) =>
                console.error("Error fetching testimonials:", error)
            );
    }, []);

    useEffect(() => {
        if (testimonials.length > 1 && window.jQuery) {
            const jQuery = window.jQuery;
            setTimeout(() => {
                jQuery(".testimonial-carousel").owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    nav: true,
                    navText: [
                        "<i class='fa fa-angle-left'></i>",
                        "<i class='fa fa-angle-right'></i>",
                    ],
                });
            }, 100); // 100ms delay before initializing
        }
    }, [testimonials]);

    return (
        <>
            <section
                className="testimonial-section"
                style={{ backgroundImage: "url('images/background/2.jpg')" }}
            >
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="title-column col-md-5 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <h2>
                                    Words <br /> From Our Trusted <br />{" "}
                                    Customers.
                                </h2>
                            </div>
                        </div>
                        <div className="testimonial-column col-md-7 col-sm-12 col-xs-12">
                            <div className="testimonial-carousel owl-carousel owl-theme">
                                {testimonials.map((testimonial) => (
                                    <div
                                        className="testimonial-block"
                                        key={testimonial.id}
                                    >
                                        <div className="inner-box">
                                            <div className="quote-icon">
                                                <span className="icon flaticon-straight-quotes"></span>
                                            </div>
                                            <div className="text">
                                                {testimonial.testimony}
                                            </div>
                                            <a href="#" className="continue">
                                                <span className="icon flaticon-right-arrow-1"></span>{" "}
                                                Continue to Read
                                            </a>
                                            <div className="author-info">
                                                <div className="author-inner">
                                                    <div className="image">
                                                        <img
                                                            src={
                                                                testimonial.icon
                                                                    ? ASSET_URL +
                                                                      testimonial.icon
                                                                    : "client.png"
                                                            }
                                                            alt={
                                                                testimonial.title
                                                            }
                                                        />
                                                    </div>

                                                    <h3>{testimonial.title}</h3>
                                                    <div className="designation">
                                                        {testimonial.business}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
