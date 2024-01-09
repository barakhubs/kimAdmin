import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { ASSET_URL } from "../../config/axios";

const BlogList = () => {
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
                                <li>Recent Posts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blog-page-section">
                <div class="auto-container">
                    <div class="row clearfix">
                        {/* Mapping over the posts and generating JSX for each post */}
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                class="news-block col-md-4 col-sm-6 col-xs-12"
                            >
                                <div class="inner-box">
                                    <div class="image">
                                        <Link to={`/blog/${post.slug}`}>
                                            <img
                                                src={`${ASSET_URL}${post.image}`}
                                                alt={post.title}
                                                style={{ width: "370px", height: "200px", objectFit: "cover" }}
                                            />
                                        </Link>
                                    </div>
                                    <div class="lower-content">
                                        <div class="upper">
                                            <div class="post-date">
                                                {post.created_at}
                                            </div>
                                            <h3>
                                                <Link to={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h3>
                                        </div>
                                        <div class="more">
                                            <Link
                                                to={`/blog/${post.slug}`}
                                                class="read-more"
                                            >
                                                <span class="fa fa-chevron-circle-right"></span>{" "}
                                                Read More
                                            </Link>
                                        </div>
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

export default BlogList;
