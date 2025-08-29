// import backgroundImage from "../assets/Home/home-background.jpg";

// Images
import imgCorporateIdentity from "../assets/Portfolio/corporate-identity.jpg";
import imgCorporateCatalogues from "../assets/Portfolio/corporate-catalogs.jpg";
import imgPrivateLabel from "../assets/Portfolio/private-lables.jpg";
import imgBranding from "../assets/Portfolio/Branding-1.jpg";
import imgSocialMedia from "../assets/Portfolio/social-media.jpg";
import imgWebsite from "../assets/Portfolio/web-design.jpg";
import imgArtWork from "../assets/Portfolio/artwork.jpg";
import img3dmodeling from "../assets/Portfolio/3d-modeling.jpg";
import imgAnimationVideo from "../assets/Portfolio/animation-video.jpg";
import imgOutdoorAdvert from "../assets/Portfolio/outdoor-advertising.jpg";
// import imgPrinting from "../assets/Portfolio/printing.jpg";
// import imgPhotography from "../assets/Portfolio/photography.jpeg";

// Icons (SVG/PNG). Keep them in e.g. src/assets/PortfolioIcons/
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
// import iconPrinting from "../assets/Portfolio/printing-01.svg";
// import iconPhotography from "../assets/Portfolio/photography-01.svg";

const cardsA = [
  {
    slug: "corporate-identity",
    title: "CORPORATE IDENTITY",
    imgSrc: imgCorporateIdentity,
    iconSrc: iconCorporateIdentity,
  },
  {
    slug: "corporate-catalogues",
    title: "CORPORATE CATALOGUES",
    imgSrc: imgCorporateCatalogues,
    iconSrc: iconCorporateCatalogues,
  },
    {
    slug: "private-label",
    title: "PRIVATE LABEL",
    imgSrc: imgPrivateLabel,
    iconSrc: iconPrivateLabel,
  },
  {
    slug: "branding",
    title: "BRANDING",
    imgSrc: imgBranding,
    iconSrc: iconBranding,
  },
  {
    slug: "social-media",
    title: "SOCIAL MEDIA MANAGEMENT",
    imgSrc: imgSocialMedia,
    iconSrc: iconSocialMedia,
  },
  {
    slug: "website",
    title: "WEBSITE DESIGN",
    imgSrc: imgWebsite,
    iconSrc: iconWebsite,
  },
  {
    slug: "artwork",
    title: "ART WORK",
    imgSrc: imgArtWork,
    iconSrc: iconArtwork,
  },
  {
    slug: "3dmodeling",
    title: "3D MODELING",
    imgSrc: img3dmodeling,
    iconSrc: icon3dmodeling,
  },
  {
    slug: "animationvideo",
    title: "ANIMATION & VIDEO",
    imgSrc: imgAnimationVideo,
    iconSrc: iconAnimationVideo,
  },
  {
    slug: "outdooradvertising",
    title: "OUTDOOR ADVERTISING",
    imgSrc: imgOutdoorAdvert,
    iconSrc: iconOutdoorAdvert,
  },
  // {
  //   slug: "printing",
  //   title: "PRINTING",
  //   imgSrc: imgPrinting,
  //   iconSrc: iconPrinting,
  // },
  // {
  //   slug: "photography",
  //   title: "PHOTOGRAPHY",
  //   imgSrc: imgPhotography,
  //   iconSrc: iconPhotography,
  // },
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
          <img
            src={iconSrc}
            alt=""
            aria-hidden
            className="w-28 h-28"
            draggable={false}
          />
        </div>
      </div>

      <div className="pt-10 pb-6 px-6 h-[130px] flex items-end justify-center">
        <h2 className="font-calibri text-2xl text-center text-pink-600 font-extrabold uppercase tracking-wide leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  return (
    <section
      className="relative z-20 py-16 px-4 text-center md:bg-fixed bg-center bg-cover"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/10" aria-hidden />
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-3xl font-bold tracking-widest mb-3" style={{ fontFamily: "Azonix" }}>
          OUR SERVICES
        </h1>
        <p className="text-gray-700 mb-12 max-w-xl mx-auto">
          <span className="text-pink-600 font-bold">We provide</span> concept-driven creative
          identities that are led by intelligent understanding of the task at hand.
        </p> */}

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
    </section>
  );
}
