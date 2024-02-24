import { Link } from 'react-router-dom';
import logo from '../images/kimdigitary.png';


const Header = () => {
    return (
        <>
            <div id="header-fixed-height"></div>
            <header>
                <div id="sticky-header" class="tg-header__area">
                    <div class="container custom-container">
                        <div class="row">
                            <div class="col-12">
                                <div class="mobile-nav-toggler">
                                    <i class="flaticon-menu-1"></i>
                                </div>
                                <div class="tgmenu__wrap">
                                    <nav class="tgmenu__nav">
                                        <div class="logo">
                                            <Link to="index.html"><img src="assets/img/logo/logo.png" alt="Logo" /></Link >
                                        </div>
                                        <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                            <ul class="navigation">
                                                <li class="menu-item-has-children">
                                                    <Link to="/" class="active-menu">
                                                        Home
                                                    </Link >
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <Link to="#">
                                                        Services
                                                    </Link >
                                                    <ul class="sub-menu">
                                                        <li>
                                                            <Link to="#">
                                                                Web Design
                                                            </Link >
                                                            <ul class="sub-menu">
                                                                <li>
                                                                    <Link to="/web-design">
                                                                        Web Development
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/mobile-apps">
                                                                        Mobile Applications
                                                                    </Link >
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                Graphics Design
                                                            </Link >
                                                            <ul class="sub-menu">
                                                                <li>
                                                                    <Link to="/logo-design">
                                                                        Logo Design
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/social-media-posting">
                                                                        Social Media Posting
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/site-branding">
                                                                        Site Branding
                                                                    </Link >
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                Digital Marketing
                                                            </Link >
                                                            <ul class="sub-menu">
                                                                <li>
                                                                    <Link to="/social-media-marketing">
                                                                        Social Media Marketing
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/google-ads">
                                                                        Google Ads
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/seo">
                                                                        SEO
                                                                    </Link >
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <Link to="#">Our Work </Link >
                                                    <ul class="sub-menu">
                                                        <li>
                                                            <Link to="/works/web-design">
                                                                Web Design
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/works/graphics-design">
                                                                Graphics Design
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/works/web-apps">
                                                                Web Apps
                                                            </Link >
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <Link to="about">About </Link >
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <Link to="pricing"> Pricing </Link >
                                                </li>
                                                <li>
                                                    <Link to="blog">
                                                        Blog
                                                    </Link >
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tgmenu__action d-none d-md-block">
                                            <ul class="list-wrap">
                                                <li class="header-search">
                                                    <Link to="#" class="search search--button">
                                                        <img src="assets/img/icons/search-icon.svg" alt="Search" />
                                                    </Link >
                                                </li>
                                                <li class="header-btn">
                                                    <Link to="/contact" class="btn">Let's Talk</Link >
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <form action="#" class="search-block">
                                    <div class="search-block__container">
                                        <span id="close-search" class="search-block__close">
                                            <i class="fa-solid fa-xmark"></i>
                                        </span>
                                        <div class="search-block__input">
                                            <input class="search-block__field-input" type="text" placeholder="Enter Your Keywords..." />
                                        </div>
                                    </div>
                                </form>
                                <div class="tgmobile__menu">
                                    <nav class="tgmobile__menu-box">
                                        <div class="close-btn"><i class="flaticon-close-1"></i></div>
                                        <div class="nav-logo">
                                            <Link to="index.html"><img src="assets/img/logo/logo.png" alt="Logo" /></Link >
                                        </div>
                                        <div class="tgmobile__search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button type="submit">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                        <div class="tgmobile__menu-outer">
                                        </div>
                                        <div class="social-links">
                                            <ul class="list-wrap">
                                                <li>
                                                    <Link to="project-details.html"><i class="fab fa-facebook-f"></i></Link >
                                                </li>
                                                <li>
                                                    <Link to="project-details.html"><i class="fab fa-twitter"></i></Link >
                                                </li>
                                                <li>
                                                    <Link to="project-details.html"><i class="fab fa-instagram"></i></Link >
                                                </li>
                                                <li>
                                                    <Link to="project-details.html"><i class="fab fa-linkedin-in"></i></Link >
                                                </li>
                                                <li>
                                                    <Link to="project-details.html"><i class="fab fa-youtube"></i></Link >
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div class="tgmobile__menu-backdrop"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
