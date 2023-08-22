import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { useEffect } from "react";

const Layout = () => {
    useEffect(() => {
        const scrollToTopElement = document.querySelector(".scroll-to-top");

        if (scrollToTopElement) {
            scrollToTopElement.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            });
        }

        return () => {
            if (scrollToTopElement) {
                scrollToTopElement.removeEventListener("click");
            }
        };
    }, []);

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
