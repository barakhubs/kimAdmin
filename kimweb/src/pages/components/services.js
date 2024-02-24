import { useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>
            <section class="service service--bg position-relative fix pt-120 pb-96">
                <div class="container custom-container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-10 mb-24">
                            <div class="section-title animation-style2">
                                <span class="section-title__sub primary-color mb-10">We Can Do For You</span>
                                <h2 class="section-title__main text-white">Services We can Help You.</h2>
                            </div>
                            <div class="service__content">
                                <p class="service__text pt-15 text-color-gray">Lorem ipsum dolor sit amet consectetur. Ut a tellus
                                    suspendisse nulla aliquam. Risu dumm amet facilisis the egestas.
                                </p>
                                {/* <div class="service__button pt-15">
                                    <Link  to="services.html" class="btn">See All Services</Link >
                                </div> */}
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-md-6 mb-24 wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="200ms">
                                    <div class="service-block">
                                        <img src="assets/img/icons/service_icon_1.svg" alt="Service" class="service-block__icon" />
                                        <h3 class="service-block__title text-white mb-0 pt-20">
                                            <Link  to="/graphics-design">Graphic Design</Link >
                                        </h3>
                                        <p class="service-block__text text-color-gray mb-0 pt-10">
                                            Make a lasting impression with captivating visuals and compelling branding.
                                        </p>
                                        <div class="service-block__footer pt-20">
                                            <Link  to="/graphics-design" class="service-block__link">Learn More</Link >
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-24 wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="400ms">
                                    <div class="service-block">
                                        <img src="assets/img/icons/service_icon_2.svg" alt="Service" class="service-block__icon" />
                                        <h3 class="service-block__title text-white mb-0 pt-20">
                                            <Link  to="/web-design">Web Design</Link >
                                        </h3>
                                        <p class="service-block__text text-color-gray mb-0 pt-10">Craft visually stunning and highly functional websites that engage your audience and drive
                                            results. </p>
                                        <div class="service-block__footer pt-20">
                                            <Link  to="/web-design" class="service-block__link">
                                                Learn More
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-24 wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="600ms">
                                    <div class="service-block">
                                        <img src="assets/img/icons/service_icon_3.png" alt="Service" class="service-block__icon" />
                                        <h3 class="service-block__title text-white mb-0 pt-20">
                                            <Link  to="/software-development">Software Development</Link >
                                        </h3>
                                        <p class="service-block__text text-color-gray mb-0 pt-10">
                                            Empower your business with custom software solutions tailored to your unique needs.
                                        </p>
                                        <div class="service-block__footer pt-20">
                                            <Link  to="/software-development" class="service-block__link">
                                                Learn More
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-24 wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="800ms">
                                    <div class="service-block">
                                        <img src="assets/img/icons/service_icon_4.png" alt="Service" class="service-block__icon" />
                                        <h3 class="service-block__title text-white mb-0 pt-20">
                                            <Link  to="/digital-marketing">Digital Marketing</Link >
                                        </h3>
                                        <p class="service-block__text text-color-gray mb-0 pt-10">
                                            Boost your online presence and drive growth with our digital marketing expertise.
                                        </p>
                                        <div class="service-block__footer pt-20">
                                            <Link  to="/digital-marketing" class="service-block__link">
                                                Learn More
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="element element--service" data-parallax='{"y" : 50 }'></div>
                <div class="element element--service element--service2" data-parallax='{"y" : 100 }'></div>
                <div class="element element--service element--service3" data-parallax='{"y" : 200 }'></div>
            </section>
        </>
    )
}
export default Services;
