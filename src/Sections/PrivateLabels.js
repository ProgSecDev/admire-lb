import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../assets/product.jpg";
import steak from "../assets/steak.png";
import seafood from "../assets/sea.png";
import chicken from "../assets/chicken.png";
import potato from "../assets/potato.png";
import pasta from "../assets/italian.png";
import mexican from "../assets/mexican.png";

function PrivateLabels() {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [labelDetail, setLabelDetail] = useState(null);

  const formulations = [
    { name: "Label A1", claim: "High Protein", image: steak, spec: "Specs for High Protein." },
    { name: "Label A2", claim: "Low Sodium", image: seafood, spec: "Specs for Low Sodium." },
    { name: "Label A3", claim: "Gluten Free", image: chicken, spec: "Specs for Gluten Free." },
    { name: "Label A4", claim: "Vegan", image: potato, spec: "Specs for Vegan." },
    { name: "Label A5", claim: "Organic", image: pasta, spec: "Specs for Organic." },
    { name: "Label A6", claim: "Spicy", image: mexican, spec: "Specs for Spicy." },
    { name: "Label A7", claim: "Low Sugar", image: steak, spec: "Specs for Low Sugar." },
    { name: "Label A8", claim: "Fortified", image: seafood, spec: "Specs for Fortified." },
    { name: "Label A9", claim: "Keto Friendly", image: chicken, spec: "Specs for Keto Friendly." },
    { name: "Label A10", claim: "Sustainable", image: potato, spec: "Specs for Sustainable." }
  ];

  const specialties = [
    { name: "Label B1", claim: "No MSG", image: seafood, spec: "Spec for No MSG." },
    { name: "Label B2", claim: "Paleo", image: chicken, spec: "Spec for Paleo." },
    { name: "Label B3", claim: "Keto", image: potato, spec: "Spec for Keto." },
    { name: "Label B4", claim: "Whole30", image: pasta, spec: "Spec for Whole30." },
    { name: "Label B5", claim: "Kosher", image: mexican, spec: "Spec for Kosher." }
  ];

  const exclusives = [
    { name: "Label C1", claim: "High Fiber", image: steak, spec: "Spec for High Fiber." },
    { name: "Label C2", claim: "Raw", image: seafood, spec: "Spec for Raw." },
    { name: "Label C3", claim: "Sugar Free", image: chicken, spec: "Spec for Sugar Free." }
  ];

  const premiums = [
    { name: "Label D1", claim: "Premium Choice", image: pasta, spec: "Spec for Premium Choice." },
    { name: "Label D2", claim: "Chef Crafted", image: mexican, spec: "Spec for Chef Crafted." }
  ];

  const labelGroups = [
    { id: "Label A1", title: "JAR", data: formulations },
    { id: "Label B1", title: "BAGS", data: specialties },
    { id: "Label C1", title: "SACHET", data: exclusives },
    { id: "Label D1", title: "Silver Vaccum BAG", data: premiums },
  ];

  const getCategoryByLabel = (label) => {
    if (!label) return [];
    if (label.startsWith("Label A")) return formulations;
    if (label.startsWith("Label B")) return specialties;
    if (label.startsWith("Label C")) return exclusives;
    if (label.startsWith("Label D")) return premiums;
    return [];
  };

  const handleLabelClick = (id) => {
    setSelectedLabel(id);
  };

  const handleCloseOverlay = () => {
    setSelectedLabel(null);
    setLabelDetail(null);
  };

  const handleDetailClick = (item) => {
    setLabelDetail(item);
  };

  const selectedList = getCategoryByLabel(selectedLabel);

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

        <div className="bg-[#6F6D39] rounded-6xl shadow-2xl mx-auto mb-24 px-4 sm:px-28 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {labelGroups.map(({ id, title, data }, idx) => (
              <motion.div
                key={idx}
                layoutId={id}
                className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left p-4 sm:p-4 rounded-lg cursor-pointer"
                onClick={() => handleLabelClick(id)}
              >
                <img
                  src={data[0].image}
                  alt={data[0].name}
                  className="w-36 h-56 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="flex flex-col justify-center items-center sm:items-start">
                  <motion.h2
                    layoutId={`title-${id}`}
                    className="text-4xl"
                    style={{ fontFamily: "SilverForteGrungeGrunge" }}
                  >
                    {title}
                  </motion.h2>
                  <motion.h5
                    layoutId={`subtitle-${id}`}
                    className={`text-3xl text-white`}
                    style={{ fontFamily: "Aldhabi, serif" }}
                  >
                    {data[0].claim}
                  </motion.h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedLabel && (
          <motion.div
            layoutId={selectedLabel}
            className="fixed inset-0 bg-white z-50 flex flex-col justify-start items-start p-4 md:p-6 overflow-y-auto"
          >
            <motion.button
              layoutId={`close-${selectedLabel}`}
              className="absolute top-4 right-4 text-3xl text-black"
              onClick={handleCloseOverlay}
            >
              &times;
            </motion.button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {selectedList.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start text-center gap-2 mt-4 p-2 border rounded shadow-sm"
                >
                  <motion.h5 className="text-sm text-black font-calibri w-full text-center">
                    {item.claim}
                  </motion.h5>
                  <motion.h2 className="text-lg w-full text-center">
                    {item.name}
                  </motion.h2>
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-contain rounded-lg mx-auto"
                  />
                  <motion.button
                    className="mt-2 px-4 py-1 bg-black text-white text-xs rounded mx-auto"
                    onClick={() => handleDetailClick(item)}
                  >
                    Details
                  </motion.button>
                </div>
              ))}
            </div>

            {labelDetail && (
              <motion.div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded shadow-lg max-w-md w-full text-center">
                  <h2 className="text-xl font-semibold mb-2">{labelDetail.name}</h2>
                  <img
                    src={labelDetail.image}
                    alt={labelDetail.name}
                    className="w-32 h-32 object-contain mx-auto mb-2"
                  />
                  <p className="text-sm mb-4">
                    {labelDetail.spec}
                  </p>
                  <button
                    className="px-4 py-1 bg-black text-white text-xs rounded"
                    onClick={() => setLabelDetail(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PrivateLabels;