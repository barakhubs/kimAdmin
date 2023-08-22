const Score = () => {
    return (
        <>
        <section
                className="score-section"
                style={{backgroundImage:'url(images/background/1.jpg)'}}
            >
                <div className="auto-container">
                    <div className="upper-box">
                        <div className="row clearfix">
                            <div className="title-column col-md-5 col-sm-12 col-xs-12">
                                <div className="sec-title light">
                                    <h2>Free Website analysis</h2>
                                </div>
                            </div>
                            <div className="text-column col-md-7 col-sm-12 col-xs-12">
                                <div className="text">
                                Get a comprehensive review of your website's performance, usability, and SEO. Uncover insights to enhance your online presence. It's free!
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lower-box">
                        <div className="row clearfix">
                            <div className="form-column col-md-7 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <div className="row clearfix">
                                        <div className="form-box col-md-8 col-sm-12 col-xs-12">
                                            <div className="score-form">
                                                <form
                                                    method="post"
                                                    action="contact.html"
                                                >
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="text"
                                                            placeholder="Your Website URL"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email Address"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <button
                                                            type="submit"
                                                            className="theme-btn btn-style-one"
                                                        >
                                                            Analyse now
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video-column col-md-5 col-sm-12 col-xs-12">
                                <div className="video-box">
                                    <figure className="image">
                                        <img
                                            src="images/resource/image-1.jpg"
                                            alt=""
                                        />
                                        <a
                                            href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                            className="lightbox-image overlay-box"
                                        >
                                            <span className="icon"></span>
                                        </a>
                                    </figure>
                                    <h3>How It’s Work</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Score;
