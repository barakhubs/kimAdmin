const Cta = () => {
    return (
        <>
            <section className="partners-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="title-column col-md-4 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <h2>Our Partners</h2>
                                <div className="text">
                                    Must explain to you how all this mistaken
                                    idea of denouncing pleasure and praising
                                    pain was complete account of the system.
                                </div>
                                <a href="#" className="theme-btn btn-style-one">
                                    Join With Us
                                </a>
                            </div>
                        </div>

                        <div className="partners-column col-md-8 col-sm-12 col-xs-12">
                            <div className="row clearfix">
                                <div className="column col-md-6 col-sm-6 col-xs-12">
                                    <div className="partner-block">
                                        <div className="inner-box">
                                            <div className="client-img">
                                                <img
                                                    src="images/clients/1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="text">
                                                It is a long established fact
                                                that a reader will be distracted
                                                by the readable content of a
                                                page when looking at its layout.
                                            </div>
                                            <a className="read-more" href="#">
                                                <span className="icon flaticon-right-arrow-1"></span>{" "}
                                                Visit Website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="column col-md-6 col-sm-6 col-xs-12">
                                    <div className="partner-block">
                                        <div className="inner-box">
                                            <div className="client-img">
                                                <img
                                                    src="images/clients/2.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="text">
                                                The master-builder of human
                                                happiness one avoids pleasure
                                                itself, because it is pleasure,
                                                but because those who do not
                                                know pursue.
                                            </div>
                                            <a className="read-more" href="#">
                                                <span className="icon flaticon-right-arrow-1"></span>{" "}
                                                Visit Website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cta;
