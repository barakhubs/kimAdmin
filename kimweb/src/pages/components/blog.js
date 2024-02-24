import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios, { ASSET_URL } from "../../config/axios";
import { Link } from "react-router-dom";

const BlogHome = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetching the posts from the API
        axios
            .get("/posts")
            .then((response) => setPosts(response.data.posts.slice(0,3)))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    // Function to limit the title length
    const limitTitle = (title, limit = 50) => {
        if (title.length > limit) {
            return title.substring(0, limit) + '...';
        }
        return title;
    };

    // Function to format the date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    };

    return (
        <>
            <section class="blog pt-120 pb-110">
                <div class="container custom-container">
                    <div class="row">
                        {posts.map((post) => (
                            <div class="col-lg-4 col-md-6 mb-25">
                                <div class="blog-block blog-block--style4">
                                    <div class="blog-block__img">
                                        <Link to={`/blog/${post.slug}`} className="blog-block__img__link">
                                            <img src={`${ASSET_URL}${post.image}`} alt={post.title} />
                                        </Link>
                                    </div>
                                    <div class="blog-block__content pt-20">
                                        <span class="blog-block__meta">
                                            {formatDate(post.created_at)} _ <span>{post.category}</span>
                                        </span>
                                        <h3 class="blog-block__heading pt-10 mb-0">
                                            <Link to={`/blog/${post.slug}`}>
                                                {limitTitle(post.title)}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default BlogHome;
