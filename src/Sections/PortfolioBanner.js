import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../assets/Portfolio/portfolio-cover.jpg";

function PortfolioBanner() {
  return (
    <div
      id="portfoliobanner"
      className="relative flex items-center h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full z-0"
        style={{
          height: "100vh",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Foreground Content */}
    </div>
  );
}

export default PortfolioBanner;