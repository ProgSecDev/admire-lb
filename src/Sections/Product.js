import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../assets/product.jpg";
import blackpepper from '../assets/Powders/black pepper.jpg';
import chilliflakes from '../assets/Powders/chilli-flakes.jpg';
import cinnamon from '../assets/Powders/cinnamon.jpg';
import cumin from '../assets/Powders/cumin.jpg';
import curry from '../assets/Powders/curry.jpg';
import paprika from '../assets/Powders/paprika.jpg';
import redchilli from '../assets/Powders/red chilli.jpg';
import sevenspices from '../assets/Powders/seven spices.jpg';
import sumac from '../assets/Powders/sumac.jpg';
import turmeric from '../assets/Powders/turmeric.jpg'
import whitepepper from '../assets/Powders/white pepper.jpg';
import chicken from '../assets/Blends/chicken.jpg';
import italian from '../assets/Blends/italian.jpg';
import lemonpepper from '../assets/Blends/lemon pepper.jpg';
import mexican from '../assets/Blends/mexican.jpg';
import potato from '../assets/Blends/potato.jpg';
import seafood from '../assets/Blends/seafood.jpg';
import steak from '../assets/Blends/steak.jpg';
import blackP from '../assets/Powders/blackP.png';
import chickenC from '../assets/Blends/chickenC.png';

function Product() {
  const [selectedId, setSelectedId] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);

  const productsLeft = [
    { name: "Powder 1", description: "Black Pepper", image: blackpepper, recipe: "Recipe for Black Pepper." },
    { name: "Powder 2", description: "Chilli Flakes", image: chilliflakes, recipe: "Chilli Flakes Recipe." },
    { name: "Powder 3", description: "Cinnamon", image: cinnamon, recipe: "Cinnamon Recipe." },
    { name: "Powder 4", description: "Cumin", image: cumin, recipe: "Cumin Recipe." },
    { name: "Powder 5", description: "Curry", image: curry, recipe: "Curry Recipe." },
    { name: "Powder 6", description: "Paprika", image: paprika, recipe: "Paprika Recipe." },
    { name: "Powder 7", description: "Red Chilli", image: redchilli, recipe: "Red Chilli Recipe." },
    { name: "Powder 8", description: "Seven Spices", image: sevenspices, recipe: "Seven Spices Recipe." },
    { name: "Powder 9", description: "Sumac", image: sumac, recipe: "Sumac Recipe." },
    { name: "Powder 10", description: "Turmeric", image: turmeric, recipe: "Turmeric Recipe." },
    { name: "Powder 11", description: "White Pepper", image: whitepepper, recipe: "White Pepper Recipe." }
  ];

  const productsRight = [
    { name: "Blend 1", description: "Chicken", image: chicken, recipe: "Chicken Recipe." },
    { name: "Blend 2", description: "Italian", image: italian, recipe: "Italian Recipe." },
    { name: "Blend 3", description: "Lemon Pepper", image: lemonpepper, recipe: "Lemon Pepper Recipe." },
    { name: "Blend 4", description: "Mexican", image: mexican, recipe: "Mexican Recipe." },
    { name: "Blend 5", description: "Potato", image: potato, recipe: "Potato Recipe." },
    { name: "Blend 6", description: "Sea Food", image: seafood, recipe: "Sea Food Recipe." },
    { name: "Blend 7", description: "Steak", image: steak, recipe: "Steak Recipe." }
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

  const handleInfoClick = (product) => {
    setDetailProduct(product);
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

        <div className="bg-[#6F6D39] rounded-6xl shadow-2xl mx-auto mb-24 px-4 sm:px-28 p-8">
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
            className="fixed inset-0 bg-white z-50 flex flex-col justify-start items-start p-4 md:p-6 overflow-y-auto"
          >
            <motion.button
              layoutId={`close-${selectedId}`}
              className="absolute top-4 right-4 text-3xl text-black"
              onClick={handleCloseOverlay}
            >
              &times;
            </motion.button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {selectedProducts.map((prod, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start text-center gap-2 mt-4 p-2 border rounded shadow-sm"
                >
                  <motion.h5 className="text-sm text-black font-calibri w-full text-center">
                    {prod.description}
                  </motion.h5>
                  <motion.h2 className="text-lg w-full text-center">
                    {prod.name}
                  </motion.h2>
                  <motion.img
                    src={prod.image}
                    alt={prod.name}
                    className="w-32 h-32 object-contain rounded-lg mx-auto"
                  />
                  <motion.button
                    className="mt-2 px-4 py-1 bg-black text-white text-xs rounded mx-auto"
                    onClick={() => handleInfoClick(prod)}
                  >
                    Details
                  </motion.button>
                </div>
              ))}
            </div>

            {detailProduct && (
              <motion.div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded shadow-lg max-w-md w-full text-center">
                  <h2 className="text-xl font-semibold mb-2">{detailProduct.name}</h2>
                  <img
                    src={detailProduct.image}
                    alt={detailProduct.name}
                    className="w-32 h-32 object-contain mx-auto mb-2"
                  />
                  <p className="text-sm mb-4">
                    {detailProduct.recipe}
                  </p>
                  <button
                    className="px-4 py-1 bg-black text-white text-xs rounded"
                    onClick={() => setDetailProduct(null)}
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

export default Product;
