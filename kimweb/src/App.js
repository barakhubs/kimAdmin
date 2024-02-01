import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Missing from "./layouts/404";
import Home from "./pages/home";
import BlogList from "./pages/blog/list";
import BlogDetails from "./pages/blog/blogDetails";
import Contact from "./pages/contact/contact";
import GraphicsDesign from "./pages/portfolio/portfolio-graphics";
import About from "./pages/about";
import WebDesign from "./pages/services/web-design";
import SingleProject from "./pages/portfolio/single-project";


function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="/register" element={<Register />} />
          <Route path="/recover/email" element={<ForgotPassword />} />
          <Route path="/register/verify" element={<VerificationSignUp />} /> */}

          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/works/graphics" element={<GraphicsDesign />} />
          <Route path="/works/websites" element={<BlogList />} />
          <Route path="/project/:slug" element={<SingleProject />} />
          <Route path="/blog" element={<BlogList />} />
          {/* services */}
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
