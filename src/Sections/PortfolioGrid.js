// src/components/PortfolioGrid.js
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import PortfolioBanner from "./PortfolioBanner";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phoneIcon from "../assets/Flags-and-Icons/phone-01.svg";
import lineImage from "../assets/Portfolio/LINE-02.png";

// Images
import imgCorporateIdentity from "../assets/Portfolio/IDENTITY-01.jpg";
import imgCorporateCatalogues from "../assets/Portfolio/CATALOGUE-01.jpg";
import imgPrivateLabel from "../assets/Portfolio/LABEL-01.jpg";
import imgBranding from "../assets/Portfolio/BRANDING-01.jpg";
import imgSocialMedia from "../assets/Portfolio/SOCIAL MEDIA-01.jpg";
import imgWebsite from "../assets/Portfolio/WEBSITE-01.jpg";
import imgArtWork from "../assets/Portfolio/ART-WORK-01.jpg";
import img3dmodeling from "../assets/Portfolio/3D-MODELING-01.jpg";
import imgAnimationVideo from "../assets/Portfolio/ANIMATION-01.jpg";
import imgOutdoorAdvert from "../assets/Portfolio/OUTDOOR-01.jpg";

// Icons
import iconCorporateIdentity from "../assets/Portfolio/corporate-identity-01.svg";
import iconCorporateCatalogues from "../assets/Portfolio/corporate-catalogue-01.svg";
import iconPrivateLabel from "../assets/Portfolio/private lables-01.svg";
import iconBranding from "../assets/Portfolio/branding-01.svg";
import iconSocialMedia from "../assets/Portfolio/social media-01.svg";
import iconWebsite from "../assets/Portfolio/website-01.svg";
import iconArtwork from "../assets/Portfolio/aetwork-01.svg";
import icon3dmodeling from "../assets/Portfolio/3d modeling-01.svg";
import iconAnimationVideo from "../assets/Portfolio/animation-01.svg";
import iconOutdoorAdvert from "../assets/Portfolio/outdoor-01.svg";

const cardsA = [
  { slug: "corporate-identity", title: "CORPORATE IDENTITY", imgSrc: imgCorporateIdentity, iconSrc: iconCorporateIdentity, link: "/portfolio/corporate-identity", titleOffset: "mb-2 sm:mb-6" },
  { slug: "corporate-catalogues", title: "CORPORATE CATALOGUES", imgSrc: imgCorporateCatalogues, link: "/portfolio/corporate-catalogues", iconSrc: iconCorporateCatalogues, titleOffset: "mb-2 sm:mb-6" },
  { slug: "private-label", title: "PRIVATE LABEL", imgSrc: imgPrivateLabel, iconSrc: iconPrivateLabel, link: "/portfolio/private-label", titleOffset: "mb-2 sm:mb-6" },
  { slug: "branding", title: "BRANDING", imgSrc: imgBranding, iconSrc: iconBranding, link: "/portfolio/branding", titleOffset: "mb-4 sm:mb-10" },
  { slug: "social-media", title: ["SOCIAL MEDIA", "&", "MANAGEMENT"], imgSrc: imgSocialMedia, iconSrc: iconSocialMedia, link: "/portfolio/social-media", titleOffset: "mt-4 sm:mt-10" },
  { slug: "website", title: ["WEBSITE DESIGN", "&", "DEVELOPMENT"], imgSrc: imgWebsite, iconSrc: iconWebsite, link: "/portfolio/website-design" },
  { slug: "artwork", title: "ART WORK", imgSrc: imgArtWork, iconSrc: iconArtwork, titleOffset: "mb-4 sm:mb-10" },
  { slug: "3dmodeling", title: ["3D MODELING", "&", "INTERIOR"], imgSrc: img3dmodeling, iconSrc: icon3dmodeling, link: "/portfolio/modeling" },
  { slug: "animationvideo", title: ["3D ANIMATION", "&", "SPOT TV"], imgSrc: imgAnimationVideo, iconSrc: imgAnimationVideo, link: "/portfolio/animation", titleOffset: "mt-6 sm:mt-20" },
  { slug: "outdooradvertising", title: "OUTDOOR ADVERTISING", imgSrc: imgOutdoorAdvert, iconSrc: iconOutdoorAdvert, link: "/portfolio/outdoor", titleOffset: "mb-2 sm:mb-6" },
];

