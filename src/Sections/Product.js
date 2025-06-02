import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../assets/product.jpg";
import steak from "../assets/steak.png";
import seafood from "../assets/sea.png";
import chicken from "../assets/chicken.png";
import potato from "../assets/potato.png";
import pasta from "../assets/italian.png";
import mexican from "../assets/mexican.png";

function Product() {
  const [selectedId, setSelectedId] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);

  const productsLeft = [
    { name: "Powder 1", description: "Steak Marinade", image: steak, recipe: "Recipe for Steak." },
    { name: "Powder 2", description: "Seafood Seasoning", image: seafood, recipe: "Seafood recipe." },
    { name: "Powder 3", description: "Chicken Rub", image: chicken, recipe: "Chicken recipe." },
    { name: "Powder 4", description: "Potato Mix", image: potato, recipe: "Potato recipe." },
    { name: "Powder 5", description: "Italian Pasta", image: pasta, recipe: "Pasta recipe." },
    { name: "Powder 6", description: "Mexican Spice", image: mexican, recipe: "Mexican recipe." },
    { name: "Powder 7", description: "Tangy Blend", image: steak, recipe: "Tangy blend recipe." },
    { name: "Powder 8", description: "8", image: steak, recipe: "Tangy blend recipe." },
    { name: "Powder 9", description: "9", image: steak, recipe: "Tangy blend recipe." },
    { name: "Powder 10", description: "10", image: steak, recipe: "Tangy blend recipe." },
    { name: "Powder 11", description: "11", image: steak, recipe: "Tangy blend recipe." },
    { name: "Powder 12", description: "12", image: steak, recipe: "Tangy blend recipe." },
    { name: "Powder 13", description: "13", image: steak, recipe: "Tangy blend recipe." }
  ];

  const productsRight = [
    { name: "Blend 1", description: "Lemon Herb", image: seafood, recipe: "Lemon herb recipe." },
    { name: "Blend 2", description: "Chili Garlic", image: chicken, recipe: "Chili garlic recipe." },
    { name: "Blend 3", description: "Smoky BBQ", image: potato, recipe: "Smoky BBQ recipe." },
    { name: "Blend 4", description: "Savory Onion", image: pasta, recipe: "Savory onion recipe." },
    { name: "Blend 5", description: "Fiesta Mix", image: mexican, recipe: "Fiesta blend recipe." },
    { name: "Blend 6", description: "Zesty Citrus", image: steak, recipe: "Zesty citrus seasoning." },
    { name: "Blend 7", description: "Classic Salt", image: seafood, recipe: "Classic salt seasoning." }
  ];

  const groups = [
    { id: "Powder 1", title: "POWDERS", data: productsLeft },
    { id: "Blend 1", title: "BLENDS", data: productsRight },
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
            {groups.map(({ id, title, data }, idx) => (
              <motion.div
                key={idx}
                layoutId={id}
                className="flex flex-col sm:flex-row items-center justify-center text-center p-4 rounded-lg cursor-pointer"
                onClick={() => handleCategoryClick(id)}
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
                    {data[0].description}
                  </motion.h5>
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