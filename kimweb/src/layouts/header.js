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
                                        <Link to="tel:+256 704 316255">
                                            <span className="icon fa fa-phone"></span>
                                            Talk to us now:{" "}
                                            <strong>+256 704 316255</strong>{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
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
                                        <img style={{ height: 70 + 'px', width: 270 + 'px' }} src={logo} alt="Logo" />
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
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Services</Link>
                                                <ul>
                                                    <span></span>
                                                    <li className="dropdown">
                                                        <Link to="#">
                                                            Software Development
                                                        </Link>
                                                        <ul>
                                                            <span></span>
                                                            <li>
                                                                <Link to="/web-design">Web Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Web Applications</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Mobile Applications</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <Link to="#">
                                                            Graphics Design
                                                        </Link>
                                                        <ul>
                                                            <span></span>
                                                            <li>
                                                                <Link to="/">Logo Designing</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Social Media Posting</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Site Branding</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <Link to="#">Digital Marketing</Link>
                                                        <ul>
                                                            <span></span>
                                                            <li>
                                                                <Link to="/">Social Media Marketing</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Google Ads</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">SEO</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="dropdown">
                                                <Link to="/portfolio">Our Work</Link>
                                                <ul>
                                                    <span></span>
                                                    <li>
                                                        <Link to="/graphics-design">
                                                            Graphics Design
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/website-design">
                                                            Website Design
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/pricing">Pricing</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
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
                                        <img style={{ height: 45 + 'px', width: 150 + 'px' }} src={logo} alt="Logo" />
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
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="#">Services</Link>
                                                <ul>
                                                    <span></span>
                                                    <li className="dropdown">
                                                        <Link to="#">
                                                            Software Development
                                                        </Link>
                                                        <ul>
                                                            <span></span>
                                                            <li>
                                                                <Link to="/web-design">Web Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Web Applications</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Mobile Applications</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <Link to="#">
                                                            Graphics Design
                                                        </Link>
                                                        <ul>
                                                            <span></span>
                                                            <li>
                                                                <Link to="/">Logo Designing</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Social Media Posting</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Site Branding</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <Link to="#">Digital Marketing</Link>
                                                        <ul>
                                                            <span></span>
                                                            <li>
                                                                <Link to="/">Social Media Marketing</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Google Ads</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">SEO</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="/portfolio">Our Work</Link>
                                                <ul>
                                                    <span></span>
                                                    <li>
                                                        <Link to="/works/graphics">
                                                            Graphics Design
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/works/websites">
                                                            Website Design
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/pricing">Pricing</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to="/blog">Blog</Link>
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
