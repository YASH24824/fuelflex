import { useNavigate } from "react-router-dom";
import Natural_Peanut_350gm from "../../assets/Shop/Natural_Peanut_350gm.png";
import Natural_Peanut_850gm from "../../assets/Shop/Natural_Peanut_850gm.png";
import Choclate_Peanut_350gm from "../../assets/Shop/Choclate_Peanut_350gm.png";
import Choclate_Peanut_850gm from "../../assets/Shop/Choclate_Peanut_850gm.png";
import Natural_Peanut_back_350gm from "../../assets/Shop/Natural_Peanut__back_350gm.png";
import Ground_Oil from "../../assets/Shop/Ground_Oil.jpg";
import Ground_Oil_back from "../../assets/Shop/Ground_Oil_back.jpg";

const Productgrid = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Natural peanut butter with pack of 350gm",
      urls: "Natural_peanut_butter_with_pack_of_350gm",
      price: 250,
      image1: Natural_Peanut_350gm,
      image2: Natural_Peanut_back_350gm,
    },
    {
      id: 2,
      name: "Natural peanut butter with pack of 850gm",
      urls: "Natural_peanut_butter_with_pack_of_850gm",
      price: 450,
      image1: Natural_Peanut_850gm,
      image2: Natural_Peanut_850gm,
    },
    {
      id: 3,
      name: "Choclate peanut butter with pack of 350gm",
      urls: "Natural_peanut_butter_with_pack_of_1250gm",
      price: 270,
      image1: Choclate_Peanut_350gm,
      image2: Choclate_Peanut_350gm,
    },
    {
      id: 4,
      name: "Choclate peanut butter with pack of 850gm",
      urls: "Choclate_peanut_butter_with_pack_of_850gm",
      price: 490,
      image1: Choclate_Peanut_850gm,
      image2: Choclate_Peanut_850gm,
    },
    {
      id: 5,
      name: "Groundnut oil with pack of 15 kg",
      urls: "Groundnut_oil_with_pack_of_15_kg",
      price: 1500,
      image1: Ground_Oil,
      image2: Ground_Oil_back,
    },
  ];

  const handleClick = (url) => {
    navigate(`/shop/alldetails/${url}`);
  };

  return (
    <div className="w-full bg-[#F3EEEA] py-12 md:py-15">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col group cursor-pointer bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:shadow-xl hover:scale-[1.02]"
            onClick={() => handleClick(product.urls)}
          >
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-gray-100 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src={product.image1}
                alt={product.name}
                className=" mix-blend-darken absolute w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={product.image2}
                alt={product.name}
                className=" mix-blend-darken  absolute w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* Info Section */}
            <div className="bg-[#EBE3D5] hover:bg-[#B0A695] transition-colors flex flex-col items-center justify-center text-center px-4 py-3 h-28">
              <p className="font-medium text-sm sm:text-base text-gray-800 leading-tight line-clamp-2">
                {product.name}
              </p>
              <p className="mt-2 text-lg font-bold text-black">Rs. {product.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productgrid;
