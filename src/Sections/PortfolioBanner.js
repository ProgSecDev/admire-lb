// src/components/PortfolioBanner.js
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
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Gradient Fade into Grid Background */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-300 z-20" />

      {/* Foreground Content (optional) */}
    </div>
  );
}

export default PortfolioBanner;
