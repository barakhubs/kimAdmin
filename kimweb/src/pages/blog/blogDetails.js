import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { ASSET_URL } from "../../config/axios";

const BlogDetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [latestPosts, setLatestPosts] = useState(null);

    useEffect(() => {
        // Fetching the posts from the API
        axios
            .get(`/posts/${slug}`)
            .then((response) => setPost(response.data.post))
            .catch((error) => console.error("Error fetching posts:", error));
    }, [slug]);

    useEffect(() => {
        // Fetching the posts from the API
        axios
            .get("/posts/latest")
            .then((response) => setLatestPosts(response.data.posts))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    if (!post) {
        return <p>Loading...</p>; // You can replace this with a loading spinner or message
    }

    return (
        <>
            <section
                className="page-title"
                style={{
                    backgroundImage: 'url("images/background/pattern-4.png")',
                }}
            >
                <div className="auto-container">
                    <h1>{post.title}</h1>
                </div>
                <div className="page-info">
                    <div className="auto-container">
                        <div className="inner-container">
                            <ul className="bread-crumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>{post.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="blog-single">
                                <div className="inner-box">
                                    <div className="image">
                                        {post.image && (
                                            <img
                                                src={`${ASSET_URL}${post.image}`}
                                                alt={post.title}
                                                style={{
                                                    width: "7700px",
                                                    height: "400px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="lower-content">
                                        <ul className="post-meta">
                                            <li>
                                                <span className="icon fa fa-calendar"></span>
                                                {post.created_at}
                                            </li>
                                            <li>
                                                <span className="icon fa fa-user"></span>
                                                {post.name}
                                            </li>
                                            <li>
                                                <span className="icon fa fa-folder"></span>
                                                {post.category_name}
                                            </li>
                                        </ul>
                                        <h3>{post.title}</h3>
                                        <div className="text">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: post.content,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="group-title">
                        	<h2>About Author</h2>
                        </div>

                        <div className="author-box">
                            <div className="author-comment">
                                <div className="inner">
                                    <div className="image"><img src="images/resource/author-6.jpg" alt="" /></div>
                                    <h3>Lilly Anderson</h3>
                                    <div className="text">We will give you a complete account of the system, and expound actual teachings of explorer of the truth, the master-builder of human happiness.</div>
                                    <ul className="social-icon-two">
                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#"><span className="fa fa-youtube"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="comments-area">
                            <div className="group-title">
                            	<h2>Read Comments</h2>
                                <div className="separator"></div>
                            </div>
                            <div className="comment-box">
                                <div className="comment">
                                    <div className="author-thumb"><img src="images/resource/author-7.jpg" alt=""/></div>
                                    <div className="comment-inner">
                                        <div className="comment-info clearfix">Steven Rich – Sep 17, 2016:</div>
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star light"></span>
                                        </div>
                                        <div className="text">How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-box reply-comment">
                                <div className="comment">
                                    <div className="author-thumb"><img src="images/resource/author-8.jpg" alt=""/></div>
                                    <div className="comment-inner">
                                        <div className="comment-info clearfix">William Cobus – Aug 21, 2016:</div>
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star-half-empty"></span>
                                        </div>
                                        <div className="text">There anyone who loves or pursues or desires to obtain pain itself, because it is pain sed, because occasionally circumstances occur some great pleasure.</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="comment-form">
                            <div className="group-title">
                            	<h2>Add Your Comments</h2>
                                <div className="separator"></div>
                            </div>
                            <div className="rating-box">
                                <div className="text"> Your Rating:</div>
                                <div className="rating">
                                    <a href="#"><span className="fa fa-star"></span></a>
                                </div>
                                <div className="rating">
                                    <a href="#">
                                    	<span className="fa fa-star"></span>
                                    	<span className="fa fa-star"></span>
                                    </a>
                                </div>
                                <div className="rating">
                                    <a href="#">
                                    	<span className="fa fa-star"></span>
                                    	<span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </a>
                                </div>
                                <div className="rating">
                                    <a href="#">
                                    	<span className="fa fa-star"></span>
                                    	<span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </a>
                                </div>
                                <div className="rating">
                                    <a href="#">
                                    	<span className="fa fa-star"></span>
                                    	<span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </a>
                                </div>
                            </div>
                            <form method="post" action="contact.html">
                                <div className="row clearfix">
                                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                        <label>First Name*</label>
                                        <input type="text" name="username" placeholder="" required/>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                        <label>Last Name*</label>
                                        <input type="text" name="username" placeholder="" required/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                        <label>Email*</label>
                                        <input type="email" name="email" placeholder="" required/>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                        <label>Your Comments*</label>
                                        <textarea name="message" placeholder=""></textarea>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form">Post Comment</button>
                                    </div>

                                </div>
                            </form>

                        </div> */}
                            </div>
                        </div>

                        <div className="sidebar-side col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <aside className="sidebar default-sidebar with-border">
                                <div className="sidebar-widget search-box">
                                    <form method="post" action="contact.html">
                                        <div className="form-group">
                                            <input
                                                type="search"
                                                name="search-field"
                                                value=""
                                                placeholder="Enter Your Keyword..."
                                                required
                                            />
                                            <button type="submit">
                                                <span className="icon fa fa-search"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-widget sidebar-blog-category">
                                    <div className="sidebar-title">
                                        <h2>Categories</h2>
                                    </div>
                                    <ul className="blog-cat">
                                        <li>
                                            <a href="#">
                                                Business <span>(6)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Email Marketing <span>(2)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                PPC Management <span>(8)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Social Marketing{" "}
                                                <span>(5)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Uncategorized <span>(3)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar-widget popular-posts">
                                    <div className="sidebar-title">
                                        <h2>Popular Posts</h2>
                                    </div>
                                    {/* {latestPosts.map((post) => (
                                    <article className="post">
                                        <figure className="post-thumb">
                                            <img
                                                src="images/resource/post-thumb-1.jpg"
                                                alt=""
                                            />
                                            <a
                                                className="overlay"
                                                href="blog-single.html"
                                            ></a>
                                        </figure>
                                        <div className="text">
                                            <a href="blog-single.html">
                                                6 ways to keep in control your
                                                debtors
                                            </a>
                                        </div>
                                        <div className="post-info">
                                            April 18, 2017
                                        </div>
                                    </article>
                                    ))} */}
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;
