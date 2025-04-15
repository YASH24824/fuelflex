import ORDER from "../models/ORDER.js" // Assuming you are importing your Order model
import jwt from 'jsonwebtoken'; // You might use jwt for cookie-based authentication
  // Import the Order model

  export const createOrder = async (req, res, next) => {
    try {
      const { paymentId, cartItems, totalBill, shippingDetails } = req.body;
  
      // Extract userId from JWT token if it exists in cookies
      let userId = null;
      const token = req.cookies?.access_token; // Access token from cookies
      console.log(process.env.JWT_SECRET)
      console.log(token)
      if (token) {
        try {
          const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET || "yaaaaajjjjj" // Replace with your secret key
          );
          
          userId = decodedToken.id;
        
           // Extract user ID from decoded token
        } catch (err) {
          console.error("JWT verification failed:", err);
          return res.status(401).json({ message: "Invalid or expired token." });
        }
      }
  
      // Filter cart items to include only necessary properties
      const filteredCartItems = cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));
  
      // Create new order object
      const newOrder = new ORDER({
        userId, // Attach userId (null if not logged in)
        paymentId,
        cartItems: filteredCartItems,
        totalBill,
        shippingDetails,
        status: "Paid", // Assuming payment was successful
      });
  
      // Save order to database
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
    } catch (err) {
      console.error("Order saving error:", err);
      next(err); // Pass error to middleware for handling
    }
  };


  
export const getOrderHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const email = req.user.email;
   

    const orders = await ORDER.find({ userId });
    

    res.status(200).json({ orders, email }); // sending both orders and user email
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};