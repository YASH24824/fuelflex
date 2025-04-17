import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import careerRoute from "./routes/career.js"
import contactRoute from "./routes/contact.js"
import authRoute from "./routes/auth.js"
import orderRoute from "./routes/order.js"
import userRoute from "./routes/user.js"

dotenv.config();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174","https://fuelflex.in","https://www.fuelflex.in"], credentials: true
}));

app.use(cookieParser());
app.use(express.json());

if (!process.env.MONGO) {
  console.error("MONGO connection string missing in .env file");
}
mongoose.connect(process.env.MONGO)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  app.get("/check-db", async (req, res) => {
    const state = mongoose.connection.readyState;
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    switch (state) {
      case 0:
        return res.status(200).send("❌ MongoDB is disconnected");
      case 1:
        return res.status(200).send("✅ MongoDB is connected");
      case 2:
        return res.status(200).send("⏳ MongoDB is connecting...");
      case 3:
        return res.status(200).send("⚠️ MongoDB is disconnecting...");
      default:
        return res.status(200).send("❓ Unknown MongoDB state");
    }
  });
  
// Health check route
app.get("/", (req, res) => {
  console.log("Backend is perfectly running");
  res.send("Server is up and running");
});


app.use("/api/career",careerRoute)
app.use("/api/contact",contactRoute)
app.use("/api/auth",authRoute)
app.use("/api/order",orderRoute)
app.use("/api/user",userRoute)

// Add your other routes here...

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`PORT is running at ${PORT}`);
});
