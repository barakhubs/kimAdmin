import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer class="tg-footer-bg pt-100 position-relative">
                <img class="position-absolute footer__shape-bg" src="assets/img/pattern/map.png" alt />
                <div class="tg-footer-main pb-70">
                    <div class="container custom-container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-6">
                                <div class="tg-footer-widget footer-col-1 mb-30">
                                    <div class="tg-footer-widget-logo pb-15">
                                        <a href="index.html"><img src="assets/img/logo/logo-white.png" alt="Logo" /></a>
                                    </div>
                                    <div class="tg-footer-widget-content">
                                        <p>We are dedicated to providing our clients with results oriented Digital Marketing, Advertising and Promotions support.</p>
                                    </div>
                                    <div class="tg-footer-widget-social">
                                        <a href="https://www.facebook.com/kimdigitary"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/kimdigitary"><i class="fa-brands fa-instagram"></i></a>
                                        <a href="https://www.twitter.com/kimdigitary"><i class="fa-brands fa-twitter"></i></a>
                                        <a href="https://www.linkedin.com/company/kim-digitary/"><i class="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div class="tg-footer-widget footer-col-2 mb-30">
                                    <h4 class="tg-footer-widget-title mb-25">Our Company</h4>
                                    <div class="tg-footer-widget-link">
                                        <ul>
                                            <li><a href="#">About</a></li>
                                            <li><a href="price.html">Contact Us</a></li>
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="blog-list.html">Our Blog</a></li>
                                            <li><a href="services.html">Testimonials</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-5 col-sm-6">
                                <div class="tg-footer-widget footer-col-3 mb-30">
                                    <h4 class="tg-footer-widget-title mb-25">Services</h4>
                                    <div class="tg-footer-widget-link">
                                        <ul>
                                            <li><a href="#">Social Media Flyers</a></li>
                                            <li><a href="#">Social Media Marketing</a></li>
                                            <li><a href="#">Site Branding</a></li>
                                            <li><a href="#">Logo Designing</a></li>
                                            <li><a href="#">Web Designing</a></li>
                                            <li><a href="#">Web App Development</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-4 col-md-7">
                                <div class="tg-footer-widget footer-col-4 mb-30">
                                    <h2 class="tg-footer-widget-submit-title">Get Latest Updates <br /> and big deals</h2>
                                    <div class="tg-footer-widget-submit-wrap">
                                        <form action="#">
                                            <div class="tg-footer-widget-newsletter-wrapper position-relative">
                                                <div class="tg-footer-widget-newsletter-input">
                                                    <input type="email" placeholder="Get News & Updates" />
                                                </div>
                                                <div class="tg-footer-widget-newsletter-submit">
                                                    <button><i class="fa-regular fa-paper-plane"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tg-footer-widget-content">
                                        <p>Our expertise, as well as our passion for web design, sets us
                                            apart from other agencies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__bottom">
                    <div class="container custom-container">
                        <div class="row">
                            <div class="col-12">
                                <div class="footer__wrapper-bottom">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 mb-15">
                                            <p class="footer__copyright">
                                                <a href="index.html">Kim Digitary</a> @ 2023. All Rights
                                                Reserved.
                                            </p>
                                        </div>
                                        <div class="col-md-6 mb-15">
                                            <div class="footer-block">
                                                <div class="footer-block__menu-bottom">
                                                    <ul>
                                                        <li>
                                                            <a href="project-details.html">Privacy & Terms.</a>
                                                        </li>
                                                        <li><a href="project-details.html">FAQ</a></li>
                                                        <li>
                                                            <a href="project-details.html"> Contact Us</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
