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
            <section class="breadcrumb-area">
                <div class="tg-breadcrumb-bg" data-bg-image="assets/img/others/inner-page-breadcumb.jpg">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <div class="tg-breadcrumb">
                                    <h2 class="tg-breadcrumb-title">{post.title}</h2>
                                    <div class="tg-breadcrumb-link">
                                        <span class="tg-breadcrumb-active"><Link to="/">Home</Link></span>
                                        <span>{post.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blog-list pt-120 pb-110">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-8 mb-30">
                            <div class="blog-block blog-block--details">
                                <div class="blog-block__content">
                                    {post.image && (
                                        <img
                                            src={`${ASSET_URL}${post.image}`}
                                            alt={post.title}
                                            style={{
                                                width: "690px",
                                                height: "580px",
                                            }}
                                            class="rounded-4 mb-35"
                                        />
                                    )}
                                    <span class="blog-block__meta">
                                        {post.created_at} _ <span>{post.category_name}</span>
                                    </span>
                                    <h2 class="blog-block__heading h2-40 pt-10 mb-0">
                                        {post.title}
                                    </h2>
                                    <p class="blog-block__text pt-10 mb-35"
                                        dangerouslySetInnerHTML={{
                                            __html: post.content,
                                        }}>
                                    </p>
                                </div>
                            </div>
                            {/* <div class="row pt-60">
                                <div class="col-md-6 mb-30">
                                    <a href="project-details.html">
                                        <div class="np-block justify-content-start">
                                            <div class="np-block__left">
                                                <div class="np-block__icon">
                                                    <i class="fa-solid fa-chevron-left"></i>
                                                </div>
                                            </div>
                                            <div class="np-block__right">
                                                <span class="np-block__name">Previous Work</span>
                                                <h3 class="np-block__title">Creative agency</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 mb-30">
                                    <a href="project-details.html">
                                        <div class="np-block flex-row-reverse">
                                            <div class="np-block__left">
                                                <div class="np-block__icon">
                                                    <i class="fa-solid fa-chevron-right"></i>
                                                </div>
                                            </div>
                                            <div class="np-block__right text-end">
                                                <span class="np-block__name">Next Work</span>
                                                <h3 class="np-block__title">Digital Marketing</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        <div class="col-lg-4 mb-30">
                            <div class="sidebar">
                                {/* <div class="sidebar-blog sidebar__block sidebar__block--style2 mb-40">
                <h3 class="sidebar__title mb-15">Recent post</h3>
                <div class="blog-block blog-block--style6 mb-25">
                  <div class="blog-block__img">
                    <a class="blog-block__img__link" href="blog-details.html">
                      <img class="rounded-2" src="assets/img/blog/sidebar-blog1.jpg" alt="Blog">
                    </a>
                  </div>
                  <div class="blog-block__content">
                    <span class="blog-block__meta">
                      <i class="fa-regular fa-calendar-days"></i> August 17,
                      2023
                    </span>
                    <h4 class="blog-block__heading mb-0">
                      <a href="blog-details.html">
                        A quick solutions for daily problem
                      </a>
                    </h4>
                  </div>
                </div>
                <div class="blog-block blog-block--style6 mb-25">
                  <div class="blog-block__img">
                    <a class="blog-block__img__link" href="blog-details.html">
                      <img class="rounded-2" src="assets/img/blog/sidebar-blog2.jpg" alt="Blog">
                    </a>
                  </div>
                  <div class="blog-block__content">
                    <span class="blog-block__meta">
                      <i class="fa-regular fa-calendar-days"></i> August 17,
                      2023
                    </span>
                    <h4 class="blog-block__heading mb-0">
                      <a href="blog-details.html">
                        Podcasting operational change any...
                      </a>
                    </h4>
                  </div>
                </div>
                <div class="blog-block blog-block--style6">
                  <div class="blog-block__img">
                    <a class="blog-block__img__link" href="blog-details.html">
                      <img class="rounded-2" src="assets/img/blog/sidebar-blog3.jpg" alt="Blog">
                    </a>
                  </div>
                  <div class="blog-block__content">
                    <span class="blog-block__meta">
                      <i class="fa-regular fa-calendar-days"></i> August 17,
                      2023
                    </span>
                    <h4 class="blog-block__heading mb-0">
                      <a href="blog-details.html">
                        Capitalize on low Idea hanging fruit
                      </a>
                    </h4>
                  </div>
                </div>
              </div> */}
                                <div class="sidebar-category sidebar-category--style2 sidebar__block sidebar__block--style2 mb-40">
                                    <h3 class="sidebar__title mb-10">Categories</h3>
                                    <ul>
                                        <li>
                                            <a href="project-details.html">Agency News <span>(10)</span></a>
                                        </li>
                                        <li>
                                            <a href="project-details.html">Digital Marketing <span>(10)</span></a>
                                        </li>
                                        <li>
                                            <a href="project-details.html">Information Technology <span>(10)</span></a>
                                        </li>
                                        <li>
                                            <a href="project-details.html">New Ideas <span>(10)</span></a>
                                        </li>
                                        <li>
                                            <a href="project-details.html">Marketing & Branding <span>(10)</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;
