import backgroundImage from "../assets/Home/home-background.jpg";

const services = [
  { title: "3D MODELING", img: "Admire-presentation-new-89.jpg" },
  { title: "ANIMATION & VIDEO", img: "VIDEO-ANIMATION-2.jpg" },
  { title: "ARTWORK", img: "JS-Admire-Portfolio-2022_Page_72-scaled.jpg" },
  { title: "BRANDING", img: "Branding-1.jpg" },
  { title: "CORPORATE CATALOGUES", img: "Corp-Catalogue-1-1.jpg" },
  { title: "CORPORATE IDENTITY", img: "Corp-Identity-1-1.jpg" },
  { title: "OUTDOOR ADVERTISING", img: "outdoor-advertising.jpg" },
  { title: "PRIVATE LABEL", img: "Private-Label-1.jpg" },
  { title: "SOCIAL MEDIA", img: "JS-Admire-Portfolio-2022_Page_77-scaled.jpg" },
  { title: "WEBSITE", img: "Web-design-1.jpg" }
];

function PortfolioGrid() {
  return (
    <section className="relative z-20 bg-white py-16 px-4 text-center bg-fixed bg-center bg-cover min-h-[500px]"
             style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="text-4xl font-bold mb-4">OUR SERVICES</h1>
      <p className="text-gray-700 mb-12 max-w-xl mx-auto">
        <span className="text-pink-600 font-bold">We provide</span> concept-driven creative identities that are led by intelligent understanding of the task at hand.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={require(`../assets/Portfolio/${service.img}`)}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="bg-white p-4">
              <h2 className="text-lg font-bold text-pink-600">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioGrid;