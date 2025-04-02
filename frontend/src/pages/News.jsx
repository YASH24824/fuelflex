import React, { useState, useEffect } from "react";
import Layer_1 from "../assets/Ourstory/Layer_1.jpg";
import Bread from "../assets/News/Bread.png";
import Cake from "../assets/News/Cake.png";

const ImageGallery = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const images = [
    {
      src: Bread,
      name: "Eco-Friendly and Delicious: How Fuelflex Peanut Butter Supports Sustainable Farming",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore, they have been guiding their team, working day in and day out to realize a dream.",
      date: "January 10, 2023",
    },
    {
      src: Cake,
      name: "Delicious Cake",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore, they have been guiding their team, working day in and day out to realize a dream.",
      date: "February 15, 2023",
    },
    {
      src: Layer_1,
      name: "Layered Dessert",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore, they have been guiding their team, working day in and day out to realize a dream.",
      date: "March 20, 2023",
    },
    {
      src: Layer_1,
      name: "Gourmet Treat",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore, they have been guiding their team, working day in and day out to realize a dream.",
      date: "April 25, 2023",
    },
  ];

  return (
    <div
      className={`max-h-8xl p-10 bg-[#faf4ea] transition-opacity duration-500 ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="w-full bg-gray-100 flex items-center justify-center">
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 "
              />
            </div>

            {/* Content Section */}
            <div className="p-4 bg-[#faf4ea] text-center rounded-b-lg">
              <h3 className="text-lg font-semibold text-gray-800">{image.name}</h3> {/* Displaying Name */}
              <p className="text-gray-500 text-sm mt-1">{image.date}</p> {/* Displaying Date */}
              <p className="text-gray-800 mt-2">{image.description}</p> {/* Displaying Description */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
