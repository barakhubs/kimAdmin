import { useEffect } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
       <>
       <section class="hero hero--area hero--padding fix">
      <div class="container custom-container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-7 mb-30">
            <div class="hero-content">
              <h1 class="hero-content__heading mb-25 wow fadeInUp animated" data-wow-duration="500ms"
                data-wow-delay="200ms">
                Kim
                <img src="assets/img/icons/pie-icon.svg" alt/> Digitary
                Agency for Mindful New Brands!
              </h1>
              <p class="hero-content__text mb-45 wow fadeInUp animated" data-wow-duration="500ms"
                data-wow-delay="400ms">Discover the successful strategies employed by businesses through our comprehensive package.
              </p>
              <a href="about.html" class="btn wow fadeInUp animated" data-wow-duration="500ms"
                data-wow-delay="600ms">Get Started</a>
            </div>
          </div>
          <div class="col-xl-6 col-lg-5 mb-30">
            <div class="hero-thumb">
              <div class="hero-thumb__icons">
                <img class="hero-thumb__icon1 wow zoomIn animated" data-wow-duration="500ms" data-wow-delay="200ms"
                  src="assets/img/icons/hero-icon-1.svg" alt="icon"/>
                <img class="hero-thumb__icon2 wow zoomIn animated" data-wow-duration="500ms" data-wow-delay="400ms"
                  src="assets/img/icons/hero-icon-2.svg" alt="icon"/>
                <img class="hero-thumb__icon3 wow zoomIn animated" data-wow-duration="500ms" data-wow-delay="600ms"
                  src="assets/img/icons/hero-icon-3.svg" alt="icon"/>
                <img class="hero-thumb__icon4 wow zoomIn animated" data-wow-duration="500ms" data-wow-delay="800ms"
                  src="assets/img/icons/hero-icon-4.svg" alt="icon"/>
                <img class="hero-thumb__icon5 wow zoomIn animated" data-wow-duration="500ms" data-wow-delay="1000ms"
                  src="assets/img/icons/hero-icon-5.svg" alt="icon"/>
                <img class="hero-thumb__icon6 wow zoomIn animated" data-wow-duration="500ms" data-wow-delay="1200ms"
                  src="assets/img/icons/hero-icon-6.png" alt="icon"/>
              </div>
              <img class="wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="1400ms"
                src="assets/img/hero/hero-right-image.png" alt="Hero"/>
            </div>
          </div>
        </div>
      </div>
    </section>
       </>
    );
};

export default Slider;
