import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  Carddetails  from "../Data/Carddetails";
import { motion } from "framer-motion"; // Import Framer Motion

function Shop() {
  const navigate = useNavigate();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  

  const handleProductClick = (productId, urls) => {
    setIsTransitioning(true);
    setSelectedProductId(productId);

    // Start fade-out effect
    document.body.style.transition = "opacity 0.5s ease-in-out";
    document.body.style.opacity = "0"; // Fade out

    // Navigate after a short delay to allow for fade-out
    setTimeout(() => {
      navigate(`/shop/alldetails/${urls}`);
      document.body.style.opacity = "1"; // Reset opacity after navigation
      setIsTransitioning(false); // Reset transition state (optional)
    }, 500); // Match duration with CSS transition
  };

  return (
    <div className={`max-w-[1440px] bg-[#F3EEEA] mx-auto p-9 h-full ${isTransitioning ? "fade-out" : ""}`}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-brown-700 font-serif">Shop</h1>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {Carddetails.map((product) => (
          <motion.div
            key={product.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-lg shadow-md cursor-pointer transition-transform transform ${
              selectedProductId === product.id ? "opacity-50 scale-95" : "hover:scale-105 hover:shadow-lg"
            } border border-transparent overflow-hidden`}
            onClick={() => handleProductClick(product.id, product.urls)}
          >
            {/* Product Image */}
            <div className="w-full bg-gray-100 flex items-center justify-center rounded-t-lg overflow-hidden">
              <motion.img
                src={product.image1}
                alt={product.name}
                className="w-full h-72 object-contain bg-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col h-24 items-center bg-[#EBE3D5] hover:bg-[#B0A695] p-4 rounded-b-lg">
              <h2 className="font-serif text-center text-lg font-medium">{product.name}</h2>
              <p className="text-xl font-semibold text-black mt-2">Rs. {product.price}.00</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Shop;
