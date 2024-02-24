import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cta from "./components/cta";

const About = () => {

    return (
        <>
            <section class="breadcrumb-area">
                <div class="tg-breadcrumb-bg" data-bg-image="assets/img/others/inner-page-breadcumb.jpg">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <div class="tg-breadcrumb">
                                    <h2 class="tg-breadcrumb-title">About Us</h2>
                                    <div class="tg-breadcrumb-link">
                                        <span class="tg-breadcrumb-active"><Link to="/">Home</Link></span>
                                        <span>About</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="about pt-100">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-9 mx-auto">
                            <div class="about__inner-content mb-80">
                                <h2 class="lh-base">
                                    We're a full service creative and digital agency that provides ROI (Return On Investment) Services.
                                </h2>
                                <p class="pt-25">
                                    We are a service-based startup founded with an aim of making new strategies that help businesses reach clients regardless of the campaign size and budget. We're commited to serve you around the clock.
                                </p>
                                <div class="pt-35 g-2 d-flex for-mobile">
                                    <Link to="/contact" class="btn">Speak to an Expert</Link>
                                    <Link to="/pricing" class="btn btn--secondary ms-3">
                                        More About Prices
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-wrapper">
                    <div class="container custom-container">
                        <div class="row">
                            <div class="col-12">
                                <div class="about__inner-images">
                                    <ul>
                                        <li>
                                            <img src="assets/img/about/about-inner1.jpg" alt="About" />
                                        </li>
                                        <li>
                                            <img src="assets/img/about/about-inner2.jpg" alt="About" />
                                        </li>
                                        <li>
                                            <img src="assets/img/about/about-inner3.jpg" alt="About" />
                                        </li>
                                        <li>
                                            <img src="assets/img/about/about-inner4.jpg" alt="About" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about__inner-style2 pt-135 pb-90">
                    <div class="container custom-container">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-4 col-md-12 mb-30">
                                <div class="about__image ms-0">
                                    <img src="assets/img/others/h4-about-left-image.png" alt="About" />
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-3 col-md-3 mb-30">
                                <div class="counter-block mb-40">
                                    <h3 class="counter-block__number">
                                        <span class="odometer"></span>100+
                                    </h3>
                                    <span class="counter-block__name">Happy Clients</span>
                                </div>
                                <div class="counter-block mb-40">
                                    <h3 class="counter-block__number">
                                        <span class="odometer"></span>6+
                                    </h3>
                                    <span class="counter-block__name">Years of Experience</span>
                                </div>
                                <div class="counter-block">
                                    <h3 class="counter-block__number">
                                        <span class="odometer"></span>250+
                                    </h3>
                                    <span class="counter-block__name">Projects Completed</span>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-9 mb-30">
                                <p class="about__text">
                                    We are a 360-degree digital marketing agency in Uganda that takes care of everything that you need to build unshakable & strong presence for your brand in the new digital world (Put link to our services)
                                </p>
                                <p class="about__text">
                                    We help businesses of all kinds with digital marketing, no matter if you are a small business, national brand or multi creation outlet, we are there (Link to Contact us)
                                </p>
                                <p class="about__text">
                                    We focus on deriving results that grant measurable return on investment. We are the virtual business owners that execute after a clear understanding of the business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="benefit pt-140 pb-110">
                <div class="container custom-container">
                    <div class="row justify-content-between">
                        <div class="col-lg-6 mb-30">
                            <div class="section-title mb-25">
                                <span class="section-title__sub primary-color mb-10">
                                    Our Culture
                                </span>
                                <h2 class="section-title__main">
                                    Some of our Corporate Services Working!
                                </h2>
                            </div>
                            <div class="benefit__content">
                                <div class="features-list pt-15">
                                    <ul>
                                        <li>
                                            <span>
                                                <img src="assets/img/icons/check-icon-orrange.svg" alt="icon" />
                                            </span>
                                            We understand the business story before we market
                                        </li>
                                        <li>
                                            <span>
                                                <img src="assets/img/icons/check-icon-orrange.svg" alt="icon" />
                                            </span>
                                            A customer is our first priority
                                            We are a trusted entinty that takes a proactive marketing approach to our business
                                        </li>
                                        <li>
                                            <span>
                                                <img src="assets/img/icons/check-icon-orrange.svg" alt="icon" />
                                            </span>
                                            We're fellow business owners who understand day to day business' milestone
                                        </li>
                                        <li>
                                            <span>
                                                <img src="assets/img/icons/check-icon-orrange.svg" alt="icon" />
                                            </span>
                                            We're commited to serve you around the clock
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-30">
                            <div class="inner-image">
                                <span class="inner-image__circle wow zoomIn animated" data-wow-duration="500ms"
                                    data-wow-delay="200ms"></span>
                                <img class="inner-image__img1 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="400ms"
                                    src="assets/img/about/inner-image1.jpg" alt="About" />
                                <img class="inner-image__img2 wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="600ms"
                                    src="assets/img/about/inner-image2.jpg" alt="About" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="service">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="service-block service-block--style5">
                                <span class="service-block__icon">
                                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33.5 28.45V35.275C33.5 40.975 31.225 43.25 25.525 43.25H18.725C13.05 43.25 10.75 40.975 10.75 35.275V28.45C10.75 22.775 13.025 20.5 18.725 20.5H25.55C31.225 20.5 33.5 22.775 33.5 28.45Z"
                                            stroke="#000248" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M43.251 18.7V25.525C43.251 31.225 40.976 33.5 35.276 33.5H33.501V28.45C33.501 22.775 31.226 20.5 25.526 20.5H20.501V18.7C20.501 13 22.776 10.75 28.476 10.75H35.301C40.976 10.75 43.251 13.025 43.251 18.7Z"
                                            stroke="#000248" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M52 34.5C52 44.175 44.175 52 34.5 52L37.125 47.625" stroke="#000248" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2 19.5C2 9.825 9.825 2 19.5 2L16.875 6.375" stroke="#000248" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <h3 class="service-block__title pt-10 mb-0">Our Vision</h3>
                                <p class="pt-10 mb-0">
                                    Being a 360 degrees digital marketing service provider to all businesses throughout the region and becoming an integral part of our clients’ success.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="service-block service-block--style5">
                                <span class="service-block__icon">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.8545 4.64581L11.4587 8.56248C9.06283 9.45831 7.10449 12.2916 7.10449 14.8333V30.3125C7.10449 32.7708 8.72949 36 10.7087 37.4791L19.667 44.1666C22.6045 46.375 27.4378 46.375 30.3753 44.1666L39.3337 37.4791C41.3128 36 42.9378 32.7708 42.9378 30.3125V14.8333C42.9378 12.2708 40.9795 9.43748 38.5837 8.54165L28.1878 4.64581C26.417 3.99998 23.5837 3.99998 21.8545 4.64581Z"
                                            stroke="#000248" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.8535 24.7292L22.2077 28.0833L31.166 19.125" stroke="#000248" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <h3 class="service-block__title pt-10 mb-0">Our Mission</h3>
                                <p class="pt-10 mb-0">
                                    <ul><li>Bridging the gap between the business and the target audience</li><li>Creating pain relieving strategies to business’ target audience.</li></ul>

                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="service-block service-block--style5">
                                <span class="service-block__icon">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.0824 22.6459C18.874 22.625 18.624 22.625 18.3949 22.6459C13.4365 22.4792 9.49902 18.4167 9.49902 13.4167C9.49902 8.31252 13.624 4.16669 18.749 4.16669C23.8532 4.16669 27.999 8.31252 27.999 13.4167C27.9782 18.4167 24.0407 22.4792 19.0824 22.6459Z"
                                            stroke="#000248" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M34.1878 8.33331C38.2295 8.33331 41.4795 11.6041 41.4795 15.625C41.4795 19.5625 38.3545 22.7708 34.4587 22.9166C34.292 22.8958 34.1045 22.8958 33.917 22.9166"
                                            stroke="#000248" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M8.66602 30.3333C3.62435 33.7083 3.62435 39.2083 8.66602 42.5625C14.3952 46.3958 23.791 46.3958 29.5202 42.5625C34.5619 39.1875 34.5619 33.6875 29.5202 30.3333C23.8119 26.5208 14.416 26.5208 8.66602 30.3333Z"
                                            stroke="#000248" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M38.208 41.6667C39.708 41.3542 41.1247 40.75 42.2913 39.8542C45.5413 37.4167 45.5413 33.3959 42.2913 30.9584C41.1455 30.0834 39.7497 29.5 38.2705 29.1667"
                                            stroke="#000248" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <h3 class="service-block__title pt-10 mb-0">Our Slogan</h3>
                                <p class="pt-10 mb-0">
                                    Building Brands, Branding Brands
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/*
            <section class="team tg-slide-wrap5 pt-100 pb-140">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <div class="section-title text-center mb-45">
                                <span class="section-title__sub primary-color mb-15">
                                    talented team
                                </span>
                                <h2 class="section-title__main">
                                    Entrust Your Growth to Professionals
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="tg-sliderStyle5 swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="team-block text-center">
                                    <div class="team-block__image-box mb-20">
                                        <img src="assets/img/team/team-member1.jpg" alt="Team" />
                                    </div>
                                    <div class="team-block__content">
                                        <h3 class="team-block__member-name">Hardiya Kethrine</h3>
                                        <span class="team-block__member-designation">
                                            Digital Marketer
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="team-block text-center">
                                    <div class="team-block__image-box mb-20">
                                        <img src="assets/img/team/team-member2.jpg" alt="Team" />
                                    </div>
                                    <div class="team-block__content">
                                        <h3 class="team-block__member-name">Hardiya Kethrine</h3>
                                        <span class="team-block__member-designation">
                                            Product Designer
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="team-block text-center">
                                    <div class="team-block__image-box mb-20">
                                        <img src="assets/img/team/team-member3.jpg" alt="Team" />
                                    </div>
                                    <div class="team-block__content">
                                        <h3 class="team-block__member-name">Hardiya Kethrine</h3>
                                        <span class="team-block__member-designation">
                                            Sales Manager
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="team-block text-center">
                                    <div class="team-block__image-box mb-20">
                                        <img src="assets/img/team/team-member4.jpg" alt="Team" />
                                    </div>
                                    <div class="team-block__content">
                                        <h3 class="team-block__member-name">Hardiya Kethrine</h3>
                                        <span class="team-block__member-designation">
                                            Sales Manager
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sliderNav">
                            <span class="sliderNav__btn btn-prev">
                                <i class="fa-solid fa-chevron-left"></i>
                            </span>
                            <span class="sliderNav__btn btn-next">
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section> */}

            <Cta />

        </>
    );
}

export default About;
