import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios, { ASSET_URL } from "../../config/axios";

const Cta = () => {
    const [partnersData, setPartnersData] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint /clients
        axios.get("/clients")
            .then(response => {
                // Update the state with the fetched data
                setPartnersData(response.data.clients);
            })
            .catch(error => {
                console.error("Error fetching data from API:", error);
            });
    }, []); // Empty dependency array ensures the effect runs once on mount

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 768, // Breakpoint for mobile devices
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1.2,
                },
            },
        ],
    };


    return (
        <section className="partners-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="title-column col-md-4 col-sm-12 col-xs-12">
                        <div className="inner-column">
                            <h2>Our Clients</h2>
                            <div className="text">
                                We value the trust and partnership of our clients. Join our growing community of satisfied clients who have experienced success with our services and solutions.
                            </div>
                            <a href="#" className="theme-btn btn-style-one">
                                Join us now
                            </a>
                        </div>
                    </div>

                    <div className="partners-column col-md-8 col-sm-12 col-xs-12">
                        <Slider {...settings}>
                            {partnersData.map(partner => (
                                <div key={partner.id} className="partner-block">
                                    <div className="inner-box">
                                        <div className="client-img">
                                            <img src={ASSET_URL + partner.logo} alt={partner.name} style={{ width: "180px", height: "120px" }} />
                                        </div>
                                        <div className="text">{partner.name}</div>
                                        <a className="read-more" href={'https://' + partner.url} target="_blank" rel="noopener noreferrer">
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
