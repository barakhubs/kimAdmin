import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ASSET_URL, axiosPrivate } from '../../config/axios';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CaseStudy = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axiosPrivate.get('/projects')
            .then(response => {
                // Assuming your API returns an array of projects
                setProjects(response.data.projects.slice(0, 6));
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <section className="project project--area tg-slide-wrap2 pb-65 pt-65">
            <div className="container">
                <div class="row">
                    <div class="col-xxl-5 col-xl-6 col-lg-7 mx-auto">
                        <div class="section-title text-center mb-45 animation-style2">
                            <span class="section-title__sub primary-color mb-10">Our Project</span>
                            <h2 class="section-title__main">
                                We Create last Years for our Client
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project__wrapper">
                    <div class="tg-sliderStyle2 swiper"></div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3.5}
                pagination={true} modules={[Pagination]} // Enable pagination dots and make them clickable
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="project-block">
                        <div class="project-block">
                                    <div class="project-block__image">
                                        <a class="d-inline-block w-100" href="project-details.html">
                                            <img class="img w-100" src={
                                                        project.description.find(
                                                            (desc) => desc.type === "client"
                                                        )?.data.logo
                                                            ? ASSET_URL +
                                                            project.description.find(
                                                                (desc) => desc.type === "client"
                                                            ).data.logo
                                                            : "client.png"
                                                    }
                                                    alt={project.title} />
                                        </a>
                                    </div>
                                    <h3 class="project-block__name pt-20 under-line-1">
                                    <Link
                                                    to={`/project/${project.slug}`}>{project.title}</Link>
                                    </h3>
                                    {/* <span class="project-block__category">{project.category_id}</span> */}
                                </div>
                        </div>
                    </SwiperSlide>
                ))}
            <div class="tg-pagination1 tg-pagination1--project"></div>
            </Swiper>
            </div>
        </section>
    );
};

export default CaseStudy;
