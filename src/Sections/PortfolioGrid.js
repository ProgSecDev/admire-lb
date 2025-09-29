import PortfolioBanner from "./PortfolioBanner";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phoneIcon from "../assets/Flags-and-Icons/phone-01.svg";

// Images
import imgCorporateIdentity from "../assets/Portfolio/IDENTITY-01.jpg";
import imgCorporateCatalogues from "../assets/Portfolio/CATALOGUE-01.jpg";
import imgPrivateLabel from "../assets/Portfolio/LABEL-01.jpg";
import imgBranding from "../assets/Portfolio/Branding-1.jpg";
import imgSocialMedia from "../assets/Portfolio/social-media.jpg";
import imgWebsite from "../assets/Portfolio/WEBSITE-01.jpg";
import imgArtWork from "../assets/Portfolio/artwork.jpg";
import img3dmodeling from "../assets/Portfolio/3d-modeling.jpg";
import imgAnimationVideo from "../assets/Portfolio/animation-video.jpg";
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
  { slug: "corporate-identity", title: "CORPORATE IDENTITY", imgSrc: imgCorporateIdentity, iconSrc: iconCorporateIdentity },
  { slug: "corporate-catalogues", title: "CORPORATE CATALOGUES", imgSrc: imgCorporateCatalogues, iconSrc: iconCorporateCatalogues },
  { slug: "private-label", title: "PRIVATE LABEL", imgSrc: imgPrivateLabel, iconSrc: iconPrivateLabel },
  { slug: "branding", title: "BRANDING", imgSrc: imgBranding, iconSrc: iconBranding },
  { slug: "social-media", title: "SOCIAL MEDIA MANAGEMENT", imgSrc: imgSocialMedia, iconSrc: iconSocialMedia },
  { slug: "website", title: "WEBSITE DESIGN & DEVELOPMENT", imgSrc: imgWebsite, iconSrc: iconWebsite },
  { slug: "artwork", title: "ART WORK", imgSrc: imgArtWork, iconSrc: iconArtwork },
  { slug: "3dmodeling", title: "3D MODELING", imgSrc: img3dmodeling, iconSrc: icon3dmodeling },
  { slug: "animationvideo", title: "ANIMATION & VIDEO", imgSrc: imgAnimationVideo, iconSrc: iconAnimationVideo },
  { slug: "outdooradvertising", title: "OUTDOOR ADVERTISING", imgSrc: imgOutdoorAdvert, iconSrc: iconOutdoorAdvert },
];

function ServiceCard({ title, imgSrc, iconSrc }) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl even:lg:mt-16">
      <div className="relative w-full h-72">
        <img
          src={imgSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute -bottom-16 -left-2 text-white grid place-items-center">
          <img src={iconSrc} alt="" aria-hidden className="w-28 h-28" draggable={false} />
        </div>
      </div>

      <div className="pt-10 pb-6 px-6 h-[130px] flex items-end justify-center">
        <h2 className="font-azonix text-2xl text-center text-pink-600 font-extrabold uppercase tracking-wide leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  return (
    <div className="bg-gray-300">
      {/* Banner Section */}
      <PortfolioBanner />

      {/* Grid Section */}
      <section className="relative z-20 py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {cardsA.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                imgSrc={s.imgSrc}
                iconSrc={s.iconSrc}
              />
            ))}
          </div>
        </div>

        <footer className="relative w-full text-black">
          <div className="relative z-10 mx-auto max-w-7xl 4xl:-mb-20 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
              {/* left column */}
              <div className="flex flex-col items-center 3xl:-ml-48 3xl:-mt-10 4xl:mt-8 4xl:-ml-[550px] md:items-start gap-4">
                <img
                  src={require("../assets/Logos-and-Favicons/admire-logo-1.png")}
                  alt="Logo"
                  className="h-16 4xl:h-28 w-auto object-contain"
                />

                <div className="flex items-center 4xl:-mt-2 text-sm 4xl:text-2xl md:text-base text-center md:text-left">
                  <img
                    src={locationIcon}
                    alt="Location"
                    className="h-12 w-20 4xl:h-20 object-contain"
                  />
                  <span>
                    Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street
                  </span>
                </div>

                <div className="flex items-center -mt-4 4xl:-mt-10 text-sm 4xl:text-2xl md:text-base flex-wrap text-center md:text-left">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="h-12 w-20 4xl:h-20 object-contain"
                  />
                  <span>
                    LEB +961 4 444107 - +961 70 777013 &nbsp;&nbsp;&nbsp; CYP +357 94 087 777
                  </span>
                </div>
              </div>

              {/* right column: QR */}
              <div className="flex justify-center 3xl:-mr-40 4xl:-mr-80 md:justify-end">
                <img
                  src={require("../assets/Footer/QR-01.png")}
                  alt="QR code"
                  className="h-40 w-80 4xl:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </footer>

      </section>
    </div>
  );
}