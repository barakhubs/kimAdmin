import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Contact = () => {

    return (
        <>

            <section class="breadcrumb-area">
                <div class="tg-breadcrumb-bg" data-bg-image="assets/img/others/inner-page-breadcumb.jpg">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <div class="tg-breadcrumb">
                                    <h2 class="tg-breadcrumb-title">Contact Us</h2>
                                    <div class="tg-breadcrumb-link">
                                        <span class="tg-breadcrumb-active"><Link to="/">Home</Link></span>
                                        <span>Contact Us</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact pt-120">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="contact-block">
                                <h2 class="h2-40 mb-35">
                                    We're Always Eager to Hear From You!
                                </h2>
                                <div class="contact-block__item mb-25">
                                    <h3 class="contact-block__title">Address</h3>
                                    <p class="contact-block__text">
                                        32, 2nd William Stret, Kampala ,Uganda 10002
                                    </p>
                                </div>
                                <div class="contact-block__item mb-25">
                                    <h3 class="contact-block__title">Email</h3>
                                    <a class="contact-block__text" href="mailto:info@kimdigitary.com">info@kimdigitary.com</a>
                                </div>
                                <div class="contact-block__item mb-25">
                                    <h3 class="contact-block__title">Phone</h3>
                                    <a class="contact-block__text" href="tel:=256788948653">(+256) 788948653</a>
                                </div>
                                <div class="social-block pt-30">
                                    <ul>
                                        <li>
                                            <a class="facebook" href="https://www.facebook.com/kimdigitary">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="twitter" href="https://www.twitter.com/kimdigitary">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="pinterest" href="#">
                                                <i class="fa-brands fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="linkedin" href="https://www.linkedin.com/company/kim-digitary/">
                                                <i class="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="instagram" href="https://www.instagram.com/kimdigitary">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-right">
                                <form action="#" class="section-form section-form--style4">
                                    <h3 class="section-form__title">Send a Message</h3>
                                    <p>
                                    We welcome your questions, comments, and feedback. Simply contact us via your convenient mode of communication.
                                    </p>
                                    <div class="section-form__input-box pt-10">
                                        <div class="section-form__item">
                                            <input type="text" class="section-form__input-field" placeholder="Name*" />
                                        </div>
                                        <div class="section-form__item">
                                            <input type="email" class="section-form__input-field" placeholder="Email*" />
                                        </div>
                                        <div class="section-form__item">
                                            <input type="text" class="section-form__input-field" placeholder="Phone" />
                                        </div>
                                        <div class="section-form__item">
                                            <input type="text" class="section-form__input-field" placeholder="Subject" />
                                        </div>
                                        <div class="section-form__item">
                                            <textarea class="section-form__input-field textarea" name="message"
                                                placeholder="Comment*"></textarea>
                                        </div>
                                        <div class="section-form__item">
                                            <div class="section-form__button">
                                                <button type="button" class="btn text-uppercase">
                                                    Send a Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="map-bg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193502.96100813415!2d-74.1369342267891!3d40.729379535002856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1685268313256!5m2!1sen!2sbd"></iframe>
            </div>
        </>
    );
}

export default Contact;
