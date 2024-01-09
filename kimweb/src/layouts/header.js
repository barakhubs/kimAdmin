import { Link } from 'react-router-dom';
import logo from '../images/kimdigitary.png';


const Header = () => {
    return (
        <>
            <header className="main-header header-style-one">
                <div className="header-top">
                    <div className="auto-container">
                        <div className="top-outer clearfix">
                            <div className="top-left">
                                <ul className="links clearfix">
                                    <li>
                                        <Link to="#">
                                            <span className="icon fa fa-phone"></span>
                                            Talk to us now:{" "}
                                            <strong>+256 704 316255</strong>{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">
                                            <span className="icon"></span>Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="top-right clearfix">
                                <ul className="clearfix">
                                    <li>
                                        <Link to="/free-web-analysis">
                                            <span className="icon flaticon-planet-earth"></span>
                                            Free Website Analysis
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon flaticon-user"></span>
                                            Login
                                        </Link> {" "}
                                        <span>or</span>{" "}
                                        <Link to="#">
                                            <span className="icon flaticon-upload"></span>
                                            Register
                                        </Link>
                                    </li>
                                    {/* <li className="search-box-outer">
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
                                    </li> */}
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
                                    <Link to="/">
                                        <img style={{ height: 70+'px', width: 270+'px' }} src={logo} alt="Logo" />
                                    </Link>
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
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">company</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="about.html">
                                                            About Our Company
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="seo.html">
                                                            SEO Analysis
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="mobile-friendly.html">
                                                            Mobile Friendly Test
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="error-page.html">
                                                            404 Page
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="quote.html">
                                                            Get a Quote
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="testimonial.html">
                                                            Testimonials
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="comming-soon.html">
                                                            Coming Soon
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="contact.html">
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Case Studies</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="case.html">
                                                            Case Studies Default
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="cases-text.html">
                                                            Case Studies Modern
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="cases-single.html">
                                                            Single Case
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="price.html">Pricing</Link>
                                            </li>
                                            <li>
                                                <Link to="price.html">About</Link>
                                            </li>
                                            <li>
                                                <Link to="price.html">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to="/blog">Blog</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>

                                <div className="outer-box">
                                    <Link
                                        to="contact.html"
                                        className="theme-btn btn-style-one"
                                    >
                                        {" "}
                                        <span className="icon flaticon-right-arrow-1"></span>{" "}
                                        Get a Quote
                                    </Link>
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
                                    <Link to="index.html">
                                    <img style={{ height: 45+'px', width: 150+'px' }} src={logo} alt="Logo" />
                                    </Link>
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
                                                <Link to="#">Home</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="index.html">
                                                            Header Style 01
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="index-2.html">
                                                            Header Style 02
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="index-3.html">
                                                            Header Style 03
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="index-4.html">
                                                            Header Style 04
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Services</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="services.html">
                                                            Search Engine
                                                            Optimization
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="ppc-click-management.html">
                                                            PPC Click Management
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="display-advertising.html">
                                                            Display Advertising
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="email-marketing.html">
                                                            Email Marketing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="web-development.html">
                                                            Web Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="mobile-optimizations.html">
                                                            Mobile Optimizations
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">company</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="about.html">
                                                            About Our Company
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="seo.html">
                                                            SEO Analysis
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="mobile-friendly.html">
                                                            Mobile Friendly Test
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="error-page.html">
                                                            404 Page
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="quote.html">
                                                            Get a Quote
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="testimonial.html">
                                                            Testimonials
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="comming-soon.html">
                                                            Coming Soon
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="contact.html">
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Case Studies</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="case.html">
                                                            Case Studies Default
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="cases-text.html">
                                                            Case Studies Modern
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="cases-single.html">
                                                            Single Case
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="price.html">Pricing</Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Blog</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="blog.html">
                                                            Blog Default
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-classic.html">
                                                            Blog Large Image
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-detail.html">
                                                            Single Post
                                                        </Link>
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
