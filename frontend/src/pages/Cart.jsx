import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeOne, removeAll } from "../redux/action/cartAction";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (storedCart.length > 0) {
      storedCart.forEach((item) => dispatch(addToCart(item)));
    }
  }, [dispatch]);

  // State to manage local quantities
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  // Function to handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
  };

  // Update localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate total price safely
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = Number(item.price.toString().replace(/[^0-9.]/g, "")) || 0;
    const itemQuantity = quantities[item.id] || 1;
    return total + itemPrice * itemQuantity;
  }, 0);
  // State for promo code
const [promoCode, setPromoCode] = useState("");
const [discount, setDiscount] = useState(0);

// Function to apply promo code
const applyPromoCode = () => {
  if (promoCode === "SAVE10") {
    setDiscount(0.1 * totalPrice); // 10% discount
  } else if (promoCode === "SAVE20") {
    setDiscount(0.2 * totalPrice); // 20% discount
  } else {
    setDiscount(0); // Invalid promo code
    alert("Invalid Promo Code");
  }
};

// Calculate total quantity
const totalQuantity = cartItems.reduce((total, item) => {
  return total + (quantities[item.id] || 1);
}, 0);

// Calculate total bill after discount
const totalBill = totalPrice - discount;


  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 bg-[#faf4ea] rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
            <button
              onClick={() => {
                dispatch(removeAll());
                localStorage.removeItem("cart");
              }}
              className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              Clear Cart
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-600">No items in cart</p>
          ) : (
            cartItems.map((item) => {
              const itemPrice = Number(item.price.toString().replace(/[^0-9.]/g, "")) || 0;
              const itemQuantity = quantities[item.id] || 1;
              return (
                <div key={item.id} className="grid grid-cols-5 items-center border-b pb-4 gap-4">
                  {/* Product Image */}
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />

                  {/* Product Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, itemQuantity - 1)}
                      className="px-3 py-1 bg-gray-200 rounded-md"
                    >
                      -
                    </button>
                    <span>{itemQuantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, itemQuantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded-md"
                    >
                      +
                    </button>
                  </div>

                  {/* Product Price */}
                  <div className="text-lg font-bold text-gray-800">
                    Rs. {(itemPrice * itemQuantity).toFixed(2)}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => {
                      dispatch(removeOne(item.id));
                      setQuantities((prev) => {
                        const updated = { ...prev };
                        delete updated[item.id];
                        return updated;
                      });
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    X
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Order Summary Section */}
        {/* Order Summary Section */}
<div className="bg-[#faf4ea] rounded-lg p-6">
  <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

  {/* Total Items */}
  <div className="flex justify-between items-center mb-4">
    <span className="text-gray-600">Total Items</span>
    <span className="text-lg font-bold text-gray-800">{totalQuantity}</span>
  </div>

  {/* Total Cost Before Discount */}
  <div className="flex justify-between items-center mb-4">
    <span className="text-gray-600">Total Cost</span>
    <span className="text-lg font-bold text-gray-800">Rs. {totalPrice.toFixed(2)}</span>
  </div>

  {/* Promo Code Input */}
  <div className="mb-4">
    <input
      type="text"
      value={promoCode}
      onChange={(e) => setPromoCode(e.target.value)}
      placeholder="Enter Promo Code"
      className="w-full px-3 py-2 border rounded-md focus:outline-none"
    />
    <button
      onClick={applyPromoCode}
      className="mt-2 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
    >
      Apply Promo Code
    </button>
  </div>

  {/* Discount */}
  {discount > 0 && (
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-600">Discount</span>
      <span className="text-lg font-bold text-red-600">- Rs. {discount.toFixed(2)}</span>
    </div>
  )}

  {/* Total Bill After Discount */}
  <div className="flex justify-between items-center mb-4">
    <span className="text-gray-600 font-semibold">Total Bill</span>
    <span className="text-lg font-bold text-green-600">Rs. {totalBill.toFixed(2)}</span>
  </div>

  {/* Checkout Button */}
  <button
    onClick={() => {
      cartItems.forEach((item) =>
        dispatch(addToCart({ ...item, quantity: quantities[item.id] }))
      );
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }}
    className="mt-6 w-full py-2 px-4 bg-[#6B4743] text-white rounded-md hover:bg-[#5a3c38] transition duration-200"
  >
    Checkout
  </button>
</div>

      </div>
    </div>
  );
}

export default CartPage;
