import React, { useState } from "react";
import { useSelector } from "react-redux";

function Payment() {
  // Get product data from Redux store
  const { product, totalPrice } = useSelector((state) => state.cart);
  
  // Form state for delivery details
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    paymentMethod: "credit"
  });
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would dispatch an action to process the payment
    // Example: dispatch(processPayment({ product, totalPrice, deliveryInfo }));
    console.log("Processing payment", { product, totalPrice, deliveryInfo });
    // Redirect to confirmation page or show confirmation message
  };
  
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      {/* Product Summary */}
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <p>Product:</p>
          <p className="font-medium">{product?.name || "Product Name"}</p>
        </div>
        <div className="flex justify-between border-t pt-2">
          <p>Total:</p>
          <p className="font-bold">${totalPrice?.toFixed(2) || "0.00"}</p>
        </div>
      </div>
      
      {/* Payment Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Delivery Information</h2>
          
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="fullName" className="block mb-1 text-sm font-medium">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={deliveryInfo.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block mb-1 text-sm font-medium">
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={deliveryInfo.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block mb-1 text-sm font-medium">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={deliveryInfo.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block mb-1 text-sm font-medium">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={deliveryInfo.state}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="zipCode" className="block mb-1 text-sm font-medium">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={deliveryInfo.zipCode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="block mb-1 text-sm font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={deliveryInfo.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={deliveryInfo.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="credit"
                name="paymentMethod"
                value="credit"
                checked={deliveryInfo.paymentMethod === "credit"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="credit">Credit Card</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                id="debit"
                name="paymentMethod"
                value="debit"
                checked={deliveryInfo.paymentMethod === "debit"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="debit">Debit Card</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={deliveryInfo.paymentMethod === "paypal"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#6B4743] text-white rounded-md hover:bg-[#5a3c38]"
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
}

export default Payment;