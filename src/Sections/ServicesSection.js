// src/components/ServicesSection.js
import { Link } from "react-router-dom";
import corporateidentity from "../assets/Services/identity-01.svg";
import corporatecatalogue from "../assets/Services/catalogue-01.svg";
import socialmedia from "../assets/Services/social media-01.svg";
import privatelabel from "../assets/Services/private lables-01.svg";
import branding from "../assets/Services/branding-01.svg";
import modeling from "../assets/Services/3d-modeling-01.svg";
import printing from "../assets/Services/printing-01.svg";
import websitedesign from "../assets/Services/website-01.svg";
import animation from "../assets/Services/animation-01.svg";
import appDevelopment from "../assets/Services/app-01.svg";
import outdoorAdvert from "../assets/Services/outdoor-advertising-01.svg";
import productphotography from "../assets/Services/photography-01.svg";
import bannerImage from "../assets/Services/services-banner-b.png";

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
  { icon: appDevelopment, lines: ["APP & DEVELOPMENT DESIGN"]},
  { icon: outdoorAdvert, lines: ["OUTDOOR ADVERTISING"]},
  { icon: productphotography, lines: ["PHOTOGRAPHY"]},
];

function Banner() {
  return (
    <div
      className="
        relative 
        w-full 
        h-[300px] sm:h-[400px] lg:h-[500px] 
        bg-cover bg-center bg-no-repeat 
        flex items-center justify-center 3xl:mt-14 4xl:mt-28
      "
      style={{ backgroundImage: `url(${bannerImage})` }}
    />
  );
}

function ServiceCard({ icon, lines }) {
  const labelText = Array.isArray(lines) ? lines.join(" ") : String(lines);

  return (
    <div
      className="
        w-[200px] aspect-square   /* square card */
        bg-white 
        rounded-2xl 
        shadow-md hover:shadow-lg
        transition-shadow duration-300 ease-linear
        flex flex-col items-center justify-center
        text-center
      "
    >
      <img
        src={icon}
        alt={labelText}
        className="w-20 h-20 sm:w-28 sm:h-28 2xl:w-56 2xl:h-40 object-cover select-none mb-3"
        draggable={false}
      />
      <div className="leading-tight">
        {lines.map((line, i) => (
          <div
            key={i}
            className="text-pink-600 -translate-y-4 font-extrabold tracking-wide text-sm sm:text-base font-azonix"
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}




export default function ServicesSection() {
  return (
    <>
      <Banner />

      <section className="relative -mt-1 w-full py-14 sm:py-16 md:py-20 px-6 md:px-12 text-center bg-black overflow-hidden">
        {/* Top Blur */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-black/70 to-transparent backdrop-blur-sm" />

        {/* Bottom Blur */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/70 to-transparent backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <h1
            className="text-3xl font-bold tracking-widest mb-6 text-white font-azonix"
          >
            OUR SERVICES
          </h1>

          <div className="text-white pb-10 font-calibri">
            <p>
              At Admire, we craft innovative strategies and creative solutions to
              help brands stand out and connect with their audience. Our services
              cover the full spectrum of advertising - from branding, packaging,
              and graphic design to digital marketing, social media management,
              content creation, and campaign execution. With a results-driven
              approach, we turn ideas into impactful experiences that drive
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.slice(0, 12).map((s, i) => {
              const Card = <ServiceCard key={i} icon={s.icon} lines={s.lines} />;
              const stagger = "sm:even:mt-8 lg:even:mt-12"; // one up, one down
              return s.link ? (
                <Link
                  to={s.link}
                  key={i}
                  className={`block hover:-translate-y-0.5 transition will-change-transform ${stagger}`}
                  aria-label={Array.isArray(s.lines) ? s.lines.join(" ") : String(s.lines)}
                >
                  {Card}
                </Link>
              ) : (
                <div key={i} className={stagger}>
                  {Card}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
