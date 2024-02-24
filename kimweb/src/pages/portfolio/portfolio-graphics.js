import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { ASSET_URL } from "../../config/axios";

const GraphicsDesign = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    useEffect(() => {
        // Fetch all projects using the axios instance
        axios
            .get("/projects")
            .then((response) => {
                // Set all projects
                setProjects(response.data.projects);
            })
            .catch((error) =>
                console.error("Error fetching projects:", error)
            );
    }, []);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <section
                className="page-title"
                style={{
                    backgroundImage: 'url("images/background/pattern-4.png")',
                }}
            >
                <div className="auto-container">
                    <h1>Our Work: Graphics Design</h1>
                </div>
                <div className="page-info">
                    <div className="auto-container">
                        <div className="inner-container">
                            <ul className="bread-crumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Our Works</Link>
                                </li>
                                <li>Graphics Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-page-section">
                <div className="auto-container">
                <div className="row clearfix">
                        {currentProjects.map((project) => (
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

                    <div className="styled-pagination text-center">
                <ul className="clearfix">
                    {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, index) => (
                        <li key={index}>
                            <a href="#" className={currentPage === index + 1 ? 'active' : ''} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

                </div>
            </section>

        </>
    );
};

export default GraphicsDesign;
