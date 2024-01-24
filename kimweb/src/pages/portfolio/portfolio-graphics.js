import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { ASSET_URL } from "../../config/axios";

const GraphicsDesign = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetching the posts from the API
        axios
            .get("/posts")
            .then((response) => setPosts(response.data.posts))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <>
            <section
                class="page-title"
                style={{
                    backgroundImage: 'url("images/background/pattern-4.png")',
                }}
            >
                <div class="auto-container">
                    <h1>Recent Blog Articles</h1>
                </div>
                <div class="page-info">
                    <div class="auto-container">
                        <div class="inner-container">
                            <ul class="bread-crumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Our Works</Link>
                                </li>
                                <li>Graphics Design Work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="case-page-section">
    	<div class="auto-container">
        	<div class="row clearfix">

                <div class="case-block col-md-4 col-sm-6 col-xs-12">
                	<div class="inner-box">
                    	<div class="image-box">
                        	<div class="image">
                            	<a href="cases-single.html"><img src="images/resource/case-1.jpg" alt="" /></a>
                                <div class="overlay-box">
                                    <a href="cases-single.html" class="theme-btn btn-style-one">Visit Site</a>
                                </div>
                            </div>
                        </div>
                        <div class="content-box">
                        	<div class="content-inner">
                            	<ul class="options">
                                	<li data-toggle="tooltip" title="Site Traffic"><img src="images/icons/case-1.png" alt="" /></li>
                                    <li data-toggle="tooltip" title="User Interface"><img src="images/icons/case-2.png" alt="" /></li>
                                    <li data-toggle="tooltip" title="Mobile Friendly"><img src="images/icons/case-3.png" alt="" /></li>
                                </ul>
                                <div class="text">Number one position in search engine ads 25.54% increase...</div>
                                <a href="cases-single.html" class="read-more"><span class="icon flaticon-right-arrow-1"></span> Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="styled-pagination text-center">
                <ul class="clearfix">
                    <li><a href="#"><span class="fa fa-angle-left"></span></a></li>
                    <li><a href="#" class="active">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#"><span class="fa fa-angle-right"></span></a></li>
                </ul>
            </div>

        </div>
    </section>

        </>
    );
};

export default GraphicsDesign;
