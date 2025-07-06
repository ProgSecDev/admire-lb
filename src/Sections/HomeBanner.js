import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../assets/Home/Home-Banner.jpg";

function Home() {
  return (
    <div
      id="home"
      className="relative flex items-center h-[75vh] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full z-0"
        style={{
          height: "75vh",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 text-white text-left px-6 max-w-4xl">
        <h1 className="text-4xl font-bold leading-snug mb-4">
          WE TURN ORDINARY IDEAS INTO EXTRAORDINARY VISUAL EXPERIENCES
        </h1>
        <p className="mb-6">
          We are a digital agency focused on creating the best innovations & world class quality solution.
        </p>

        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700">
            Get In Touch
          </button>
          <button className="px-6 py-3 bg-white text-pink-600 border border-pink-600 rounded-full hover:bg-pink-50">
            Request A Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
