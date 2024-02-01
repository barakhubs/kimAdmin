import { useEffect, useState } from "react";
import { ASSET_URL, axiosPrivate } from "../../config/axios";
import { Link } from "react-router-dom";

const CaseStudy = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects using the axios instance
        axiosPrivate
            .get("/projects")
            .then((response) => {
                // Limit projects to the 3 most recent
                const limitedProjects = response.data.projects.slice(0, 3);
                setProjects(limitedProjects);
            })
            .catch((error) =>
                console.error("Error fetching projects:", error)
            );
    }, []);

    return (
        <>
            <section className="case-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>Case Studies</h2>
                        <div className="text">
                            We help you generate high-quality online sales leads
                            by implementing highly structured, <br /> persuasive
                            Internet marketing campaigns.
                        </div>
                    </div>

                    <div className="row clearfix">
                        {projects.map((project) => (
                            <div className="case-block col-md-4 col-sm-6 col-xs-12" key={project.id}>
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="cases-single.html">
                                                <img
                                                    src={
                                                        project.description.find(
                                                            (desc) => desc.type === "client"
                                                        )?.data.logo
                                                            ? ASSET_URL +
                                                            project.description.find(
                                                                (desc) => desc.type === "client"
                                                            ).data.logo
                                                            : "client.png"
                                                    }
                                                    alt={project.title}
                                                />
                                            </a>
                                            <div className="overlay-box">
                                                <Link
                                                    to={`/project/${project.slug}`}
                                                    className="theme-btn btn-style-one"
                                                >
                                                    {" "}
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <div className="content-inner">
                                            <h4>{project.title}</h4>
                                            <Link
                                                to={`/project/${project.slug}`}
                                                className="read-more"
                                            >
                                                <span className="icon flaticon-right-arrow-1"></span>{" "}
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="btn-box text-center">
                        <a href="case.html" className="theme-btn btn-style-one">
                            View All
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudy;
