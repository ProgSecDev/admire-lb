import { Link } from "react-router-dom";

import corporateidentity from '../assets/Services/corporate-identity.jpg';
import corporatecatalogue from '../assets/Services/corporate-catalogues.jpg';
import privatelabel from '../assets/Services/private-label1.jpg';
import socialmedia from '../assets/Services/social-media.jpg';
import branding from '../assets/Services/BRANDING.jpg';
import websitedesign from '../assets/Services/WEBSITE-DESIGN.jpg';
import animation from '../assets/Services/animation.jpg';
import modeling from '../assets/Services/3d-modeling1.jpg';
import printing from '../assets/Services/NEW-ICONS-SERVICES-01.png';
import productphotography from '../assets/Services/NEW-ICONS-SERVICES-02.png';
import backgroundImage from "../assets/Services/services-bg.jpg";

const services = [
  {
    icon: corporateidentity,
    link: "/services/corporate-identity",
  },
  {
    icon: corporatecatalogue,
    link: "/services/corporate-catalogues",
  },
  {
    icon: privatelabel,
    link: "/services/private-label",
  },
  {
    icon: socialmedia,
    link: "/services/social-media",
  },
  {
    icon: branding,
    link: "/services/branding",
  },
  {
    icon: websitedesign,
    link: "/services/website-design",
  },
  {
    icon: animation,
    link: "/services/animation",
  },
  {
    icon: modeling,
    link: "/services/modeling",
  },
  {
    icon: printing,
    link: "/services/printing",
  },
  {
    icon: productphotography,
    link: "/services/productphotography",
  },
];

export default function ServicesSection() {
  return (
    <div
      className="w-full py-20 px-6 mt-40 md:px-16 bg-white/70 text-center bg-fixed bg-center bg-cover relative min-h-[500px] "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        OUR SERVICES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link
            to={service.link}
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={service.icon}
              alt="Service"
              className="w-full h-64 object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}