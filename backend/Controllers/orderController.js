import ORDER from "../models/ORDER.js";

export const  createOrder = async (req, res) => {
  try {
    const { paymentId, cartItems, totalBill, shippingDetails } = req.body;

    const newOrder = new ORDER({
      paymentId,
      cartItems,
      totalBill,
      shippingDetails,
      status: "Paid",
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Order saving error:", error);
    res.status(500).json({ message: "Failed to save order." });
  }
};

