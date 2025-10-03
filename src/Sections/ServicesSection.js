// src/components/ServicesSection.js
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ import motion
import { useEffect, useState } from "react";

import corporateidentity from "../assets/Services/latest/idenitty-01.svg";
import corporatecatalogue from "../assets/Services/latest/catalogue-01.svg";
import socialmedia from "../assets/Services/latest/social media-01.svg";
import privatelabel from "../assets/Services/latest/private label-01.svg";
import branding from "../assets/Services/latest/branding-01.svg";
import modeling from "../assets/Services/latest/3d-01.svg";
import printing from "../assets/Services/latest/printing-01.svg";
import websitedesign from "../assets/Services/latest/website.svg";
import animation from "../assets/Services/latest/animation-01.svg";
import appDevelopment from "../assets/Services/latest/app-01.svg";
import outdoorAdvert from "../assets/Services/latest/outdoor-01.svg";
import productphotography from "../assets/Services/latest/photography-01.svg";
import bannerImage from "../assets/Services/latest/picture.png";
import backgroundImage from "../assets/Services/latest/bg-midpic.png";

const services = [
  { icon: corporateidentity, lines: ["CORPORATE", "IDENTITY"], link: "/services/corporate-identity" },
  { icon: corporatecatalogue, lines: ["CORPORATE", "CATALOGUES"], link: "/services/corporate-catalogues" },
  { icon: socialmedia, lines: ["SOCIAL MEDIA", "MANAGEMENT"], link: "/services/social-media" },
  { icon: privatelabel, lines: ["PRIVATE", "LABLES"], link: "/services/private-label" },
  { icon: branding, lines: ["BRANDING"], link: "/services/branding" },
  { icon: modeling, lines: ["3D MODELING"], link: "/services/modeling" },
  { icon: printing, lines: ["PRINTING"], link: "/services/printing" },
  { icon: websitedesign, lines: ["WEBSITE DESIGN"], link: "/services/website-design" },
  { icon: animation, lines: ["ANIMATION"], link: "/services/animation" },
  { icon: appDevelopment, lines: ["APP & DEVELOPMENT DESIGN"] },
  { icon: outdoorAdvert, lines: ["OUTDOOR ADVERTISING"] },
  { icon: productphotography, lines: ["PHOTOGRAPHY"] },
];

function Banner() {
  return (
    <div
      className="
        relative 
        w-full 
        h-[300px] sm:h-[400px] lg:h-[600px] 4xl:h-[700px]
        bg-cover bg-center bg-no-repeat 
        flex items-center justify-center 2xl:-mb-10 3xl:mt-14 4xl:mt-28
      "
      style={{ backgroundImage: `url(${bannerImage})` }}
    />
  );
}

function ServiceCard({ icon, lines, isVisible }) {
  const labelText = Array.isArray(lines) ? lines.join(" ") : String(lines);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="
        w-[250px] h-[160px]
        bg-white 
        rounded-2xl 
        shadow-md hover:shadow-lg
        transition-shadow duration-300 ease-linear
        flex flex-col items-center justify-center
        text-center mx-auto
      "
    >
      <img
        src={icon}
        alt={labelText}
        className="w-20 h-20 sm:w-24 sm:h-24 2xl:w-28 2xl:h-28 object-contain select-none mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
        draggable={false}
      />
      <div className="leading-tight">
        {lines.map((line, i) => (
          <div
            key={i}
            className="text-black font-extrabold tracking-wide text-sm sm:text-base font-azonix"
          >
            {line}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [loadedIndexes, setLoadedIndexes] = useState([]);

  useEffect(() => {
    services.forEach((_, idx) => {
      setTimeout(() => {
        setLoadedIndexes((prev) => [...prev, idx]);
      }, idx * 300); // stagger like BrandsSection
    });
  }, []);

  return (
    <>
      <Banner />

      {/* Outer wrapper stays black full-width */}
      <div className="relative w-full bg-black">
        <section className="relative -mt-1 w-full py-14 sm:py-16 md:py-20 text-center overflow-hidden">
          {/* Content container with background image */}
          <div
            className="relative 2xl:max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2100px] -mt-20 py-12 mx-auto px-6 md:px-12 bg-fixed bg-center bg-contain overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10">
              <h1 className="text-3xl font-bold tracking-widest mb-6 text-white font-azonix">
                OUR SERVICES
              </h1>

              <div className="text-white pb-10 font-raleway">
                <p>
                  At Admire, we craft innovative strategies and creative solutions to
                  help brands stand out and connect with their audience. Our services
                  cover the full <br /> spectrum of advertising - from branding, packaging,
                  and graphic design to digital marketing, social media management,
                  content creation,<br /> and campaign execution. With a results-driven
                  approach, we turn ideas into impactful experiences that drive
                  growth.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((s, i) => {
                  const Card = (
                    <ServiceCard
                      key={i}
                      icon={s.icon}
                      lines={s.lines}
                      isVisible={loadedIndexes.includes(i)}
                    />
                  );
                  return s.link ? (
                    <Link
                      to={s.link}
                      key={i}
                      className="block hover:-translate-y-0.5 transition will-change-transform"
                      aria-label={Array.isArray(s.lines) ? s.lines.join(" ") : String(s.lines)}
                    >
                      {Card}
                    </Link>
                  ) : (
                    <div key={i}>{Card}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
