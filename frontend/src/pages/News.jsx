import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations
import Layer_1 from "../assets/Ourstory/Layer_1.jpg";
import Bread from "../assets/News/Bread.png";
import Cake from "../assets/News/Cake.png";

const ImageGallery = () => {
  const navigate = useNavigate();

  const images = [
    {
      id: 1,
      src: Bread,
      name: "Eco-Friendly and Delicious: How Fuelflex Peanut Butter Supports Sustainable Farming",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore, they have been guiding their team, working day in and day out to realize a dream.",
      date: "January 10, 2023",
    },
    {
      id: 2,
      src: Cake,
      name: "Delicious Cake",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore, they have been guiding their team, working day in and day out to realize a dream.",
      date: "February 15, 2023",
    },
  ];

  return (
    <div className="w-full bg-[#F3EEEA] max-w-full px-4 py-8">
      <motion.h1
        className="text-4xl font-bold text-brown-700 font-serif mb-13 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Latest News & Articles
      </motion.h1>

      <motion.div
        className="grid bg-[#F3EEEA] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:translate-y-1 transition duration-300 cursor-pointer h-full flex flex-col"
            onClick={() => navigate(`/news/${image.id}`)}
            initial={{ opacity: 0, y: 20 }} // Initial state for animation
            animate={{ opacity: 1, y: 0 }}   // Final state for animation
            transition={{ duration: 0.5 }}    // Transition properties
          >
            {/* Image Container with consistent aspect ratio */}
            <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <img
                src={image.src}
                alt={image.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-5 flex-grow flex flex-col">
              <motion.h3
                className="text-lg font-bold mb-3 line-clamp-2 transition"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {image.name}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-600 mb-4 flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {image.description.length > 100
                  ? `${image.description.substring(0, 100)}...`
                  : image.description}
              </motion.p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-500">{image.date}</span>
                <button className="text-sm font-medium text-[#776B5D] hover:text-[#B0A695] transition">
                  Read More →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGallery;
