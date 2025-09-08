import { motion } from "framer-motion";
import backgroundImage from "../assets/Home/main-03.jpg";

const values = [
  {
    number: "1",
    title: "INNOVATION",
    desc:
      "We consistently generate novel concepts to ensure the presentation of your business is characterized by innovation and originality.",
    animation: { hidden: { opacity: 0, x: "-100%" }, visible: { opacity: 1, x: 0 } },
  },
  {
    number: "2",
    title: "CREATIVITY",
    desc:
      "We bring conceptual visions to life, showcasing the exceptional features of your brand.",
    animation: { hidden: { opacity: 0, x: "100%" }, visible: { opacity: 1, x: 0 } },
  },
  {
    number: "3",
    title: "DEDICATION",
    desc:
      "We are committed to meeting our clients' needs with unwavering enthusiasm and dedicated to ensuring their success.",
    animation: { hidden: { opacity: 0, x: "-100%" }, visible: { opacity: 1, x: 0 } },
  },
  {
    number: "4",
    title: "HARD WORK",
    desc:
      "Hard work and dedication have made us one of the most successful web design companies.",
    animation: { hidden: { opacity: 0, x: "100%" }, visible: { opacity: 1, x: 0 } },
  },
  {
    number: "5",
    title: "SUPPORT",
    desc:
      "We are committed to delivering reliable support and ensuring you receive the necessary technical assistance without any compromise.",
    animation: { hidden: { opacity: 0, x: "-100%" }, visible: { opacity: 1, x: 0 } },
  },
  {
    number: "6",
    title: "TECHNOLOGY",
    desc:
      "We are committed to staying informed about the latest technological trends, enabling us to provide cutting-edge online experiences.",
    animation: { hidden: { opacity: 0, x: "100%" }, visible: { opacity: 1, x: 0 } },
  },
];

const CoreValuesGrid = () => {
  return (
    <div className="-mt-20 py-4 px-4 bg-fixed bg-center bg-contain relative min-h-[500px]" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 overflow-hidden">
        {values.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4"
            variants={item.animation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center justify-center w-12 h-12">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-pink-600 text-white text-sm font-bold flex items-center justify-center">
                  {item.number}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-white text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreValuesGrid;