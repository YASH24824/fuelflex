import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layer_1 from "../assets/Ourstory/Layer_1.jpg";
import Bread from "../assets/News/Bread.png";
import Cake from "../assets/News/Cake.png";

const ImageGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
    {
      id: 3,
      src: Layer_1,
      name: "Layered Dessert",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore, they have been guiding their team, working day in and day out to realize a dream.",
      date: "March 20, 2023",
    },
    {
      id: 4,
      src: Layer_1,
      name: "Gourmet Treat",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore, they have been guiding their team, working day in and day out to realize a dream.",
      date: "April 25, 2023",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {images.map((image) => (
        <div
          key={image.id}
          className="border rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
          onClick={() => navigate(`/news/${image.id}`)}
        >
          {/* Image Section */}
          <img
            src={image.src}
            alt={image.name}
            className="w-full h-48 object-contain rounded-t-lg"
          />
          {/* Content Section */}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{image.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{image.date}</p>
            <p className="text-sm text-gray-700">
              {image.description.slice(0, 50)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
