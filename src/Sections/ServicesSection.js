// src/sections/ServicesSection.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import corporateidentity from "../assets/Services/latest/idenitty-01.svg";
import corporatecatalogue from "../assets/Services/latest/catalogue-01.svg";
import privatelabel from "../assets/Services/latest/private label-01.svg";
import branding from "../assets/Services/latest/branding-01.svg";
import socialmedia from "../assets/Services/latest/social media-01.svg";
import websitedesign from "../assets/Services/latest/website.svg";
import modeling from "../assets/Services/latest/3d-01.svg";
import animation from "../assets/Services/latest/animation-01.svg";
import printing from "../assets/Services/latest/printing-01.svg";
import outdoorAdvert from "../assets/Services/latest/outdoor-01.svg";
import productphotography from "../assets/Services/latest/photography-01.svg";

import bannerImage from "../assets/Services/latest/picture.png";
import backgroundImage from "../assets/Services/latest/bg-midpic.png";

// Floating animation keyframes
const floatAnimations = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes floatReverse {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
.animate-float { animation: float 4s ease-in-out infinite; }
.animate-floatReverse { animation: floatReverse 4s ease-in-out infinite; }
`;

const services = [
  { icon: corporateidentity, lines: ["CORPORATE", "IDENTITY"] },
  { icon: corporatecatalogue, lines: ["CORPORATE", "CATALOGUES"] },
  { icon: privatelabel, lines: ["PRIVATE", "LABLES"] },
  { icon: branding, lines: ["BRANDING"] },
  { icon: socialmedia, lines: ["SOCIAL MEDIA", "&", "MANAGEMENT"] },
  { icon: websitedesign, lines: ["WEBSITE DESIGN", "&", "DEVELOPMENT"] },
  { icon: modeling, lines: ["3D MODELING", "&", "INTERIOR"] },
  { icon: animation, lines: ["3D ANIMATION", "&", "SPOT TV"] },
  { icon: printing, lines: ["PRINTING"] },
  { icon: outdoorAdvert, lines: ["OUTDOOR CAMPAIGN"] },
  { icon: productphotography, lines: ["PHOTOGRAPHY"] },
];

function Banner() {
  return (
    <div
      className="
        relative w-full
        h-[300px] sm:h-[400px] lg:h-[600px] 4xl:h-[700px]
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center 2xl:-mb-10 3xl:mt-14 4xl:mt-28
      "
      style={{ backgroundImage: `url(${bannerImage})` }}
    />
  );
}

function ServiceCard({ icon, lines, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`
        group relative overflow-hidden
        rounded-xl sm:rounded-2xl bg-white
        shadow-md hover:shadow-lg transition
        flex flex-col
        ${index % 2 === 0 ? "animate-float" : "animate-floatReverse"}
      `}
    >
      {/* Square tile on mobile; fixed height on larger screens */}
      <div className="relative w-full aspect-square sm:aspect-auto sm:h-56 md:h-64 flex items-center justify-center">
        <img
          src={icon}
          alt={lines.join(" ")}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain select-none transition-transform duration-300 group-hover:scale-110"
          draggable={false}
        />
      </div>

      {/* Title block */}
      <div className="px-2 sm:px-4 pb-3 sm:pb-4 pt-0 sm:pt-2">
        <div className="text-center uppercase font-azonix tracking-wide leading-snug">
          {lines.map((line, i) => (
            <div
              key={i}
              className="text-pink-600 font-medium text-xs xs:text-sm sm:text-base"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [loadedIndexes, setLoadedIndexes] = useState([]);

  useEffect(() => {
    const timers = services.map((_, idx) =>
      setTimeout(() => setLoadedIndexes((prev) => [...prev, idx]), idx * 200)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <style>{floatAnimations}</style>

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
                  cover the full <br className="hidden md:block" /> spectrum of advertising — from branding, packaging,
                  and graphic design to digital marketing, social media management,
                  content creation, <br className="hidden md:block" /> and campaign execution. With a results-driven
                  approach, we turn ideas into impactful experiences that drive growth.
                </p>
              </div>

              {/* Grid — 2 per row on mobile, 4 on lg */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {services.map((s, i) => (
                  <ServiceCard key={i} icon={s.icon} lines={s.lines} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
