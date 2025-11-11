// src/App.js
import {
  HashRouter as Router,  // 👈 use HashRouter instead of BrowserRouter
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import ScrollToTop from "./Components/scrollToTop";
import Nav from "./Components/Nav";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Brands from "./Pages/Brands";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import Photography from "./Pages/Photography";

// Import service pages
import CorporateIdentity from "./Pages/CorporateIdentity";
import CorporateCatalogue from "./Pages/CorporateCatalogue";
import PrivateLabel from "./Pages/PrivateLabel";
import Branding from "./Pages/Branding";
import WebsiteDesign from "./Pages/WebsiteDesign";
import SocialMedia from "./Pages/SocialMedia";
import Modeling from "./Pages/Modeling";
import Printing from "./Pages/Printing";
import ProductPhotography from "./Pages/ProductPhotography";
import Animation from "./Pages/Animation";
import OutdoorAdv from "./Pages/OutdoorAdv";

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

        <Route path="/portfolio/corporate-identity" element={<CorporateIdentity />} />
        <Route path="/portfolio/corporate-catalogues" element={<CorporateCatalogue />} />
        <Route path="/portfolio/private-label" element={<PrivateLabel />} />
        <Route path="/portfolio/branding" element={<Branding />} />
        <Route path="/portfolio/website-design" element={<WebsiteDesign />} />
        <Route path="/portfolio/social-media" element={<SocialMedia />} />
        <Route path="/portfolio/modeling" element={<Modeling />} />
        <Route path="/portfolio/printing" element={<Printing />} />
        <Route path="/portfolio/productphotography" element={<ProductPhotography />} />
        <Route path="/portfolio/animation" element={<Animation />} />
        <Route path="/portfolio/outdoor" element={<OutdoorAdv />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router basename="/"> {/* 👈 no need for /admire-lb when using HashRouter */}
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
