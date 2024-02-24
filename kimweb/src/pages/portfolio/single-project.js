import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { ASSET_URL } from "../../config/axios";

const SingleProject = () => {
    const { slug } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        // Fetch the specific project based on the slug
        axios
            .get(`/project/${slug}`)
            .then((response) => {
                setProject(response.data.project);
            })
            .catch((error) => console.error("Error fetching project:", error));
    }, [slug]);

    // const [relatedCases, setRelatedCases] = useState([]);

    // useEffect(() => {
    //     // Fetch projects using the axios instance
    //     axios
    //         .get("/projects")
    //         .then((response) => {
    //             // Limit projects to the 3 most recent
    //             console.log(response.data.projects)
    //             const limitedProjects = response.data.projects.slice(0, 3);
    //             setRelatedCases(limitedProjects);
    //         })
    //         .catch((error) =>
    //             console.error("Error fetching projects:", error)
    //         );
    // }, []);

    return (
        <>
            <section
                className="page-title"
                style={{
                    backgroundImage: 'url("images/background/pattern-4.png")',
                }}
            >
                <div className="auto-container">
                    <h1>Our Work: {project.title}</h1>
                </div>
                <div className="page-info">
                    <div className="auto-container">
                        <div className="inner-container">
                            <ul className="bread-crumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>{project.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-single-section">
                <div className="container">

                    <div className="case-info-section">
                        <div className="row clearfix">

                            <div className="title-column col-md-3 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <h2>Case Info</h2>
                                </div>
                            </div>
                            <div className="content-column col-md-9 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <div className="row clearfix">

                                        <div className="column col-md-8 col-sm-8 col-xs-12">
                                            <div className="text">
                                                <p>{project.description?.find((desc) => desc.type === "client")?.data.overview}</p>
                                            </div>
                                        </div>
                                        <div className="column col-md-4 col-sm-4 col-xs-12">
                                            <ul className="info-category">
                                                <li><span className="title">Category :</span>Email Marketing</li>
                                                <li><span className="title">Client :</span>{project.description?.find((desc) => desc.type === "client")?.data.name}</li>
                                                {/* <li><span className="title">Link :</span>www.Domainname.com</li> */}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*
                    <div className="case-goal-section">
                        <div className="row clearfix">

                            <div className="title-column col-md-3 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <h2>Case Info</h2>
                                </div>
                            </div>

                            <div className="content-column col-md-9 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <div className="row clearfix">

                                        <div className="image-column col-md-5 col-sm-5 col-xs-12">
                                            <div className="image">
                                                <img src="images/resource/goal.jpg" alt="" />
                                            </div>
                                        </div>

                                        <div className="column col-md-7 col-sm-7 col-xs-12">
                                            <h3>The CEO of Gosearch, William Rogerson, made it clear to SEO Inc. that his goals were to:</h3>
                                            <ul className="list-style-one">
                                                <li>Increase organic traffic 5% per month</li>
                                                <li>Increase the number of keywords on the first two pages of Google results.</li>
                                                <li>Increase appointments in both the US and UK</li>
                                                <li>Increase franchisee applications</li>
                                                <li>Create new sections to display information</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}

                    <section className="case-challenge-section">
                        <div className="row clearfix">

                            <div className="title-column col-md-3 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <h2>Challenges</h2>
                                </div>
                            </div>

                            <div className="content-column col-md-9 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <div className="text">{project.description?.find((desc) => desc.type === "challenges")?.data.challenge}</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="case-solutions-section">
                        <div className="row clearfix">

                            <div className="title-column col-md-3 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <h2>Approaches</h2>
                                </div>
                            </div>

                            <div className="content-column col-md-9 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <div className="text">{project.description?.find((desc) => desc.type === "approaches")?.data.approach}</div>
                                    <div className="row clearfix">

                                        <div className="content-column col-md-6 col-sm-6 col-xs-12">
                                            <div className="row clearfix">

                                                <div className="solution-icon-block col-md-6 col-sm-6 col-xs-12">
                                                    <div className="solution-inner">
                                                        <div className="icon-box">
                                                            <span className="icon"><img src="images/icons/time-icon.png" alt="" /></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="solution-icon-block col-md-6 col-sm-6 col-xs-12">
                                                    <div className="solution-inner">
                                                        <div className="icon-box">
                                                            <span className="icon"><img src="images/icons/rocket.png" alt="" /></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="solution-icon-block col-md-6 col-sm-6 col-xs-12">
                                                    <div className="solution-inner">
                                                        <div className="icon-box">
                                                            <span className="icon"><img src="images/icons/cart.png" alt="" /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="case-result-section">
                        <div className="row clearfix">

                            <div className="title-column col-md-3 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <h2>Results</h2>
                                </div>
                            </div>

                            <div className="content-column col-md-9 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <div className="row clearfix">

                                        <div className="column col-md-12 col-sm-12 col-xs-12">
                                            <div className="text">{project.description?.find((desc) => desc.type === "results")?.data.description}</div>
                                            <div className="row clearfix">
                                                {project.description?.find((desc) => desc.type === "results")?.data.images && (
                                                    <>
                                                        {project.description?.find((desc) => desc.type === "results")?.data.images.map((finalImage, index) => (
                                                            <div key={index} className="solution-icon-block col-md-4 col-sm-4 col-xs-12">
                                                                <div className="solution-inner">
                                                                    <div className="icon-box">
                                                                        <span className="icon">
                                                                            <img
                                                                                src={`${ASSET_URL}${finalImage}`}
                                                                                alt={`Result Image ${index + 1}`}
                                                                                style={{ width: 200, height: 150 }}
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </>
                                                )}
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </section>

            {/* <section className="related-case-section">
                <div className="auto-container">
                    <div className="sec-title grey centered">
                        <h2>Related Cases</h2>
                    </div>

                    <div className="row clearfix">
                        {relatedCases.map((relatedCase) => (
                            <div key={relatedCase.id} className="case-block-two alternate col-md-4 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src={`${ASSET_URL}${relatedCase.image}`} alt={relatedCase.title} />
                                        <div className="overlay-box">
                                            <Link to={`/cases/${relatedCase.slug}`} className="theme-btn btn-style-one">
                                                Visit Site
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3>
                                            <Link to={`/cases/${relatedCase.slug}`}>{relatedCase.title}</Link>
                                        </h3>
                                        <div className="text">{relatedCase.description}</div>
                                        <Link to={`/cases/${relatedCase.slug}`} className="read-more">
                                            <span className="icon flaticon-right-arrow-1"></span> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default SingleProject;
