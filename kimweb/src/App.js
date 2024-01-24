import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Missing from "./layouts/404";
import Home from "./pages/home";
import BlogList from "./pages/blog/list";
import BlogDetails from "./pages/blog/blogDetails";
import Contact from "./pages/contact/contact";
import GraphicsDesign from "./pages/portfolio/portfolio-graphics";


function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="/register" element={<Register />} />
          <Route path="/recover/email" element={<ForgotPassword />} />
          <Route path="/register/verify" element={<VerificationSignUp />} /> */}

          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/works/graphics" element={<GraphicsDesign />} />
          <Route path="/works/websites" element={<BlogList />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
