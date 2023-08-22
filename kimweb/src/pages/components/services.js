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
        <section class="services-section">
    	<div class="auto-container">
            <div class="sec-title centered">
            	<h2>Our services</h2>
                <div class="text">We help you generate high-quality online sales leads by implementing highly structured, persuasive Internet marketing campaigns.</div>
            </div>

            <div class="three-item-carousel owl-carousel owl-theme">

                <div class="services-block">
                	<div class="inner-box">
                    	<div class="icon-box">
                        	<span class="icon"><img src="images/icons/services-1.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Search Engine Optimization</a></h3>
                        <div class="text">Explain to you how all this onemistaken idea of denouncing pleasure...</div>
                        <a href="services.html" class="read-more"><span class="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div class="services-block">
                	<div class="inner-box">
                    	<div class="icon-box">
                        	<span class="icon"><img src="images/icons/services-2.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Pay Per Click Management</a></h3>
                        <div class="text">Explain to you how all this onemistaken idea of denouncing pleasure...</div>
                        <a href="services.html" class="read-more"><span class="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div class="services-block">
                	<div class="inner-box">
                    	<div class="icon-box">
                        	<span class="icon"><img src="images/icons/services-3.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Display Advertising</a></h3>
                        <div class="text">Explain to you how all this onemistaken idea of denouncing pleasure...</div>
                        <a href="services.html" class="read-more"><span class="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div class="services-block">
                	<div class="inner-box">
                    	<div class="icon-box">
                        	<span class="icon"><img src="images/icons/services-1.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Search Engine Optimization</a></h3>
                        <div class="text">Explain to you how all this onemistaken idea of denouncing pleasure...</div>
                        <a href="services.html" class="read-more"><span class="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div class="services-block">
                	<div class="inner-box">
                    	<div class="icon-box">
                        	<span class="icon"><img src="images/icons/services-2.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Pay Per Click Management</a></h3>
                        <div class="text">Explain to you how all this onemistaken idea of denouncing pleasure...</div>
                        <a href="services.html" class="read-more"><span class="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

                <div class="services-block">
                	<div class="inner-box">
                    	<div class="icon-box">
                        	<span class="icon"><img src="images/icons/services-3.png" alt="" /></span>
                        </div>
                        <h3><a href="services.html">Display Advertising</a></h3>
                        <div class="text">Explain to you how all this onemistaken idea of denouncing pleasure...</div>
                        <a href="services.html" class="read-more"><span class="icon flaticon-right-arrow-1"></span> Read More</a>
                    </div>
                </div>

            </div>

        </div>
    </section>
        </>
    )
}
export default Services;
