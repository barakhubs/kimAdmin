import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Missing from "./layouts/404";
import Home from "./pages/home";


function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/*<Route path="/register" element={<Register />} />
          <Route path="/recover/email" element={<ForgotPassword />} />
          <Route path="/register/verify" element={<VerificationSignUp />} /> */}

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
