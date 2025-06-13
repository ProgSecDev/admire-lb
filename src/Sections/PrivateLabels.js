import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/Banners/product.jpg";
import bags from '../assets/Private Labels/Bags.png';
import jar from '../assets/Private Labels/Jar.png';
import sachet from '../assets/Private Labels/Sachet.png';
import vaccumbag from '../assets/Private Labels/Vaccum bag.png';

function PrivateLabels() {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [labelDetail, setLabelDetail] = useState(null);

  const labelGroups = [
    { id: "Label A1", title: "JAR", mainImage: jar },
    { id: "Label B1", title: "BAGS", mainImage: bags },
    { id: "Label C1", title: "SACHET", mainImage: sachet },
    { id: "Label D1", title: "Silver Vaccum BAG", mainImage: vaccumbag },
  ];

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 text-white text-center w-full max-w-7xl px-4 sm:px-6">
        <h1 className="text-9xl pt-8" style={{ fontFamily: "Aldhabi, serif" }}>
          Private Labels
        </h1>

        <div className="bg-[#6F6D39] bg-opacity-50 rounded-6xl shadow-2xl mx-auto mb-24 px-4 sm:px-28 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {labelGroups.map(({ id, title, mainImage }, idx) => (
              <motion.div
                key={idx}
                layoutId={id}
                className="flex flex-row items-center text-left p-4 rounded-lg cursor-default h-full space-x-6"
              >
                <div className="w-[150px] h-[220px] flex-shrink-0 overflow-hidden">
                  <img
                    src={mainImage}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.h2
                  layoutId={`title-${id}`}
                  className="text-3xl"
                  style={{ fontFamily: "SilverForteGrungeGrunge" }}
                >
                  {title}
                </motion.h2>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateLabels;