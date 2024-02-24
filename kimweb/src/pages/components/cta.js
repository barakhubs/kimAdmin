import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios, { ASSET_URL } from "../../config/axios";

const Cta = () => {

    return (
        <div class="estimate estimate--bg">
            <div class="estimate__elements">
                <img class="estimate__element estimate__element--one" src="assets/img/elements/element1.svg" alt="element" />
                <img class="estimate__element estimate__element--two" src="assets/img/elements/element2.svg" alt="element" />
            </div>
            <div class="container custom-container">
                <div class="row">
                    <div class="col-lg-6 mb-30">
                        <div class="estimate__content">
                            <div class="section-title animation-style2">
                                <span class="section-title__sub text-white mb-10">
                                    Let's Work Together
                                </span>
                                <h2 class="section-title__main text-white">
                                    Need a Successful Your Project?
                                </h2>
                            </div>
                            <div class="estimate-button pt-30">
                                <a href="price.html" class="btn btn--white">Estimate Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="estimate__right wow fadeInUp animated" data-wow-duration="800ms" data-wow-delay="200ms">
                            <img src="assets/img/others/estimate-right.png" alt="Estimate" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;
