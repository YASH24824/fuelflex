import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import your routes
import careerRoute from "./routes/career.js";
import contactRoute from "./routes/contact.js";
import authRoute from "./routes/auth.js";
import orderRoute from "./routes/order.js";
import userRoute from "./routes/user.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://fuelflex.in",
    "https://www.fuelflex.in",
    "https://admin.fuelflex.in"
  ],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  console.log("✅ Backend is perfectly running");
  res.send("✅ Server is up and running");
});

// API Routes
app.use("/api/career", careerRoute);
app.use("/api/contact", contactRoute);
app.use("/api/auth", authRoute);
app.use("/api/order", orderRoute);
app.use("/api/user", userRoute);

// Get PORT from environment or fallback to 8080
const PORT = process.env.PORT || 8080;

// Check for MongoDB URI
if (!process.env.MONGO) {
  console.error("❌ MONGO connection string is missing in your .env file");
  process.exit(1); // Exit if no DB string is found
}

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO)
.then(() => {
  console.log("✅ MongoDB connected successfully");
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ Failed to connect to MongoDB:", err);
});
