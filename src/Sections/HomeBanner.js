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
      className="relative flex items-center overflow-visible h-[90vh] md:h-[95vh] lg:h-screen"
    >
      {/* background image */}
      <div
        className="absolute inset-0 z-0 xl:bg-cover md:bg-cover sm:bg-cover bg-center bg-no-repeat h-[100vh]"
        style={{ backgroundImage: `url(${banner})` }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-10 z-10" />

      {/* foreground copy */}
      <div className="relative z-20 text-white text-left px-6 max-w-4xl -mt-20">
        <h1 className="font-azonix text-3xl 4xl:text-7xl 4xl:ml-20 sm:text-4xl font-bold leading-snug mb-4">
          <span className="block">WHERE WE</span>
          <span className="block">
            TURN ORDINARY
            <span className="block">IDEAS INTO</span>
            <span className="text-pink-600 block">EXTRAORDINARY</span>
            VISUAL EXPERIENCES
          </span>
        </h1>
        <div className="flex gap-4">
          {/* <button className="4xl:px-20 4xl:py-10 4xl:text-4xl 4xl:ml-20 4xl:mt-14 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700">
            Get In Touch
          </button> */}
        </div>
      </div>

      {/* bottom card strip */}
      <div className="4xl:p-10 translate-y-10 absolute left-1/2 -translate-x-1/2 bottom-[-100px] sm:bottom-[-64px] md:bottom-[-72px] z-30 w-full px-4">
        {/* Desktop row */}
        <div className="hidden md:flex items-end justify-center gap-4 4xl:gap-24">
  {cards.map((src, i) => (
    <div
      key={i}
      className={`rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white
        w-[clamp(88px,15vw,192px)] 4xl:w-[260px]
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


        {/* Mobile layout */}
        <div className="grid grid-cols-3 gap-2 place-items-center md:hidden">
          {cards.slice(0, 3).map((src, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10 bg-white ${
                i % 2 === 0 ? "-translate-y-3" : "translate-y-3"
              } w-[clamp(80px,28vw,120px)] 4xl:w-[180px]`}
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

          <div
            className="rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10 bg-white col-start-1 row-start-2 -translate-y-3 w-[clamp(80px,28vw,140px)] 4xl:w-[200px]"
          >
            <div className="aspect-[3/5]">
              <img
                src={cards[3]}
                alt="highlight 4"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>

          <div
            className="rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10 bg-white col-start-3 row-start-2 translate-y-3 w-[clamp(80px,28vw,140px)] 4xl:w-[200px]"
          >
            <div className="aspect-[3/5]">
              <img
                src={cards[4]}
                alt="highlight 5"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
