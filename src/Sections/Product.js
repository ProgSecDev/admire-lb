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
    { name: "Turmeric", description: "", image: blackpepper, recipe: "Ground Turmeric." },
    { name: "Red Chili", description: "", image: chilliflakes, recipe: "Ground Red Chili." },
    { name: "Cinnamon", description: "", image: cinnamon, recipe: "Ground Ceylon Cinnamon." },
    { name: "Cumin", description: "", image: cumin, recipe: "Ground Cumin." },
    { name: "Curry", description: "", image: curry, recipe: "Garlic, Coriander, Cumin, Turmeric, Ginger, Fenugreek, Cloves, Fennel, Mustard." },
    { name: "Sumac", description: "", image: paprika, recipe: "Ground Sumac." },
    { name: "White Pepper", description: "", image: redchilli, recipe: "Ground White Pepper." },
    { name: "Black Pepper", description: "", image: sevenspices, recipe: "Ground Black Pepper." },
    { name: "Paprika", description: "", image: sumac, recipe: "Ground Sweet Paprika." },
    { name: "Seven Spices", description: "", image: turmeric, recipe: "Allspices, Black Pepper, Cinnamon, Cloves, Nutmeg, White Pepper, Mahlab." },
    { name: "Chili Flakes", description: "", image: whitepepper, recipe: "Ground Chili Flakes." },
    { name: "Zaatar", description: "", image: keshek, recipe: "Thyme, Sumac, Salt, Sesame." },
    { name: "Kishek", description: "", image: zaatar, recipe: "Dried Yogurt, Salt, Bulgur, Wheat." }
  ];

  const productsRight = [
    { name: "Seafood Blend", description: "", image: chicken, recipe: "Salt, White Pepper, Black Pepper, Coriander, Ginger Powder, Curry, Paprika, Cumin, Garlic Powder, Mustard Powder." },
    { name: "Steak Blend", description: "", image: italian, recipe: "Coarse Garlic, Coarse Onion, Coarse Salt, Coriander, Coarse Black Pepper, Chili  Crushed, Paprika." },
    { name: "Chicken Blend", description: "", image: lemonpepper, recipe: "Garlic Powder, Coarse Onion, Coarse Black Pepper, Coarse Garlic, Parsley, Coriander, Salt, Chili Crushed, Cinnamon Powder, Paprika, Thyme Powder, Oil." },
    { name: "Potato Blend", description: "", image: mexican, recipe: "Salt, Sugar, Monosodium, Onion Powder, Paprika, Oil, Cornstrach." },
    { name: "Italian Blend", description: "", image: potato, recipe: "Garlic Powder, Onion Powder, Salt, Chili Crushed, Black Pepper, Basil, Paprika, Oregano." },
    { name: "Mexican Blend", description: "", image: seafood, recipe: "Paprika, Turmeric, Coriander, Cumin, Onion Powder, Fenugreek, Fennel, Salt, Garlic Powder, Black Pepper, Rosemary, Chili Crushed." },
    { name: "Lemon Pepper Blend", description: "", image: steak, recipe: "Turmeric, Black Pepper, Citric Acid, Salt, Dried Lime." }
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
            className="fixed inset-0 z-50 flex flex-col justify-start items-start p-4 md:p-6 overflow-y-auto"
            style={{
              backgroundImage: `url(${asianfoodbackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <motion.button
              layoutId={`close-${selectedId}`}
              className="absolute top-4 right-4 text-3xl text-black"
              onClick={handleCloseOverlay}
            >
              &times;
            </motion.button> */}
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
                  <h2 className="text-xl font-semibold mb-2">
                    {detailProduct.name}
                  </h2>
                  <img
                    src={detailProduct.image}
                    alt={detailProduct.name}
                    className="w-32 h-32 object-contain mx-auto mb-2"
                  />
                  <p className="text-sm mb-4">{detailProduct.recipe}</p>
                  <button
                    className="px-4 py-1 bg-black text-white text-xs rounded"
                    onClick={() => setDetailProduct(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}

            {/* <div className="sticky bottom-0 w-full bg-white bg-opacity-70 backdrop-blur-md py-4 flex justify-center z-50"> */}
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