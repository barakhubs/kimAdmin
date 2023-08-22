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
                            <div className="title-column col-md-4 col-sm-12 col-xs-12">
                                <div className="sec-title light">
                                    <h2>Your seo Score?</h2>
                                </div>
                            </div>
                            <div className="text-column col-md-8 col-sm-12 col-xs-12">
                                <div className="text">
                                    We help you generate high-quality online
                                    sales leads by implementing highly
                                    structured, persuasive Internet marketing
                                    campaigns.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lower-box">
                        <div className="row clearfix">
                            <div className="form-column col-md-7 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <div className="row clearfix">
                                        <div className="form-box col-md-6 col-sm-12 col-xs-12">
                                            <div className="score-form">
                                                <form
                                                    method="post"
                                                    action="contact.html"
                                                >
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="text"
                                                            value=""
                                                            placeholder="Your Website URL"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value=""
                                                            placeholder="Email Address"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <button
                                                            type="submit"
                                                            className="theme-btn btn-style-one"
                                                        >
                                                            Check Up
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="progress-column col-md-6 col-sm-12 col-xs-12">
                                            <div className="inner">
                                                <input
                                                    type="text"
                                                    className="dial"
                                                    data-fgColor="rgba(255,255,255,0);"
                                                    data-bgColor="rgba(255,255,255,0.10)"
                                                    data-width="160"
                                                    data-height="160"
                                                    data-linecap="normal"
                                                    value="78"
                                                />
                                                <div className="inner-text count-box">
                                                    <span
                                                        className="count-text txt"
                                                        data-stop="78"
                                                        data-speed="2000"
                                                    ></span>{" "}
                                                    %
                                                </div>
                                            </div>
                                            <a
                                                href="contact.html"
                                                className="contact"
                                            >
                                                Contact Us to Improve
                                            </a>
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
