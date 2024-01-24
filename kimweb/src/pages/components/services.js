import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
        if (window.jQuery) {
            const jQuery = window.jQuery;
            jQuery('.three-item-carousel').owlCarousel({
                items: 3,
                loop: true,
                autoplay: true,
                nav: true, // Add this for navigation arrows
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Optional: customize the navigation text/icons
                // ...other options
            });
        }

        return () => {
            if (window.jQuery) {
                const jQuery = window.jQuery;
                jQuery('.three-item-carousel').owlCarousel('destroy');
            }
        }
    }, []);

    return (
        <>
        <section className="services-section">
    	<div className="auto-container">
            <div className="sec-title centered">
            	<h2>Our Services: Driving Digital Success</h2>
                <div className="text">Discover a suite of services designed to elevate your brand, engage your audience, and drive measurable success in the digital realm.</div>
            </div>

            <div className="three-item-carousel owl-carousel owl-theme">

                <div className="services-block">
                	<div className="inner-box">
                    	<div className="icon-box">
                        	<span className="icon"><img src="images/icons/services-1.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Custom Software Development</a></h3>
                        <div className="text">We specialize in developing custom software solutions designed to meet your specific business needs.</div>
                        <a href="services.html" className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div className="services-block">
                	<div className="inner-box">
                    	<div className="icon-box">
                        	<span className="icon"><img src="images/icons/services-2.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Website Design</a></h3>
                        <div className="text">Craft visually appealing websites that seamlessly adapt to different devices and screen sizes.</div>
                        <a href="services.html" className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div className="services-block">
                	<div className="inner-box">
                    	<div className="icon-box">
                        	<span className="icon"><img src="images/icons/services-3.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Web & Mobile Applications</a></h3>
                        <div className="text">Develop web and mobile applications that streamline business processes and enhance functionality.</div>
                        <a href="services.html" className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div className="services-block">
                	<div className="inner-box">
                    	<div className="icon-box">
                        	<span className="icon"><img src="images/icons/services-1.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Graphics & Logo Designing</a></h3>
                        <div className="text">Design eye-catching graphics and logos that leave a lasting impression.</div>
                        <a href="services.html" className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div className="services-block">
                	<div className="inner-box">
                    	<div className="icon-box">
                        	<span className="icon"><img src="images/icons/services-2.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Social Media Flyers/Posters</a></h3>
                        <div className="text">Craft attention-grabbing flyers and posters optimized for social media platforms.</div>
                        <a href="services.html" className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div className="services-block">
                	<div className="inner-box">
                    	<div className="icon-box">
                        	<span className="icon"><img src="images/icons/services-3.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Site Branding</a></h3>
                        <div className="text">Develop a cohesive brand strategy for your online presence.</div>
                        <a href="services.html" className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div className="services-block">
                	<div className="inner-box">
                    	<div className="icon-box">
                        	<span className="icon"><img src="images/icons/services-3.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Social Media Marketing</a></h3>
                        <div className="text">Foster meaningful connections with your audience through social media platforms</div>
                        <a href="services.html" className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div className="services-block">
                	<div className="inner-box">
                    	<div className="icon-box">
                        	<span className="icon"><img src="images/icons/services-3.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Digital Marketing</a></h3>
                        <div className="text">Design and execute digital marketing campaigns tailored to your audience.</div>
                        <a href="services.html" className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div className="services-block">
                	<div className="inner-box">
                    	<div className="icon-box">
                        	<span className="icon"><img src="images/icons/services-3.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Google Ads & Search Engine Optimization</a></h3>
                        <div className="text">Create targeted Google Ads to increase visibility and drive traffic.</div>
                        <a href="services.html" className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

            </div>

        </div>
    </section>
        </>
    )
}
export default Services;
