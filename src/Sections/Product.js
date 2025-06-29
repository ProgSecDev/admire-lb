import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../assets/Banners/product.jpg";
import powdersbackground from '../assets/Our Products/Powders-Background.jpg';
import chickenC from '../assets/Our Products/Blends/chickenC.png';
import chicken from '../assets/Our Products/Blends/20250629/Chicken Seasoning.png';
import italian from '../assets/Our Products/Blends/20250629/Italian Seasoning.png';
import lemonpepper from '../assets/Our Products/Blends/20250629/Lemon Pepper Seasoning.png';
import mexican from '../assets/Our Products/Blends/20250629/Mexican Seasoning.png';
import potato from '../assets/Our Products/Blends/20250629/Potato Seasoning.png';
import seafood from '../assets/Our Products/Blends/20250629/Seafood Seasoning.png';
import steak from '../assets/Our Products/Blends/20250629/Steak Seasoning.png';
import blackpepper from '../assets/Our Products/Powders/20250629/Black Pepper.png';
import chilliflakes from '../assets/Our Products/Powders/20250629/Chili Falkes Powder.png';
import cinnamon from '../assets/Our Products/Powders/20250629/Cinnamon Powder.png';
import cumin from '../assets/Our Products/Powders/20250629/Cumin Powder.png';
import curry from '../assets/Our Products/Powders/20250629/Curry Powder.png';
import paprika from '../assets/Our Products/Powders/20250629/Paprika Powder.png';
import redchilli from '../assets/Our Products/Powders/20250629/Red Chili Powder.png';
import sevenspices from '../assets/Our Products/Powders/20250629/Seven Spices.png';
import sumac from '../assets/Our Products/Powders/20250629/Sumac.png';
import turmeric from '../assets/Our Products/Powders/20250629/Turmeric Powder.png';
import whitepepper from '../assets/Our Products/Powders/20250629/White Pepper Powder.png';
import blackP from '../assets/Our Products/Powders/blackP.png';
import kishek from '../assets/Our Products/Powders/20250629/Kishek.png';
import zaatar from '../assets/Our Products/Powders/20250629/Zaatar.png';

