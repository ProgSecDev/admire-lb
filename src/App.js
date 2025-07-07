// src/App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Nav from "./Components/Nav";
import Footer from "./Sections/Footer";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Brands from "./Pages/Brands";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import Photography from "./Pages/Photography";

const AppContent = () => {
  const location = useLocation();

  const hideNavFooterOn = ["/some-special-page"];
  const shouldHideNavFooter = hideNavFooterOn.includes(location.pathname);

  return (
    <>
      {!shouldHideNavFooter && <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>

      {!shouldHideNavFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router basename="/admire-lb">
      <AppContent />
    </Router>
  );
};

export default App;
