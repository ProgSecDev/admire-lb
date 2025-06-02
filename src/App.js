import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";

import Nav from "./Components/Nav";
import "./App.css";
import Home from "./Sections/Home";
import Product from "./Sections/Product";
import Story from "./Sections/AboutUs";
import Footer from "./Sections/Footer";
import Recipes from "./Screens/Recipes";
import SpicyPage from "./Sections/SpicyPage";

const AppContent = () => {
  const location = useLocation();

  // Function to handle scrolling with a custom duration
  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800, // Set the duration in milliseconds (e.g., 1000ms = 1 second)
      delay: 0,
      smooth: "easeInOutQuad", // You can choose different easing functions
    });
  };

  return (
    <>
      {/* Conditionally render Nav */}
      {location.pathname !== "/recipes" && <Nav />}
      
      {/* Main Sections that should always be visible on the root page 
      {location.pathname.toLowerCase().startsWith("/spicy") && (
        <>
          <Element name="home">
            <Home />
          </Element>
          <Element name="story">
            <Story />
          </Element>
          <Element name="product">
            <Product />
          </Element>
          <Element name="footer">
            <Footer />
          </Element>
        </>
      )}
      */}
      
      {/* Routes for other pages */}
      <Routes>
        <Route path="/spicy" element={<SpicyPage />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
