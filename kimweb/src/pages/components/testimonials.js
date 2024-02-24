import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios, { ASSET_URL } from '../../config/axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Fetch testimonials using the axios instance
        axios
            .get("/testimonials")
            .then((response) => setTestimonials(response.data.testimonials))
            .catch((error) =>
                console.error("Error fetching testimonials:", error)
            );
    }, []);

    return (
        <>
            <section className="client client--area tg-slide-wrap3 pb-95">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto">
                            <div className="section-title text-center mb-45 animation-style2">
                                <span className="section-title__sub primary-color mb-10">Client Testimonial</span>
                                <h2 className="section-title__main">What People are Saying!</h2>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div class="client-block">
                                    <i class="client-block__icon">
                                        <img src="assets/img/icons/icon-quote.svg" alt="icon" />
                                    </i>
                                    <p class="client-block__text pt-30">
                                        {testimonial.testimony}
                                    </p>
                                    <div class="client-block__author d-flex align-items-center pt-25">
                                        <div class="client-block__author-img">
                                            <img style={{ width: '60px', height: '60px' }} src={testimonial.icon ? ASSET_URL + testimonial.icon : "client.png"} alt={testimonial.title} />
                                        </div>
                                        <div class="client-block__author-infos">
                                            <h3 class="client-block__author-name">
                                                {testimonial.title}
                                            </h3>
                                            <span class="client-block__author-designation">
                                                {testimonial.business}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="tg-pagination1 tg-pagination1--style2"></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section class="facts facts--bg position-relative pt-105 pb-75 fix" data-bg-image="assets/img/bg/facts-bg.jpg">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-4 wow fadeInRight animated" data-wow-duration="800ms" data-wow-delay="800ms">
                            <div class="facts-block facts-block--yellow mb-30">
                                <div class="facts-block__icon">
                                    <svg width="62" height="50" viewBox="0 0 62 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M40.8852 5.06074L44.9976 13.2857C45.5518 14.4232 47.0393 15.5024 48.2935 15.7357L55.731 16.9607C60.4852 17.7482 61.5935 21.1899 58.181 24.6315L52.3768 30.4357C51.4143 31.3982 50.8602 33.2941 51.181 34.6649L52.8435 41.8399C54.156 47.4982 51.1227 49.7149 46.1352 46.7399L39.1643 42.5982C37.9101 41.8399 35.8102 41.8399 34.556 42.5982L27.5851 46.7399C22.5976 49.6857 19.5643 47.4982 20.8768 41.8399L22.5393 34.6649C22.8602 33.3232 22.306 31.4274 21.3435 30.4357L15.5394 24.6315C12.1269 21.219 13.2352 17.7774 17.9893 16.9607L25.4268 15.7357C26.681 15.5315 28.1685 14.4232 28.7227 13.2857L32.8352 5.06074C35.0227 0.598243 38.6394 0.598243 40.8852 5.06074Z"
                                            stroke="#FFC90B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.332 4.44824H1.83203" stroke="#FFC90B" stroke-width="3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M10.582 45.2832H1.83203" stroke="#FFC90B" stroke-width="3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M4.7487 24.8657H1.83203" stroke="#FFC90B" stroke-width="3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="facts-block__infos">
                                    <h2 class="facts-block__number"><span class="odometer" data-count="99.9"></span>%</h2>
                                    <h3 class="facts-block__title">Client Setisfaction</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow fadeInUp animated" data-wow-duration="800ms" data-wow-delay="800ms">
                            <div class="facts-block facts-block--green mb-30">
                                <div class="facts-block__icon">
                                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M27.3539 3.01108C29.3664 1.29025 32.6622 1.29025 34.7039 3.01108L39.3123 6.97806C40.1873 7.7364 41.8205 8.34881 42.9872 8.34881H47.9456C51.0372 8.34881 53.5747 10.8861 53.5747 13.9778V18.9363C53.5747 20.0738 54.1872 21.7364 54.9455 22.6114L58.9123 27.2196C60.6331 29.2321 60.6331 32.528 58.9123 34.5696L54.9455 39.1778C54.1872 40.0528 53.5747 41.6862 53.5747 42.8529V47.8114C53.5747 50.9031 51.0372 53.4404 47.9456 53.4404H42.9872C41.8497 53.4404 40.1873 54.0528 39.3123 54.8111L34.7039 58.7777C32.6914 60.4986 29.3956 60.4986 27.3539 58.7777L22.7456 54.8111C21.8706 54.0528 20.2372 53.4404 19.0706 53.4404H14.0247C10.933 53.4404 8.39557 50.9031 8.39557 47.8114V42.8237C8.39557 41.6862 7.78309 40.0528 7.05392 39.1778L3.11641 34.5404C1.42474 32.5279 1.42474 29.2613 3.11641 27.2488L7.05392 22.6114C7.78309 21.7364 8.39557 20.103 8.39557 18.9655V13.9778C8.39557 10.8861 10.933 8.34881 14.0247 8.34881H19.0706C20.2081 8.34881 21.8706 7.7364 22.7456 6.97806L27.3539 3.01108Z"
                                            stroke="#42F132" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M24.8465 39.0906L29.0756 42.3573C29.6298 42.9115 30.8548 43.174 31.6715 43.174H36.8339C38.4673 43.174 40.2464 41.9491 40.6548 40.3158L43.9214 30.3406C44.5922 28.4448 43.3673 26.7824 41.3256 26.7824H35.8715C35.0548 26.7824 34.384 26.1117 34.5006 25.1492L35.1714 20.7742C35.4339 19.5492 34.6173 18.1783 33.3923 17.77C32.3131 17.3617 30.9423 17.9157 30.3881 18.7324L24.7881 27.0448"
                                            stroke="#42F132" stroke-width="3" stroke-miterlimit="10" />
                                        <path
                                            d="M17.875 39.0909V25.7327C17.875 23.8077 18.6917 23.1368 20.6167 23.1368H21.9875C23.8833 23.1368 24.7292 23.8077 24.7292 25.7327V39.0909C24.7292 40.9868 23.9125 41.6868 21.9875 41.6868H20.6167C18.6917 41.6868 17.875 41.0159 17.875 39.0909Z"
                                            stroke="#42F132" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="facts-block__infos">
                                    <h2 class="facts-block__number"><span class="odometer" data-count="1155"></span>+</h2>
                                    <h3 class="facts-block__title">complete Project</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow fadeInLeft animated" data-wow-duration="800ms" data-wow-delay="800ms">
                            <div class="facts-block facts-block--cyan mb-30">
                                <div class="facts-block__icon">
                                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.0741 45.2454L13.8199 36.991C11.0783 34.2493 11.0783 31.4786 13.8199 28.737L27.5866 14.9702L42.7241 30.1077C43.4824 30.8661 43.4824 32.0912 42.7241 32.8496L30.3283 45.2454C27.5866 47.9871 24.8158 47.9871 22.0741 45.2454Z"
                                            stroke="#16F1FF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M24.8154 12.1995L27.5862 14.9411" stroke="#16F1FF" stroke-width="3" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.8662 32.7329L43.0454 31.3622" stroke="#16F1FF" stroke-width="3" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M46.4575 39.0619C46.4575 39.0619 42.6367 43.2033 42.6367 45.7408C42.6367 47.8408 44.3575 49.5618 46.4575 49.5618C48.5575 49.5618 50.2784 47.8408 50.2784 45.7408C50.2492 43.2033 46.4575 39.0619 46.4575 39.0619Z"
                                            stroke="#16F1FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M60.1663 39.6158V22.1158C60.1663 7.53243 54.333 1.6991 39.7497 1.6991H22.2497C7.66634 1.6991 1.83301 7.53243 1.83301 22.1158V39.6158C1.83301 54.1991 7.66634 60.0324 22.2497 60.0324H39.7497C54.333 60.0324 60.1663 54.1991 60.1663 39.6158Z"
                                            stroke="#16F1FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="facts-block__infos">
                                    <h2 class="facts-block__number"><span class="odometer" data-count="1322"></span>+</h2>
                                    <h3 class="facts-block__title">Design Resource</h3>
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
