import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  paymentId: { type: String, required: true },
  cartItems: { type: Array, required: true },
  totalBill: { type: Number, required: true },
  shippingDetails: {
    name: String,
    email: String,
    contact: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    pincode: String,
    country: String,
  },
  status: { type: String, default: "Pending" },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
