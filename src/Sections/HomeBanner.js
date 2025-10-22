// src/components/HomeBanner.js
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../assets/Home/final-banner.png";
import card1 from "../assets/Home/pic1.jpg";
import card2 from "../assets/Home/pic2.jpg";
import card3 from "../assets/Home/pic3.jpg";
import card4 from "../assets/Home/pic4.jpg";
import card5 from "../assets/Home/pic5.jpg";

function HomeBanner() {
  const cards = [card1, card2, card3, card4, card5];

  return (
    <section
      id="home"
      className="relative flex items-center justify-start overflow-visible min-h-[100vh] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* text block */}
      <div className="relative z-20 text-white text-left px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-32 max-w-[90vw] sm:max-w-3xl lg:max-w-4xl">
        <h1
          className="
            font-azonix font-bold leading-[1.15] mb-16
            text-[clamp(1.8rem,4vw,5rem)]
            sm:text-[clamp(2.2rem,3.5vw,4.5rem)]
            xl:text-[clamp(2.5rem,3vw,5rem)]
            2xl:text-[clamp(2.5rem,2.5vw,6rem)]
          "
        >
          <span className="block">WHERE WE</span>
          <span className="block">
            TURN ORDINARY
            <span className="block">IDEAS INTO</span>
            <span className="text-pink-600 block">EXTRAORDINARY</span>
            VISUAL EXPERIENCES
          </span>
        </h1>
      </div>

      {/* bottom card strip */}
      <div
        className="
          absolute
          left-1/2 -translate-x-1/2
          bottom-[-6vh] md:bottom-[-8vh] xl:bottom-[-10vh] 2xl:bottom-[-12vh]
          w-full max-w-[95vw] md:max-w-[80vw] xl:max-w-[70vw]
          flex justify-center items-end
          z-30
        "
      >
        {/* Desktop row */}
        <div className="hidden md:flex items-end justify-center gap-6 xl:gap-10 2xl:gap-14">
          {cards.map((src, i) => (
            <div
              key={i}
              className={`
                rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white
                w-[clamp(120px,14vw,240px)]
                ${i % 2 === 0 ? "-translate-y-4 animate-float" : "translate-y-4 animate-floatReverse"}
              `}
            >
              <div className="aspect-[3/5]">
                <img
                  src={src}
                  alt={`highlight ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout - horizontally scrollable */}
        <div
          className="
            md:hidden
            flex gap-4
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory
            px-4 py-2
            w-full
            scrollbar-thin scrollbar-thumb-pink-600 scrollbar-track-transparent
          "
        >
          {cards.map((src, i) => (
            <div
              key={i}
              className={`
                flex-shrink-0 snap-center
                rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10 bg-white
                w-[35vw] max-w-[260px]
                ${i % 2 === 0 ? "-translate-y-2" : "translate-y-2"}
              `}
            >
              <div className="aspect-[3/5]">
                <img
                  src={src}
                  alt={`highlight ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
