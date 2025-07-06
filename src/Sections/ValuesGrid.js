import backgroundImage from "../assets/Home/home-background.jpg";

const values = [
  {
    number: "1",
    title: "INNOVATION",
    desc:
      "We consistently generate novel concepts to ensure the presentation of your business is characterized by innovation and originality."
  },
  {
    number: "2",
    title: "CREATIVITY",
    desc:
      "We bring conceptual visions to life, showcasing the exceptional features of your brand."
  },
  {
    number: "3",
    title: "DEDICATION",
    desc:
      "We are committed to meeting our clients' needs with unwavering enthusiasm and dedicated to ensuring their success."
  },
  {
    number: "4",
    title: "HARD WORK",
    desc:
      "Hard work and dedication have made us one of the most successful web design companies."
  },
  {
    number: "5",
    title: "SUPPORT",
    desc:
      "We are committed to delivering reliable support and ensuring you receive the necessary technical assistance without any compromise."
  },
  {
    number: "6",
    title: "TECHNOLOGY",
    desc:
      "We are committed to staying informed about the latest technological trends, enabling us to provide cutting-edge online experiences."
  }
];

const CoreValuesGrid = () => {
  return (
    <div className="py-5 px-4 bg-fixed bg-center bg-cover relative min-h-[500px]" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {values.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="relative flex items-center justify-center w-8 h-8">
              <div className="w-8 h-8 rounded-full border-2 border-pink-600 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-pink-600 text-white text-sm font-bold flex items-center justify-center">
                  {item.number}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-pink-600 text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-800 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValuesGrid;