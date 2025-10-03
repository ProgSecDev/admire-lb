// src/Sections/ServiceCards.js
import { motion } from "framer-motion";
import backgroundImage from "../assets/Home/main-03.jpg";
import brainImg from "../assets/Flags-and-Icons/brain-circuit1.png";
import flameImg from "../assets/Flags-and-Icons/comet1.png";
import checkImg from "../assets/Flags-and-Icons/tick1.png";

function Story() {
  const cards = [
    {
      icon: brainImg,
      title: "STRATEGY",
      desc: (
        <>
          Focus on creating be it a product, a project, or a service.
        </>
      ),
    },
    {
      icon: flameImg,
      title: "EXPERTISE",
      desc: (
        <>
          A creative process of generating, developing, and communicating new ideas.
        </>
      )
    },
    {
      icon: checkImg,
      title: "RESULT",
      desc: (
        <>
          Develop and refine the concept to get an effective visual communication of an idea or concept.
        </>
      )
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="py-52 px-4 bg-fixed bg-center bg-contain relative min-h-[500px] 2xl:-mt-20"
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

      <div className="font-raleway 2xl:mt-20 relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`${idx === 1 ? "md:translate-y-16" : ""}`}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-8 text-center shadow-2xl bg-white/60 
        flex flex-col justify-center items-center aspect-square max-w-[300px] mx-auto"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="w-10 h-10 object-contain"
                  draggable={false}
                />
              </div>
              <h3 className="font-azonix text-pink-600 text-2xl font-bold mb-3 tracking-wide">
                {card.title}
              </h3>
              <p className="text-black text-lg font-bold leading-relaxed">{card.desc}</p>
            </motion.div>
          </div>
        ))}


      </div>

    </div>
  );
}

export default Story;
