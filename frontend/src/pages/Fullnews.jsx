import React from "react";
import { useParams } from "react-router-dom";
import Layer_1 from "../assets/Ourstory/Layer_1.jpg";
import Bread from "../assets/News/Bread.png";
import Cake from "../assets/News/Cake.png";

const NewsDetail = () => {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      src: Bread,
      name: "Eco-Friendly and Delicious: How Fuelflex Peanut Butter Supports Sustainable Farming",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills, commitment, and astuteness to the fore...",
      content: `
        Peanut butter is not just a delicious spread; it’s a symbol of sustainability. Fuelflex Peanut Butter is made using organic peanuts sourced directly from local farmers. 
        This ensures fair trade practices while reducing the environmental impact caused by large-scale farming.

        The production process is designed to minimize waste and energy consumption, making it one of the most eco-friendly products in its category. 
        With every jar of Fuelflex Peanut Butter, you are contributing to a greener planet while enjoying a healthy snack.

        Moreover, Fuelflex collaborates with NGOs to educate farmers about sustainable farming techniques. This initiative has positively impacted over 10,000 farmers across the country.
      `,
      date: "January 10, 2023",
    },
    {
      id: 2,
      src: Cake,
      name: "Delicious Cake",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills...",
      content: `
        This cake is more than just a dessert; it's an experience. Made with responsibly sourced ingredients, this cake combines rich flavors with sustainability.
        Every bite tells a story of dedication and care put into creating a masterpiece that is both delicious and environmentally friendly.

        Whether you're celebrating a special occasion or simply indulging your sweet tooth, this cake is the perfect choice for those who care about quality and sustainability.
      `,
      date: "February 15, 2023",
    },
    {
      id: 3,
      src: Layer_1,
      name: "Layered Dessert",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills...",
      content: `
        A layered dessert that redefines indulgence. Each layer is crafted with precision to deliver an explosion of flavors that complement each other perfectly.
        Using locally sourced ingredients ensures freshness while supporting small-scale farmers.

        This dessert is not only a treat for your taste buds but also a step towards sustainable living.
      `,
      date: "March 20, 2023",
    },
    {
      id: 4,
      src: Layer_1,
      name: "Gourmet Treat",
      description:
        "FIRST UNIFIED was incepted by Mit Bhuva. Bringing their entrepreneurial skills...",
      content: `
        The gourmet treat you've been waiting for! Made with premium ingredients and crafted by expert chefs, this treat offers an unparalleled experience.
        Its eco-friendly packaging ensures that you can enjoy your favorite snack guilt-free.

        Perfect for gifting or personal indulgence, this gourmet treat is a testament to the art of sustainable cooking.
      `,
      date: "April 25, 2023",
    },
  ];

  const selectedArticle = articles.find((article) => article.id === parseInt(id));

  if (!selectedArticle) return <p className="text-center text-gray-500">News not found!</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-[#faf4ea]">
      {/* Layout Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={selectedArticle.src}
            alt={selectedArticle.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2">
          {/* Header Section */}
          <header className="mb-6">
            <h1 style={{lineHeight:1}} className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">
              {selectedArticle.name}
            </h1>
            <p className="text-sm text-gray-500">{selectedArticle.date}</p>
          </header>

          {/* Description Section */}
          <section className="mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">{selectedArticle.description}</p>
          </section>

          {/* Full Content Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Full Article
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedArticle.content}</p>
          </section>
        </div>
      </div>

      {/* Footer Section */}
     
    </div>
  );
};

export default NewsDetail;
