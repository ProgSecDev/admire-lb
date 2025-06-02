import React from "react";
import { Element } from "react-scroll";
import Home from "./Home";
import Story from "./AboutUs";
import Product from "./Product";
import PrivateLabels from "./PrivateLabels";
import Footer from "./Footer";

const SpicyPage = () => (
  <>
    <Element name="home"><Home /></Element>
    <Element name="story"><Story /></Element>
    <Element name="product"><Product /></Element>
    <Element name="labels"><PrivateLabels /></Element>
    <Element name="footer"><Footer /></Element>
  </>
);

export default SpicyPage;
