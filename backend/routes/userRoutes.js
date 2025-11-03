import express from "express";
import { registerUser, loginUser } from "../Controllers/UserController.js";

const router = express.Router();

// ✅ Test route (to check if backend is running fine)
router.get("/", (req, res) => {
  res.send("✅ User routes working fine!");
});

// ✅ Register route
router.post("/register", registerUser);

// ✅ Login route
router.post("/login", loginUser);

export default router;
