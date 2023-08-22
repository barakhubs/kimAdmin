const Header = () => {
    return (
        <>
            <header className="main-header header-style-one">
                <div className="header-top">
                    <div className="auto-container">
                        <div className="top-outer clearfix">
                            <div className="top-left">
                                <ul className="links clearfix">
                                    <li className="language dropdown">
                                        <a
                                            className="btn btn-default dropdown-toggle"
                                            id="dropdownMenu2"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                            href="#"
                                        >
                                            <span className="flag-img">
                                                <img
                                                    src="images/icons/flag.jpg"
                                                    alt=""
                                                />
                                            </span>
                                            English &nbsp;
                                            <span className="fa fa-angle-down"></span>
                                        </a>
                                        <ul
                                            className="dropdown-menu style-one"
                                            aria-labelledby="dropdownMenu2"
                                        >
                                            <li>
                                                <a href="#">English</a>
                                            </li>
                                            <li>
                                                <a href="#">German</a>
                                            </li>
                                            <li>
                                                <a href="#">Arabic</a>
                                            </li>
                                            <li>
                                                <a href="#">Hindi</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon fa fa-phone"></span>
                                            Talk With Our Spacialist:{" "}
                                            <strong>+0 625-07520-6644</strong>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon"></span>Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="top-right clearfix">
                                <ul className="clearfix">
                                    <li>
                                        <a href="#">
                                            <span className="icon flaticon-planet-earth"></span>
                                            Free SEO Analysis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon flaticon-user"></span>
                                            Login
                                        </a>{" "}
                                        <span>or</span>{" "}
                                        <a href="#">
                                            <span className="icon flaticon-upload"></span>
                                            Register
                                        </a>
                                    </li>
                                    <li className="search-box-outer">
                                        <div className="dropdown">
                                            <button
                                                className="search-box-btn dropdown-toggle"
                                                type="button"
                                                id="dropdownMenu3"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <span className="fa fa-search"></span>
                                            </button>
                                            <ul
                                                className="dropdown-menu pull-right search-panel"
                                                aria-labelledby="dropdownMenu3"
                                            >
                                                <li className="panel-outer">
                                                    <div className="form-container">
                                                        <form
                                                            method="post"
                                                            action="blog.html"
                                                        >
                                                            <div className="form-group">
                                                                <input
                                                                    type="search"
                                                                    name="field-name"
                                                                    placeholder="Search Here"
                                                                    required
                                                                />
                                                                <button
                                                                    type="submit"
                                                                    className="search-btn"
                                                                >
                                                                    <span className="fa fa-search"></span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-box">
                    <div className="auto-container">
                        <div className="outer-container clearfix">
                            <div className="logo-box">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="images/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className="nav-outer clearfix">
                                <nav className="main-menu">
                                    <div className="navbar-header">
                                        <button
                                            type="button"
                                            className="navbar-toggle"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse"
                                        >
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li className="current dropdown">
                                                <a href="#">Home</a>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">
                                                            Header Style 01
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">
                                                            Header Style 02
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-3.html">
                                                            Header Style 03
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-4.html">
                                                            Header Style 04
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Services</a>
                                                <ul>
                                                    <li>
                                                        <a href="services.html">
                                                            Search Engine
                                                            Optimization
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="ppc-click-management.html">
                                                            PPC Click Management
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="display-advertising.html">
                                                            Display Advertising
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="email-marketing.html">
                                                            Email Marketing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="web-development.html">
                                                            Web Development
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="mobile-optimizations.html">
                                                            Mobile Optimizations
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">company</a>
                                                <ul>
                                                    <li>
                                                        <a href="about.html">
                                                            About Our Company
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="seo.html">
                                                            SEO Analysis
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="mobile-friendly.html">
                                                            Mobile Friendly Test
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="error-page.html">
                                                            404 Page
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="quote.html">
                                                            Get a Quote
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="testimonial.html">
                                                            Testimonials
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="comming-soon.html">
                                                            Coming Soon
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Case Studies</a>
                                                <ul>
                                                    <li>
                                                        <a href="case.html">
                                                            Case Studies Default
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="cases-text.html">
                                                            Case Studies Modern
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="cases-single.html">
                                                            Single Case
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="price.html">Pricing</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Blog</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog.html">
                                                            Blog Default
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-classic.html">
                                                            Blog Large Image
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-detail.html">
                                                            Single Post
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>

                                <div className="outer-box">
                                    <a
                                        href="contact.html"
                                        className="theme-btn btn-style-one"
                                    >
                                        {" "}
                                        <span className="icon flaticon-right-arrow-1"></span>{" "}
                                        Get a Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-container clearfix">
                            <div className="logo-box pull-left">
                                <div className="logo">
                                    <a href="index.html">
                                        <img
                                            src="images/logo-small.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="nav-outer clearfix">
                                <nav className="main-menu">
                                    <div className="navbar-header">
                                        <button
                                            type="button"
                                            className="navbar-toggle"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse"
                                        >
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li className="current dropdown">
                                                <a href="#">Home</a>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">
                                                            Header Style 01
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">
                                                            Header Style 02
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-3.html">
                                                            Header Style 03
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-4.html">
                                                            Header Style 04
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Services</a>
                                                <ul>
                                                    <li>
                                                        <a href="services.html">
                                                            Search Engine
                                                            Optimization
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="ppc-click-management.html">
                                                            PPC Click Management
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="display-advertising.html">
                                                            Display Advertising
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="email-marketing.html">
                                                            Email Marketing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="web-development.html">
                                                            Web Development
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="mobile-optimizations.html">
                                                            Mobile Optimizations
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">company</a>
                                                <ul>
                                                    <li>
                                                        <a href="about.html">
                                                            About Our Company
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="seo.html">
                                                            SEO Analysis
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="mobile-friendly.html">
                                                            Mobile Friendly Test
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="error-page.html">
                                                            404 Page
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="quote.html">
                                                            Get a Quote
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="testimonial.html">
                                                            Testimonials
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="comming-soon.html">
                                                            Coming Soon
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Case Studies</a>
                                                <ul>
                                                    <li>
                                                        <a href="case.html">
                                                            Case Studies Default
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="cases-text.html">
                                                            Case Studies Modern
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="cases-single.html">
                                                            Single Case
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="price.html">Pricing</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Blog</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog.html">
                                                            Blog Default
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-classic.html">
                                                            Blog Large Image
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-detail.html">
                                                            Single Post
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
