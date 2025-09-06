import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import banner from "../assets/Home/Home-Banner.jpg";
import card1 from "../assets/Home/pic1.jpg";
import card2 from "../assets/Home/pic2.jpg";
import card3 from "../assets/Home/pic3.jpg";
import card4 from "../assets/Home/pic4.jpg";
import card5 from "../assets/Home/pic5.jpg";

function HomeBanner() {
  const cards = [card1, card2, card3, card4, card5];

  const floatUp = {
    y: [0, -30, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const floatDown = {
    y: [0, 30, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="home"
      className="relative flex items-center overflow-visible h-[90vh] md:h-[95vh] lg:h-screen"
    >
      {/* background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-[120vh]"
        style={{ backgroundImage: `url(${banner})` }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-10" />

      {/* foreground copy */}
      <div className="relative z-20 text-white text-left px-6 max-w-4xl -mt-20 lg:ml-40">
        <h1 className="text-3xl sm:text-4xl font-bold leading-snug mb-4">
          <span className="block">WHERE WE</span>
          <span className="block">
            TURN ORDINARY
            <span className="block">IDEAS INTO</span>
            <span className="text-pink-600 block">EXTRAORDINARY</span>
            VISUAL EXPERIENCES
          </span>
        </h1>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700">
            Get In Touch
          </button>
        </div>
      </div>

      {/* bottom card strip */}
      <div className="translate-y-10 absolute left-1/2 -translate-x-1/2 bottom-[-56px] sm:bottom-[-64px] md:bottom-[-72px] z-30">
        <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
          {cards.map((src, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white ${
                i % 2 === 0
                  ? "-translate-y-4 sm:-translate-y-5"
                  : "translate-y-4 sm:translate-y-5"
              }`}
              style={{ width: "clamp(88px,13vw,192px)" }}
              animate={i % 2 === 0 ? floatUp : floatDown}
            >
              <div className="aspect-[3/5]">
                <img
                  src={src}
                  alt={`highlight ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;