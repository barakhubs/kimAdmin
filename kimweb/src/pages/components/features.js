import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ASSET_URL, axiosPrivate } from '../../config/axios';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Features = () => {
    return (
        <section class="featured featured--area tg-slide-wrap pt-140 pb-65">
            <div class="container custom-container">

            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={true} modules={[Pagination]} // Enable pagination dots and make them clickable
                            >
                <div class="row">
                    <div class="col-lg-12">
                                <div class="featured__wrapper swiper-wrapper">
                                    <SwiperSlide class="featured__single">
                                        <div class="row align-items-center">
                                            <div class="col-lg-5 mb-30">
                                                <div class="featured__content">
                                                    <div class="section-title animation-style2">
                                                        <span class="section-title__sub primary-color mb-10">
                                                            Featured Case Study
                                                        </span>
                                                        <h2 class="section-title__main">
                                                            Web Design Your Digital Website
                                                        </h2>
                                                    </div>
                                                    <p class="featured__text pt-15">
                                                        Lorem ipsum dolor sidt amet consectetur. Ut tellus
                                                        suspe ndifssde nullea aliquam. Risus rutrum tellus
                                                        eget ultrices facilisis vulputate tortor egestas.
                                                    </p>
                                                    <p class="featured__text pt-15">
                                                        Lorem ipsum dolor sit amet consectetur. Ut tellus
                                                        suspe ndisse as ultrices pretium
                                                    </p>
                                                    <div class="featured__button pt-25">
                                                        <a href="case-study.html" class="btn">
                                                            Read Case Study
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-7 mb-30">
                                                <div class="featured__img--right wow fadeInRightBig animated" data-wow-duration="800ms"
                                                    data-wow-delay="200ms">
                                                    <img src="assets/img/others/case_img01.png" alt="Featured" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide class="featured__single">
                                        <div class="row align-items-center">
                                            <div class="col-lg-5 mb-30">
                                                <div class="featured__content">
                                                    <div class="section-title animation-style2">
                                                        <span class="section-title__sub primary-color mb-10">
                                                            Featured Case Study
                                                        </span>
                                                        <h2 class="section-title__main">
                                                            Web Design Your Digital Website
                                                        </h2>
                                                    </div>
                                                    <p class="featured__text pt-15">
                                                        Lorem ipsum dolor sidt amet consectetur. Ut tellus
                                                        suspe ndifssde nullea aliquam. Risus rutrum tellus
                                                        eget ultrices facilisis vulputate tortor egestas.
                                                    </p>
                                                    <p class="featured__text pt-15">
                                                        Lorem ipsum dolor sit amet consectetur. Ut tellus
                                                        suspe ndisse as ultrices pretium
                                                    </p>
                                                    <div class="featured__button pt-25">
                                                        <a href="case-study.html" class="btn">
                                                            Read Case Study
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-7 mb-30">
                                                <div class="featured__img--right wow fadeInRightBig animated" data-wow-duration="800ms"
                                                    data-wow-delay="200ms">
                                                    <img src="assets/img/others/case_img01.png" alt="Featured" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            <div class="tg-pagination1"></div>
                    </div>
                </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Features;
