import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
    return (
        <div className="page-wrapper">
            {/* <!-- Preloader --> */}
            <div className="preloader"></div>
            {/* Outlet will render nested routes */}

            <Header />
                <Outlet />
            <Footer />

            {/* <!--Scroll to top--> */}
            <div className="scroll-to-top scroll-to-target" data-target="html">
                <span className="icon fa fa-angle-double-up"></span>
            </div>
        </div>
    );
};

export default Layout;
