import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const ServicesSidebar = () => {
    return (
        <aside className="sidebar services-sidebar">
            <div className="sidebar-title">
                <h2>Our services</h2>
            </div>
            <div className="sidebar-widget sidebar-blog-category">
                <ul className="blog-cat-two">
                    <li><Link to="/web-design">Web Design</Link></li>
                    <li><Link to="/web-applications">Web Applications</Link></li>
                    <li><Link to="/mobile-applications">Mobile Applications</Link></li>
                    <li><Link to="/logo-design">Logo Designing</Link></li>
                    <li><Link to="/social-media-fliers">Social Media Posters</Link></li>
                    <li><Link to="/site-branding">Site branding</Link></li>
                    <li><Link to="/social-media-marketing">Social Media Marketing</Link></li>
                    <li><Link to="/google-ads">Google Ads</Link></li>
                    <li><Link to="/seo">SEO</Link></li>
                </ul>
            </div>

            <div className="sidebar-widget sidebar-brochure">
                <div className="sidebar-title">
                    <h2>Our Brochures</h2>
                </div>
                <Link className="brochure" to="#"><span className="icon flaticon-pdf"></span>Service Overview <span>Download.pdf</span></Link>
                <Link className="brochure" to="#"><span className="icon flaticon-word-file"></span>About Our Company <span>Download.doc</span></Link>
            </div>

        </aside>
    );
};

export default ServicesSidebar;
