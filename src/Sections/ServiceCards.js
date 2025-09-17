import { motion } from "framer-motion";
import backgroundImage from "../assets/Home/main-03.jpg";
import brainImg from "../assets/Flags-and-Icons/brain-01.svg";
import flameImg from "../assets/Flags-and-Icons/flame-01.svg";
import checkImg from "../assets/Flags-and-Icons/tick-01.svg";

function Story() {
  const cards = [
    {
      icon: brainImg,
      title: "STRATEGY",
      desc: "Focus on creating be it a product, a project, or a service.",
      animation: { hidden: { opacity: 0, x: "-100%" }, visible: { opacity: 1, x: 0 } },
    },
    {
      icon: flameImg,
      title: "EXPERTISE",
      desc: "A creative process of generating, developing, and communicating new ideas.",
      animation: { hidden: { opacity: 0, y: "-100%" }, visible: { opacity: 1, y: 0 } },
    },
    {
      icon: checkImg,
      title: "RESULT",
      desc: "Develop and refine the concept to get an effective visual communication of an idea or concept.",
      animation: { hidden: { opacity: 0, x: "100%" }, visible: { opacity: 1, x: 0 } },
    },
  ];

  return (
    <div
      className="py-52 px-4 bg-fixed bg-center bg-contain relative min-h-[500px] 2xl:-mt-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="2xl:mt-20 relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-3xl p-8 text-center shadow-2xl ring-1 ring-white/10 bg-white/10 backdrop-blur-[3px]"
            variants={card.animation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: idx * 0.3 }}
            viewport={{ once: true }}
          >
            {/* soft inner vignette */}
            <div className="pointer-events-none absolute inset-0 bg-white/5" />

            <div className="relative mb-6 flex justify-center">
              <div className="w-24 h-24 flex items-center justify-center bg-transparent rounded-full shadow-md">
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="w-32 h-32 object-contain"
                  draggable={false}
                />
              </div>
            </div>
            <h3 className="text-white text-lg font-bold mb-2">
              {card.title}
            </h3>
            <p className="text-white text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Story;
