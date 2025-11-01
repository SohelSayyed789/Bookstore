import express from "express";
import User from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = "yourSecretKey";

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

// Add to cart
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { bookId, title, price, image } = req.body;
    const user = await User.findById(req.userId);
    const item = user.cart.find((b) => b.bookId === bookId);

    if (item) {
      item.qty += 1;
    } else {
      user.cart.push({ bookId, title, price, image });
    }

    await user.save();
    res.json({ message: "Book added to cart", cart: user.cart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get cart
router.get("/", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user.cart);
});

// Remove from cart
router.delete("/:bookId", authMiddleware, async (req, res) => {
  const { bookId } = req.params;
  const user = await User.findById(req.userId);
  user.cart = user.cart.filter((item) => item.bookId != bookId);
  await user.save();
  res.json({ message: "Item removed", cart: user.cart });
});

export default router;
