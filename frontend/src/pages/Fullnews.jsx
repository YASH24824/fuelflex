import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Bread from "../assets/News/Bread.png";
import Cake from "../assets/News/Cake.png";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      src: Bread,
      name: "Eco-Friendly and Delicious: How Fuelflex Peanut Butter Supports Sustainable Farming",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore...",
      content: `Peanut butter is not just a delicious spread; it's a symbol of sustainability. Fuelflex Peanut Butter is made using organic peanuts sourced directly from local farmers. 
      This ensures fair trade practices while reducing the environmental impact caused by large-scale farming.`,
      date: "January 10, 2023",
      author: "Mit Bhuva",
      readTime: "4 min read",
    },
    {
      id: 2,
      src: Cake,
      name: "Delicious Cake",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills...",
      content: `This cake is more than just a dessert; it's an experience. Made with responsibly sourced ingredients, this cake combines rich flavors with sustainability.`,
      date: "February 15, 2023",
      author: "Mit Bhuva",
      readTime: "3 min read",
    },
  ];

  const selectedArticle = articles.find((article) => article.id === parseInt(id));

  if (!selectedArticle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Article Not Found</h2>
          <button 
            onClick={() => navigate('/news')}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Back to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className= "bg-[#F3EEEA] min-h-screen flex items-center justify-center py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-8xl w-full bg-[#F3EEEA]   overflow-hidden">
        {/* Left Side - Image */}
        <div className="relative">
          <img src={selectedArticle.src} alt={selectedArticle.name} className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col justify-start mt-20 ">
          <h1 style={{lineHeight:1}} className="text-4xl font-bold text-gray-900 mb-4 leading-snug">{selectedArticle.name}</h1>
          <p className="text-gray-500 text-sm mb-4">
            By <span className="font-semibold">{selectedArticle.author}</span> • {selectedArticle.date} • {selectedArticle.readTime}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{selectedArticle.description}</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{selectedArticle.content}</p>
          <button 
            onClick={() => navigate('/news')}
            className="mt-6 px-6 py-3 bg-[#776B5D] hover:bg-[#B0A695] text-white font-semibold rounded-lg transition shadow-md"
          >
            Back to News
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
