import { Brain, Flame, CheckSquare } from "lucide-react";
import backgroundImage from "../assets/Home/home-background.jpg";

function Story() {
  const cards = [
    {
      icon: <Brain className="w-12 h-12 text-pink-600" />,
      title: "STRATEGY",
      desc: "Focus on creating be it a product, a project, or a service."
    },
    {
      icon: <Flame className="w-12 h-12 text-pink-600" />,
      title: "EXPERTISE",
      desc: "A creative process of generating, developing, and communicating new ideas."
    },
    {
      icon: <CheckSquare className="w-12 h-12 text-pink-600" />,
      title: "RESULT",
      desc: "Develop and refine the concept to get an effective visual communication of an idea or concept."
    }
  ];

  return (
    <div
      className="py-20 px-4 bg-fixed bg-center bg-cover relative min-h-[500px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-40 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg p-8 text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-pink-100 shadow-md">
                {card.icon}
              </div>
            </div>
            <h3 className="text-pink-600 text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-black text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;