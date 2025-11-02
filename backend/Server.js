import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import purchaseRoutes from "./routes/PurchaseRoutes.js";

dotenv.config();
const app = express();

import cors from "cors";
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://bookstore-1-8ec4.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { dbName: "bookstore" })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.use("/api/users", userRoutes);
app.use("/api/purchase", purchaseRoutes);

app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
