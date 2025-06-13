import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../assets/Banners/product.jpg";
import asianfoodbackground from '../assets/Our Products/high-angle-asian-food-background.jpg';
import blackpepper from '../assets/Our Products/Powders/black pepper.jpg';
import chilliflakes from '../assets/Our Products/Powders/chilli-flakes.jpg';
import cinnamon from '../assets/Our Products/Powders/cinnamon.jpg';
import cumin from '../assets/Our Products/Powders/cumin.jpg';
import curry from '../assets/Our Products/Powders/curry.jpg';
import paprika from '../assets/Our Products/Powders/paprika.jpg';
import redchilli from '../assets/Our Products/Powders/red chilli.jpg';
import sevenspices from '../assets/Our Products/Powders/seven spices.jpg';
import sumac from '../assets/Our Products/Powders/sumac.jpg';
import turmeric from '../assets/Our Products/Powders/turmeric.jpg';
import whitepepper from '../assets/Our Products/Powders/white pepper.jpg';
import chicken from '../assets/Our Products/Blends/chicken.jpg';
import italian from '../assets/Our Products/Blends/italian.jpg';
import lemonpepper from '../assets/Our Products/Blends/lemon pepper.jpg';
import mexican from '../assets/Our Products/Blends/mexican.jpg';
import potato from '../assets/Our Products/Blends/potato.jpg';
import seafood from '../assets/Our Products/Blends/seafood.jpg';
import steak from '../assets/Our Products/Blends/steak.jpg';
import blackP from '../assets/Our Products/Powders/blackP.png';
import chickenC from '../assets/Our Products/Blends/chickenC.png';
import keshek from '../assets/Our Products/Zaatar + Kishek/keshek.jpg';
import zaatar from '../assets/Our Products/Zaatar + Kishek/zaatar.jpg';

function Product() {
  const [selectedId, setSelectedId] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);

  const productsLeft = [
    { name: "Turmeric", description: "Ground Turmeric.", image: blackpepper },
    { name: "Red Chili", description: "Ground Red Chili.", image: chilliflakes },
    { name: "Cinnamon", description: "Ground Ceylon Cinnamon.", image: cinnamon },
    { name: "Cumin", description: "Ground Cumin.", image: cumin },
    { name: "Curry", description: "Garlic, Coriander, Cumin, Turmeric, Ginger, Fenugreek, Cloves, Fennel, Mustard.", image: curry },
    { name: "Sumac", description: "Ground Sumac.", image: paprika },
    { name: "White Pepper", description: "Ground White Pepper.", image: redchilli },
    { name: "Black Pepper", description: "Ground Black Pepper.", image: sevenspices },
    { name: "Paprika", description: "Ground Sweet Paprika.", image: sumac },
    { name: "Seven Spices", description: "Allspices, Black Pepper, Cinnamon, Cloves, Nutmeg, White Pepper, Mahlab.", image: turmeric },
    { name: "Chili Flakes", description: "Ground Chili Flakes.", image: whitepepper },
    { name: "Zaatar", description: "Thyme, Sumac, Salt, Sesame.", image: keshek },
    { name: "Kishek", description: "Dried Yogurt, Salt, Bulgur, Wheat.", image: zaatar }
  ];

  const productsRight = [
    { name: "Seafood Blend", description: "Salt, White Pepper, Black Pepper, Coriander, Ginger Powder, Curry, Paprika, Cumin, Garlic Powder, Mustard Powder.", image: chicken },
    { name: "Steak Blend", description: "Coarse Garlic, Coarse Onion, Coarse Salt, Coriander, Coarse Black Pepper, Chili  Crushed, Paprika.", image: italian },
    { name: "Chicken Blend", description: "Garlic Powder, Coarse Onion, Coarse Black Pepper, Coarse Garlic, Parsley, Coriander, Salt, Chili Crushed, Cinnamon Powder, Paprika, Thyme Powder, Oil.", image: lemonpepper },
    { name: "Potato Blend", description: "Salt, Sugar, Monosodium, Onion Powder, Paprika, Oil, Cornstrach.", image: mexican },
    { name: "Italian Blend", description: "Garlic Powder, Onion Powder, Salt, Chili Crushed, Black Pepper, Basil, Paprika, Oregano.", image: potato },
    { name: "Mexican Blend", description: "Paprika, Turmeric, Coriander, Cumin, Onion Powder, Fenugreek, Fennel, Salt, Garlic Powder, Black Pepper, Rosemary, Chili Crushed.", image: seafood },
    { name: "Lemon Pepper Blend", description: "Turmeric, Black Pepper, Citric Acid, Salt, Dried Lime.", image: steak }
  ];

  const groups = [
    { id: "Powder 1", title: "POWDERS", data: productsLeft, image: blackP },
    { id: "Blend 1", title: "BLENDS", data: productsRight, image: chickenC },
  ];

  const handleCategoryClick = (id) => {
    setSelectedId(id);
  };

  const handleCloseOverlay = () => {
    setSelectedId(null);
    setDetailProduct(null);
  };

  const selectedGroup = groups.find(group => selectedId && selectedId.startsWith(group.id.split(' ')[0]));
  const selectedProducts = selectedGroup?.data || [];

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
          Our Product
        </h1>

        <div className="bg-[#6F6D39] bg-opacity-50 rounded-6xl shadow-2xl mx-auto mb-24 px-4 sm:px-28 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {groups.map(({ id, title, image }, idx) => (
              <motion.div
                key={idx}
                layoutId={id}
                className="flex flex-col sm:flex-row items-center justify-center text-center p-4 rounded-lg cursor-pointer"
                onClick={() => handleCategoryClick(id)}
              >
                <img
                  src={image}
                  alt={title}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 z-50 flex flex-col justify-start items-start p-4 md:p-6 overflow-y-auto"
            style={{
              backgroundImage: `url(${asianfoodbackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              {selectedProducts.map((prod, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2 mt-4 p-2 border rounded shadow-sm bg-white hover:scale-105 hover:z-10 transform transition duration-300"
                >
                  <motion.img
                    src={prod.image}
                    alt={prod.name}
                    className="w-30 h-30 object-contain rounded-lg"
                  />
                  <motion.h2 className="text-lg font-semibold text-black">
                    {prod.name}
                  </motion.h2>
                  <motion.p className="text-sm text-gray-700">
                    {prod.description}
                  </motion.p>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 w-full py-4 flex justify-center z-50">
              <button
                className="bg-[#C5713A] hover:bg-[#a85c2f] text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
                onClick={handleCloseOverlay}
              >
                Back to the Home Page
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Product;