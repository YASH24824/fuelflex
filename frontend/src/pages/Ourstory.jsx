import React, { useState, useEffect } from "react";
import Mit_bhuva from "../assets/Ourstory/Mit_bhuva.png";
import Layer_1 from "../assets/Ourstory/Layer_1.jpg";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="relative mb-5 bg-white rounded-3xl shadow-lg transition-all duration-300 flex flex-col items-center p-6 hover:scale-105 hover:bg-[#faf4ea]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-[#6B4743] flex items-center justify-center text-white text-5xl shadow-md hover:bg-white hover:text-[#6B4743]">
        {icon}
      </div>
      <h3 className="mt-20 text-2xl font-semibold text-gray-800 text-center">
        {title}
      </h3>
      <p className="mt-4 text-gray-600 text-center text-lg">
        {description}
      </p>
    </div>
  );
};

const CardSection = () => {
  const cardData = [
    {
      icon: "💡",
      title: "Vision",
      description:
        "Fuellex: Proud high quality foods. To empower communities by making healthy, high-quality food accessible to all, fostering a culture of wellness and sustainable living.",
    },
    {
      icon: "🎯",
      title: "Mission",
      description:
        "Fuellex serve high quality food & our main aim is improving peoples health. We understand that good health is a lifelong journey, and we are committed to being a partner in that journey by making healthy eating easy, enjoyable, and accessible to everyone. With Fuellex, you're not just eating well; you're investing in a healthier, happier future.",
    },
    {
      icon: "🌟",
      title: "Ambition",
      description:
        "Purpose of Quality Commitment: To uphold the highest standards of food quality ensuring that every meal we serve contributes to our customers' health.",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cardData.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GridLayout = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-5 bg-white rounded-lg overflow-hidden mt-10 transition-transform duration-500 ">
        <div className="lg:order-first lg:col-span-3 p-8 hover:text-white">
          <h1
            style={{ lineHeight: "1" }}
            className="text-2xl font-bold mb-4 text-gray-800 hover:text-white"
          >
            Chase your vision, not the competition
          </h1>
          <p className="text-gray-700 leading-relaxed hover:text-white">
            FIRST UNIFIED was incepted by Mit Bhuva. Bringing their
            entrepreneurial skills, commitment, and astuteness to the fore, they
            have been guiding their team, working day in and day out to realise
            a dream. To their repertoire of skills, they have added the human
            element which has proved critical in making a success of FIRST
            UNIFIED.
          </p>
        </div>
        <div className="lg:col-span-2">
          <img
            src={Mit_bhuva}
            alt="Mit Bhuva"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const Ourstory = () => {
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulating a loading time of 1 second
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <>
      {/* Loading Screen */}
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-white transition-opacity duration-[1200ms] opacity-100 animate-fade-in"></div>
      ) : (
        <>
          {/* Main Content */}
          <div className="bg-white py-0 transition-opacity duration-[1200ms] opacity-100">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-0 ">
              <img
                src={Layer_1}
                alt="A Legacy of Sophistication"
                className="mb-10 shadow-md w-full"
              />
            </div>
          </div>
          <GridLayout />
          <CardSection />
        </>
      )}
    </>
  );
};

export default Ourstory;
