import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import purchaseRoutes from "./routes/PurchaseRoutes.js";

dotenv.config();

const app = express();

// ✅ Correct CORS setup for Render
app.use(
  cors({
    origin: [
      "https://bookstore-1-0cty.onrender.com", // 👈 your real frontend link
      "http://localhost:3000", // local testing
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "bookstore",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/purchase", purchaseRoutes);

// Default route
app.get("/", (req, res) => res.send("🚀 API is running and connected!"));

// ✅ Dynamic PORT for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
