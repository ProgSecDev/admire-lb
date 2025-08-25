import { Link } from "react-router-dom";
import corporateidentity from "../assets/Services/corporate-identity.png";
import corporatecatalogue from "../assets/Services/corporate-catalogues.png";
import privatelabel from "../assets/Services/private-label.png";
import socialmedia from "../assets/Services/social-media.png";
import branding from "../assets/Services/BRANDING.png";
import websitedesign from "../assets/Services/WEBSITE-DESIGN.png";
import animation from "../assets/Services/animation.png";
import modeling from "../assets/Services/3d-modeling.png";
import printing from "../assets/Services/printing.png";
import productphotography from "../assets/Services/product_photography.png";
import backgroundImage from "../assets/Home/main-page-01.jpg";

const services = [
  {
    icon: corporateidentity,
    lines: ["CORPORATE", "IDENTITY"],
    link: "/services/corporate-identity",
  },
  {
    icon: corporatecatalogue,
    lines: ["CORPORATE", "CATALOGUES"],
    link: "/services/corporate-catalogues",
  },
  {
    icon: privatelabel,
    lines: ["PRIVATE", "LABLES"],
    link: "/services/private-label",
  },
  { icon: branding, lines: ["BRANDING"], link: "/services/branding" },
  {
    icon: socialmedia,
    lines: ["SOCIAL MEDIA", "MANAGEMENT"],
    link: "/services/social-media",
  },
  {
    icon: productphotography,
    lines: ["PHOTO-", "GRAPHY"],
    link: "/services/photography",
  },
  { icon: printing, lines: ["PRINTING"], link: "/services/printing" },
  {
    icon: websitedesign,
    lines: ["WEBSITE", "DESIGN"],
    link: "/services/website-design",
  },
  // extras (optional)
  { icon: animation, lines: ["ANIMATION"], link: "/services/animation" },
  { icon: modeling, lines: ["3D", "MODELING"], link: "/services/modeling" },
];

function ServiceCard({ icon, lines }) {
  return (
    <div className="bg-white rounded-[26px] sm:rounded-[28px] px-6 sm:px-7 py-5 h-[110px] sm:h-[120px] shadow-[0_10px_24px_rgba(0,0,0,0.25)] flex items-center gap-5 text-left">
      <img
        src={icon}
        alt=""
        className="w-20 h-16 sm:w-16 sm:h-16 object-contain select-none"
        draggable={false}
      />
      <div className="leading-tight">
        {lines.length === 1 ? (
          <div className="text-pink-600 font-extrabold tracking-wide text-base sm:text-lg">
            {lines[0]}
          </div>
        ) : (
          <>
            <div className="text-pink-600 font-extrabold tracking-wide text-base sm:text-lg">
              {lines[0]}
            </div>
            <div className="text-pink-600 font-extrabold tracking-wide text-base sm:text-lg">
              {lines[1]}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="mt-20 w-full py-14 sm:py-16 md:py-20 px-6 md:px-12 text-center bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1
          className="text-3xl font-bold tracking-widest mb-6 text-white"
          style={{ fontFamily: "Azonix" }}
        >
          OUR SERVICES
        </h1>

        <div className="text-white pb-10">
          <p>
            At Admire, we craft innovative strategies and creative solutions to
            help brands stand out and connect with their audience. Our services
            cover the full spectrum of advertising - from branding, packaging,
            and graphic, design to digital marketing, social media management,
            content creation, and campaign execution. With a results-driven
            approach, we turn ideas into impactful experiences that drive
            growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.slice(0, 8).map((s, i) => {
            const Card = <ServiceCard key={i} icon={s.icon} lines={s.lines} />;
            return s.link ? (
              <Link
                to={s.link}
                key={i}
                className="block hover:-translate-y-0.5 transition will-change-transform"
                aria-label={
                  Array.isArray(s.lines) ? s.lines.join(" ") : s.lines
                }
              >
                {Card}
              </Link>
            ) : (
              <div key={i}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
