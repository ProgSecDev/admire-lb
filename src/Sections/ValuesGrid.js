// src/Sections/CoreValuesGrid.js
import { motion } from "framer-motion";
import backgroundImage from "../assets/Home/main-03.jpg";

const values = [
  { 
    number: "1", 
    title: "INNOVATION", 
    desc: (
      <>
      We consistently generate novel concepts to ensure the <br /> presentation of your business is characterized by <br/> innovation and originality.
      </>
      ),
      animation: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
    },
  { 
    number: "2", 
    title: "CREATIVITY", 
    desc: (
      <> 
    We bring conceptual visions to life, showcasing the <br /> exceptional features of your brand.
  </>
  ), 
    animation: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } } },
  { 
    number: "3", 
    title: "DEDICATION", 
    desc: (
      <>
      We are committed to meeting our clients' needs with <br /> unwavering enthusiasm and dedicated to ensuring <br /> their success.
      </>
      ), 
      animation: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } } },
  { 
    number: "4", 
    title: "HARD WORK", 
    desc: (
      <>
      Hard work and dedication have made us one of the most <br /> successful web design companies.
      </>
      ), 
      animation: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } } },
  { 
    number: "5", 
    title: "SUPPORT", 
    desc: (
      <>
      We are committed to delivering reliable support and <br /> ensuring you receive the necessary technical assistance <br /> without any compromise.
      </>
      ), 
      animation: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } } },
  { 
    number: "6", 
    title: "TECHNOLOGY", 
    desc: (
      <>
      We are committed to staying informed about the latest <br /> technological trends, enabling us to provide cutting-edge <br /> online experiences. 
      </>
      ), 
      animation: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } } },
];

const RailRow = ({ item, delay, railLeftDot = "left-12", badgeLeft = "left-1", padLeft = "pl-14" }) => (
  <motion.div
    className={`relative ${padLeft} py-6`}
    variants={item.animation}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.8, ease: "easeOut", delay }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* pink dot ON the line */}
    <span className={`absolute ${railLeftDot} top-1/2 -translate-y-1/2 z-10 block w-2.5 h-2.5 rounded-full bg-pink-600`} />
    {/* badge slightly left of the line */}
    <span className={`absolute ${badgeLeft} top-1/2 -translate-y-1/2 grid place-items-center`}>
      <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white grid place-items-center">
        <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-pink-600 text-white text-xs md:text-sm font-bold grid place-items-center">
          {item.number}
        </span>
      </span>
    </span>

    <h3 className="font-azonix text-white text-lg md:text-xl font-bold tracking-wide mb-1">{item.title}</h3>
    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
  </motion.div>
);

function CoreValuesGrid() {
  const left = values.filter((_, i) => i % 2 === 0);   // 1,3,5
  const right = values.filter((_, i) => i % 2 === 1);  // 2,4,6

  return (
    <section
      className="-mt-12 md:-mt-20 py-10 md:py-16 px-3 sm:px-4 sm:bg-fixed sm2:bg-fixed md:bg-fixed bg-center bg-contain relative overflow-x-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* overlay with side gaps */}
      <div
        className="
          pointer-events-none absolute inset-y-0
          left-2 right-2 sm:left-6 sm:right-6 lg:left-12 lg:right-12
          bg-black/60
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* MOBILE/TABLET: single timeline */}
        <div className="md:hidden relative">
          {/* line (must match dot left) */}
          <span className="pointer-events-none absolute left-12 top-0 bottom-0 w-px bg-white/40 z-0" />
          {values.map((item, i) => (
            <RailRow key={item.number} item={item} delay={i * 0.06} />
          ))}
        </div>

        {/* DESKTOP: two columns */}
        <div className="hidden md:grid grid-cols-2 gap-10">
          {/* left column */}
          <div className="relative">
            <span className="pointer-events-none absolute left-16 top-0 bottom-0 w-px bg-white/40 z-0" />
            {left.map((item, i) => (
              <RailRow
                key={item.number}
                item={item}
                delay={i * 0.08}
                railLeftDot="left-16"
                badgeLeft="left-2"
                padLeft="pl-20"
              />
            ))}
          </div>
          {/* right column */}
          <div className="relative">
            <span className="pointer-events-none absolute left-16 top-0 bottom-0 w-px bg-white/40 z-0" />
            {right.map((item, i) => (
              <RailRow
                key={item.number}
                item={item}
                delay={i * 0.08}
                railLeftDot="left-16"
                badgeLeft="left-2"
                padLeft="pl-20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValuesGrid;
