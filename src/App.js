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

        <Route path="/services/corporate-identity" element={<CorporateIdentity />} />
        <Route path="/services/corporate-catalogues" element={<CorporateCatalogue />} />
        <Route path="/services/private-label" element={<PrivateLabel />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/website-design" element={<WebsiteDesign />} />
        <Route path="/services/social-media" element={<SocialMedia />} />
        <Route path="/services/modeling" element={<Modeling />} />
        <Route path="/services/printing" element={<Printing />} />
        <Route path="/services/productphotography" element={<ProductPhotography />} />
        <Route path="/services/animation" element={<Animation />} />

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
