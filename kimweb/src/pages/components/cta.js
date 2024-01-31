import React from "react";
import Slider from "react-slick";

const Cta = () => {
    const partnersData = [
        {
            id: 1,
            imgSrc: "images/clients/1.png",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            link: "#",
        },
        {
            id: 2,
            imgSrc: "images/clients/2.png",
            text: "The master-builder of human happiness one avoids pleasure itself, because it is pleasure, but because those who do not know pursue.",
            link: "#",
        },
        // Add more partner data as needed
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Display two columns per slide
        slidesToScroll: 2, // Scroll two columns at a time
        prevArrow: false,
        nextArrow: false,
    };

    return (
        <section className="partners-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="title-column col-md-4 col-sm-12 col-xs-12">
                        <div className="inner-column">
                            <h2>Our Partners</h2>
                            <div className="text">
                                Must explain to you how all this mistaken
                                idea of denouncing pleasure and praising
                                pain was complete account of the system.
                            </div>
                            <a href="#" className="theme-btn btn-style-one">
                                Join With Us
                            </a>
                        </div>
                    </div>

                    <div className="partners-column col-md-8 col-sm-12 col-xs-12">
                        <Slider {...settings}>
                            {partnersData.map((partner) => (
                                <div key={partner.id} className="partner-block">
                                    <div className="inner-box">
                                        <div className="client-img">
                                            <img src={partner.imgSrc} alt="" />
                                        </div>
                                        <div className="text">{partner.text}</div>
                                        <a className="read-more" href={partner.link}>
                                            <span className="icon flaticon-right-arrow-1"></span>{" "}
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