function ServiceCard({ title, imgSrc, iconSrc, titleOffset }) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-full aspect-square sm:aspect-auto sm:h-72">
        <img
          src={imgSrc}
          alt={Array.isArray(title) ? title.join(" ") : title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div className="hidden sm:flex relative w-[300px] justify-center -mt-1 translate-y-[280px]">
          <img src={lineImage} alt="divider line" className="w-full object-cover" draggable={false} />
        </div>
        <div className="absolute bottom-3 sm:-bottom-6 left-4 sm:left-10 -translate-x-1/2">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-pink-600 flex items-center justify-center shadow">
            <img src={iconSrc} alt="" aria-hidden className="w-10 h-10 sm:w-20 sm:h-20 object-contain" draggable={false} />
          </div>
        </div>
      </div>

      <div className="pt-4 sm:pt-10 pb-3 sm:pb-4 px-3 sm:px-6 h-[84px] sm:h-[150px] flex items-end justify-center">
        <div className={`font-azonix text-center text-pink-600 uppercase tracking-wide leading-snug sm:leading-tight text-base xs:text-lg sm:text-2xl ${titleOffset || ""}`}>
          {lines.map((line, i) => (
            <div key={i} className="text-pink-600 font-azonix font-medium">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const enableLinks = true;

export default function PortfolioGrid() {
  const [loadedIndexes, setLoadedIndexes] = useState([]);

  useEffect(() => {
    const timers = cardsA.map((_, idx) =>
      setTimeout(() => setLoadedIndexes((prev) => [...prev, idx]), idx * 200)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-gray-300">
      <PortfolioBanner />

      <section className="relative z-20 py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-8">
            {cardsA.map((s, idx) => {
              const label = Array.isArray(s.title) ? s.title.join(" ") : s.title;
              const to = s.link ?? `/portfolio/${s.slug}`;

              if (process.env.NODE_ENV !== "production") {
                if (!to.startsWith("/portfolio/")) console.warn(`PortfolioGrid: suspicious link "${to}" for slug "${s.slug}".`);
                if (/\s/.test(to)) console.warn(`PortfolioGrid: space detected in link "${to}" (slug "${s.slug}").`);
              }

              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`w-full ${idx % 2 === 0 ? "animate-float" : "animate-floatReverse"}`}
                >
                  {enableLinks ? (
                    <Link to={to} className="block transition-transform hover:-translate-y-0.5" aria-label={label}>
                      <ServiceCard {...s} />
                    </Link>
                  ) : (
                    <ServiceCard {...s} />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <footer className="relative w-full text-black mt-[clamp(2rem,8vw,6rem)]">
            <div
              className="
                relative z-10 w-full max-w-[1920px] 2k:max-w-[2300px] mx-auto
                px-4 sm:px-6 md:px-10 lg:px-[clamp(2rem,18vw,18rem)]
                pb-6 lg:pb-[clamp(1rem,4vw,2rem)]
                flex flex-col md:flex-row md:items-end gap-6 md:gap-8
                overflow-visible
              "
            >
              {/* Left: Logo + Location + Phone — NO shift on tablet, shift on lg+ */}
              <div
                className="
                  flex flex-col items-center md:items-start gap-4 md:flex-1
                  tablet:translate-x-0
                  lg:transform lg:-translate-x-[140px]
                  xl:-translate-x-[220px]
                  2xl:-translate-x-[300px]
                "
              >
                <img
                  src={require('../assets/Logos-and-Favicons/admire-logo-1.png')}
                  alt="Logo"
                  className="h-16 w-auto object-contain"
                />

                <div className="flex items-center text-sm sm:text-base text-center md:text-left gap-3">
                  <img
                    src={locationIcon}
                    alt="Location"
                    className="h-16 w-16 sm:h-8 tablet:h-12 tablet:w-12 tablet:-ml-4 sm:w-8 object-contain"
                  />
                  <a
                    href="https://maps.app.goo.gl/eFyidDwxjG3oq6NE7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black"
                  >
                    Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street
                  </a>
                </div>

                <div className="flex items-center text-sm sm:text-base gap-3 -mt-2 md:mt-0">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="h-16 w-16 sm:h-8 sm:w-8 tablet:h-12 tablet:w-12 tablet:-ml-4 object-contain"
                  />
                  <span>LEB +961 4 444107 - +961 70 777013 &nbsp;&nbsp; CYP +357 94 087 777</span>
                </div>
              </div>

              {/* Right: QR — NO shift on tablet, shift on lg+ */}
              <div
                className="
                  w-full md:w-auto md:ml-auto flex justify-center md:justify-end
                  tablet:translate-x-0
                  lg:transform lg:translate-x-[140px]
                  xl:translate-x-[220px]
                  2xl:translate-x-[300px]
                "
              >
                <img
                  src={require('../assets/Footer/final-qr.png')}
                  alt="QR code"
                  className="w-[min(45vw,220px)] md:w-[min(28vw,140px)] max-h-[180px] h-auto object-contain"
                />
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
