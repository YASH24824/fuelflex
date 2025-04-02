import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carddetails from "../Data/Carddetails";
import { addToCart, buyNow } from "../redux/action/cartAction.js";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Alldetails() {
  const { urls } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filteredDetails = Carddetails.filter((item) => item.urls === urls);
  if (!filteredDetails.length) return <div>No product found</div>;

  const product = filteredDetails[0];
  const [currentImage, setCurrentImage] = useState(product.image1);
  const [quantity, setQuantity] = useState(1); // Using useState for quantity

  useEffect(() => {
    setCurrentImage(product.image1);
    setQuantity(1); // Reset quantity when navigating
    window.scrollTo(0, 0);
  }, [urls]);

  const randomproduct = Carddetails.filter((item) => item.urls !== urls).slice(0, 4);

  function handleaddTocart() {
    const formattedPrice = parseFloat(product.price.replace(/[^0-9.]/g, "")); // Convert "$280" to 280
    dispatch(addToCart({ ...product, price: formattedPrice, quantity }));
    toast.success(`${product.name} (${quantity}) added to cart!`);
  }
  
   

  function handlebuyNow() {
    dispatch(buyNow());
    toast.success(`${product.name} purchased successfully!`);
  }

  return (
    <div className="flex flex-col min-h-screen p-3 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 flex-1">
        <div className="relative md:mb-0 w-full flex justify-center">
          <img
            src={currentImage}
            alt="Product"
            className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain rounded-lg"
            onMouseEnter={() => setCurrentImage(product.image2)}
            onMouseLeave={() => setCurrentImage(product.image1)}
          />
        </div>

        <div className="flex flex-col justify-start px-4 py-0 md:px-6 space-y-3">
          <p className="text-gray-500 uppercase text-sm">FUELFLEX</p>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-3">Rs. {product.price}.00</p>

          <div className="mb-4 md:mb-5">
            <p className="text-sm md:text-base text-gray-700 mb-2">Quantity</p>
            <div className="flex border border-gray-300 rounded-md w-full max-w-[180px]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600 cursor-pointer hover:bg-gray-100"
              >
                —
              </button>
              <div className="flex-1 text-center py-2">{quantity}</div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <button onClick={handleaddTocart} className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200">
            Add to Cart
          </button>
          <button onClick={handlebuyNow} className="w-full py-2 bg-[#6B4743] text-white rounded-md hover:bg-[#5a3c38] transition duration-200">
            Buy it Now
          </button>

          <p className="text-gray-700 mb-6">{product.description}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">You may also like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {randomproduct.map((product) => (
            <div
              key={product.urls}
              onClick={() => navigate(`/shop/alldetails/${product.urls}`)}
              className="cursor-pointer bg-white rounded-lg shadow-md border overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="bg-gray-100 flex items-center justify-center h-56 rounded-t-lg">
                <img
                  src={product.image1}
                  alt={product.name}
                  className="max-h-48 object-contain"
                />
              </div>
              <div className="bg-[#faf4ea] text-center rounded-b-lg p-4 h-24 flex flex-col justify-center">
                <h4 className="text-lg font-medium text-gray-900">{product.name}</h4>
                <p className="text-xl font-semibold text-black mt-1">Rs. {product.price}.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alldetails;