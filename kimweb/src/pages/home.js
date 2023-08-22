import Footer from "../layouts/footer";
import Header from "../layouts/header";
import CaseStudy from "./components/case-studies";
import FeaturedSection from "./components/featured";
import Features from "./components/features";
import Score from "./components/score";
import Services from "./components/services";
import Slider from "./components/slider";
import Testimonials from "./components/testimonials";
import WorkFlow from "./components/workflow";

const Home = () => {
    return (
        <>
            <Slider />
            <FeaturedSection />
            <Services />
            <Score />
            <Features />
            <WorkFlow />
            <CaseStudy />
            <Testimonials />
        </>
    );
};

export default Home;
