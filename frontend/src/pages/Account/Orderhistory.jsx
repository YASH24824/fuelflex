import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaBoxOpen } from 'react-icons/fa';
import { MdEmail, MdLogout } from 'react-icons/md';
import { ImSpinner2 } from 'react-icons/im';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/order/history`, {
          withCredentials: true,
        });

        setOrders(response.data.orders);
        setEmail(response.data.email);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch order history');
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {}, {
        withCredentials: true,
      });
      
      window.location.href = '/login';
      navigate("/login")
   

    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <FaBoxOpen className="text-3xl text-indigo-600" />
            <h2 className="text-3xl font-extrabold text-gray-800">Your Orders</h2>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
          >
            <MdLogout className="text-lg" />
            Logout
          </button>
        </div>

        {email && (
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MdEmail className="text-lg text-gray-500" />
            <span className="text-sm">
              Logged in as: <span className="font-medium">{email}</span>
            </span>
          </div>
        )}

        {loading ? (
          <div className="flex items-center gap-2 text-gray-500 animate-pulse">
            <ImSpinner2 className="text-xl animate-spin" />
            <span>Loading your orders...</span>
          </div>
        ) : error ? (
          <p className="text-red-500 font-medium">{error}</p>
        ) : orders.length === 0 ? (
          <p className="text-gray-600">You have not placed any orders yet.</p>
        ) : (
          <ul className="space-y-6">
            {orders.map((order, index) => (
              <li
                key={order._id}
                className="p-6 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Order #{index + 1}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Total: <span className="font-medium text-gray-800">₹{order.totalBill}</span>
                    </p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </div>
                </div>

                {order.cartItems?.length > 0 && (
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Items Ordered:</p>
                    <div className="space-y-2 pl-2">
                      {order.cartItems.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm text-gray-600">
                          <span>{item.name}</span>
                          <span className="text-gray-500">Qty: {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
