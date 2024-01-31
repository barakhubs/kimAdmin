import Footer from "../layouts/footer";
import Header from "../layouts/header";
import CaseStudy from "./components/case-studies";
import Cta from "./components/cta";
import FeaturedSection from "./components/featured";
import Features from "./components/features";
import Pricing from "./components/pricing";
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
            {/* <Score /> */}
            <Features />
            <WorkFlow />
            <CaseStudy />
            <Testimonials />
            <Pricing />
            <Cta />
        </>
    );
};

export default Home;
