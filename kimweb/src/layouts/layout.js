import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { useEffect } from "react";

const Layout = () => {
    return (
        <>
        <div id="preloader">
            <div id="loading-center">
            <div class="loader">
                <div class="loader-outter"></div>
                <div class="loader-inner"></div>
            </div>
            </div>
        </div>
        <div class="element element--1"></div>
        <div class="element element--2"></div>

        <button type="submit" class="scroll__top scroll-to-target" data-target="html">
            <i class="fas fa-angle-up"></i>
        </button>
        <Header />
        <main class="main position-relative">
            <Outlet />
        </main>
        <Footer />
        </>
    );
};

export default Layout;
