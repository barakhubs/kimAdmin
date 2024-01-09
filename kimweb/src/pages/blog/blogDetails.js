import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { ASSET_URL } from "../../config/axios";

const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetching the posts from the API
    axios
      .get(`/posts/${slug}`)
      .then((response) => setPost(response.data.post))
      .catch((error) => console.error("Error fetching posts:", error));
  }, [slug]);

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
                        style={{ width: "7700px", height: "400px", objectFit: "cover" }}
                      />
                    )}
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-calendar"></span>{post.created_at}</li>
                                    <li><span className="icon fa fa-user"></span>Roger Jenina</li>
                                    <li><span className="icon fa fa-folder"></span>Email Marketing</li>
                                </ul>
                                <h3>The Solution-Focused:  How Emotional Intelligence Can Make You a Stronger Leader.</h3>
                                <div className="text">
                                	<p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was & born and I will give you a complete account of the system, and expound the actual teachings of  explorer of the truth, the master-builder of human happiness Explain to you how all mistaken pleasure and praising pain was born and we will give you a complete.</p>
                                    <p>Account of the system, and expound the actual teachings of the explorer of the truth, the master-builder of human happiness which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes.</p>
                                    <blockquote>
                                        <div className="quote-icon"><span className="icon flaticon-right-quotation-sign"></span></div>
                                        <div className="blockquote-text">  There anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which  can procure him some great pleasure. </div>
                                        <div className="quote-info">
                                            <h4>Teena Venanda</h4>
                                            <div className="quote-desination">CEO/Founder</div>
                                        </div>
                                    </blockquote>
                                    <div className="two-column clearfix">
                                        <div className="row clearfix">
                                            <div className="image-column col-md-6 col-sm-6 col-xs-12">
                                                <div className="image">
                                                    <img src="images/resource/news-14.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="text-column col-md-6 col-sm-6 col-xs-12">
                                            	<p>Explain you how  mistaken idea denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the  of truth pain itself occur great.</p>
                                                <p>The master-builder of human happiness which toil and pain can procure him some seds great pleasure take a of ever.</p>
                                            </div>
										</div>
                                    </div>

                                    <div className="post-share-options">
                                        <div className="post-share-inner clearfix">
                                            <ul className="pull-left info-links clearfix">
                                                <li><a href="#"><span className="fa fa-heart"></span></a>18</li>
                                                <li><a href="#"><span className="fa fa-comments"></span></a>6</li>
                                            </ul>
                                            <div className="pull-right tags"><span>Tags: </span><a href="#">idea</a>, <a href="#">services</a>, <a href="#">Growth</a></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="group-title">
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

                        </div>


                    </div>
                </div>

                <div className="sidebar-side col-lg-4 col-md-4 col-sm-12 col-xs-12">
                	<aside className="sidebar default-sidebar with-border">

                        <div className="sidebar-widget search-box">
                        	<form method="post" action="contact.html">
                                <div className="form-group">
                                    <input type="search" name="search-field" value="" placeholder="Enter Your Keyword..." required />
                                    <button type="submit"><span className="icon fa fa-search"></span></button>
                                </div>
                            </form>
						</div>

                        <div className="sidebar-widget sidebar-blog-category">
                            <div className="sidebar-title">
                                <h2>Categories</h2>
                            </div>
                            <ul className="blog-cat">
                                <li><a href="#">Business  <span>(6)</span></a></li>
                                <li><a href="#">Email Marketing <span>(2)</span></a></li>
                                <li><a href="#">PPC Management <span>(8)</span></a></li>
                                <li><a href="#">Social Marketing <span>(5)</span></a></li>
                                <li><a href="#">Uncategorized <span>(3)</span></a></li>
                            </ul>
                        </div>

                        <div className="sidebar-widget recent-comments">
                            <div className="sidebar-title">
                                <h2>Recent Comments</h2>
                            </div>

                            <div className="comment-block">
                            	<div className="inner">
                                	<div className="date">August 17, 2017</div>
                                    <div className="content">
                                    	<div className="image"><img src="images/resource/author-4.jpg" alt="" /></div>
                                        <h3><a href="#">Mark Mitchael</a></h3>
                                        <div className="text">It is long established fact</div>
                                        <a href="#" className="reply-btn"><span className="fa fa-mail-forward"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-block">
                            	<div className="inner">
                                	<div className="date">July 08, 2017</div>
                                    <div className="content">
                                    	<div className="image"><img src="images/resource/author-5.jpg" alt="" /></div>
                                        <h3><a href="#">Steve Bowerman</a></h3>
                                        <div className="text">When looking at its layout</div>
                                        <a href="#" className="reply-btn"><span className="fa fa-mail-forward"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="sidebar-widget popular-posts">
                            <div className="sidebar-title"><h2>Popular Posts</h2></div>

                            <article className="post">
                            	<figure className="post-thumb"><img src="images/resource/post-thumb-1.jpg" alt=""/><a className="overlay" href="blog-single.html"></a></figure>
                                <div className="text"><a href="blog-single.html">6 ways to keep in control your debtors</a></div>
                                <div className="post-info">April 18, 2017</div>
                            </article>

                            <article className="post">
                            	<figure className="post-thumb"><img src="images/resource/post-thumb-2.jpg" alt=""/><a className="overlay" href="blog-single.html"></a></figure>
                                <div className="text"><a href="blog-single.html">What a finance director could add business</a></div>
                                <div className="post-info">February 14, 2017</div>
                            </article>

                            <article className="post">
                            	<figure className="post-thumb"><img src="images/resource/post-thumb-3.jpg" alt=""/><a className="overlay" href="blog-single.html"></a></figure>
                                <div className="text"><a href="blog-single.html">Tips for sucess in 2016: Ways to grow your business</a></div>
                                <div className="post-info">January 16, 2017</div>
                            </article>

						</div>

                        <div className="sidebar-widget popular-tags">
                            <div className="sidebar-title"><h2>Tag Cloud</h2></div>
                            <a href="#">Idea</a>
                            <a href="#">Finance</a>
                            <a href="#">Experts</a>
                            <a href="#">Tips</a>
                            <a href="#">Marketing</a>
                            <a href="#">Services</a>
                            <a href="#">Growth</a>
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