function Product() {
  const [selectedId, setSelectedId] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);

  const titleStyles = {
    // Blends
    "Seafood Blend": { color: "#43c2d9" },
    "Steak Blend": { color: "#1c60a2" },
    "Chicken Blend": { color: "#cf3e30" },
    "Potato Blend": { color: "#e6d63f" },
    "Italian Blend": { color: "#1b9258" },
    "Mexican Blend": { color: "#881c3c" },
    "Lemon Pepper Blend": { color: "#a79e32" },
    // Powders
    "Turmeric": { color: "#e27f26" },
    "Red Chili": { color: "#ef394a" },
    "Cinnamon": { color: "#bc8c7b" },
    "Cumin": { color: "#b2bd66" },
    "Curry": { color: "#ffdf40" },
    "Sumac": { color: "#8f424a" },
    "White Pepper": { color: "#cdb896" },
    "Black Pepper": { color: "#a3b669" },
    "Paprika": { color: "#fa4133" },
    "Seven Spices": { color: "#c3c09d" },
    "Chili Flakes": { color: "#de373c" },
    "Zaatar": { color: "#687f28" },
    "Kishek": { color: "#f7a654" }
  };

  const productsLeft = [
    { name: "Seafood Blend", description: "Salt, White Pepper, Black Pepper, Coriander, Ginger Powder, Curry, Paprika, Cumin, Garlic Powder, Mustard Powder.", image: seafood },
    { name: "Steak Blend", description: "Coarse Garlic, Coarse Onion, Coarse Salt, Coriander, Coarse Black Pepper, Chili  Crushed, Paprika.", image: steak },
    { name: "Chicken Blend", description: "Garlic Powder, Coarse Onion, Coarse Black Pepper, Coarse Garlic, Parsley, Coriander, Salt, Chili Crushed, Cinnamon Powder, Paprika, Thyme Powder, Oil.", image: chicken },
    { name: "Potato Blend", description: "Salt, Sugar, Monosodium, Onion Powder, Paprika, Oil, Cornstrach.", image: potato },
    { name: "Italian Blend", description: "Garlic Powder, Onion Powder, Salt, Chili Crushed, Black Pepper, Basil, Paprika, Oregano.", image: italian },
    { name: "Mexican Blend", description: "Paprika, Turmeric, Coriander, Cumin, Onion Powder, Fenugreek, Fennel, Salt, Garlic Powder, Black Pepper, Rosemary, Chili Crushed.", image: mexican },
    { name: "Lemon Pepper Blend", description: "Turmeric, Black Pepper, Citric Acid, Salt, Dried Lime.", image: lemonpepper }
  ];

  const productsRight = [
    { name: "Turmeric", description: "", image: turmeric },
    { name: "Red Chili", description: "", image: redchilli },
    { name: "Cinnamon", description: "", image: cinnamon },
    { name: "Cumin", description: "", image: cumin },
    { name: "Curry", description: "Garlic, Coriander, Cumin, Turmeric, Ginger, Fenugreek, Cloves, Fennel, Mustard.", image: curry },
    { name: "Sumac", description: "", image: sumac },
    { name: "White Pepper", description: "", image: whitepepper },
    { name: "Black Pepper", description: "", image: blackpepper },
    { name: "Paprika", description: "", image: paprika },
    { name: "Seven Spices", description: "Allspices, Black Pepper, Cinnamon, Cloves, Nutmeg, White Pepper, Mahlab.", image: sevenspices },
    { name: "Chili Flakes", description: "", image: chilliflakes },
    { name: "Zaatar", description: "Thyme, Sumac, Salt, Sesame.", image: zaatar },
    { name: "Kishek", description: "Dried Yogurt, Salt, Bulgur, Wheat.", image: kishek }
  ];

  const groups = [
    { id: "Blend 1", title: "BLENDS", data: productsLeft, image: chickenC },
    { id: "Powder 1", title: "POWDERS", data: productsRight, image: blackP }
  ];

  const handleCategoryClick = (id) => setSelectedId(id);
  const handleCloseOverlay = () => { setSelectedId(null); setDetailProduct(null); };

  const selectedGroup = groups.find(group => selectedId && selectedId.startsWith(group.id.split(' ')[0]));
  const selectedProducts = selectedGroup?.data || [];

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 text-white text-center w-full max-w-7xl px-4 sm:px-6">
        <h1 className="text-9xl pt-8" style={{ fontFamily: "Aldhabi, serif" }}>
          Our Product
        </h1>

        <div className="bg-[#6F6D39] bg-opacity-80 rounded-6xl shadow-2xl mx-auto mb-24 px-4 sm:px-28 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {groups.map(({ id, title, image }, idx) => (
              <motion.div key={idx} layoutId={id} className="flex flex-col sm:flex-row items-center justify-center text-center p-4 rounded-lg cursor-pointer" onClick={() => handleCategoryClick(id)}>
                <img src={image} alt={title} className="w-36 h-56 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4" />
                <div className="flex flex-col justify-center items-center sm:items-start">
                  <motion.h2 layoutId={`title-${id}`} className="text-4xl" style={{ fontFamily: "SilverForteGrungeGrunge" }}>{title}</motion.h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} className="fixed inset-0 z-50 flex flex-col justify-start items-start p-4 md:p-6 overflow-y-auto" style={{ backgroundImage: `url(${powdersbackground})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              {selectedProducts.map((prod, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2 mt-4 p-1 border rounded shadow-sm bg-white hover:scale-105 hover:z-10 transform transition duration-300 max-h-[350px] max-w-[350px]">
                  <motion.img src={prod.image} alt={prod.name} className="w-30 h-60 object-contain rounded-lg" />
                  <motion.h2 className="text-lg font-semibold text-black" style={{ fontFamily: "Square 721 Bold BT", ...titleStyles[prod.name] }}>{prod.name}</motion.h2>
                  <motion.p className="text-sm text-gray-700">{prod.description}</motion.p>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 w-full py-4 flex justify-center z-50">
              <button className="bg-[#C5713A] hover:bg-[#a85c2f] text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md transition duration-300" onClick={handleCloseOverlay}>
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