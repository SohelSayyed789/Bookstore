import express from "express";
import { createPurchase } from "../Controllers/PurchaseController.js";

const router = express.Router();

// Change '/add' to match your frontend
router.post("/add", createPurchase);

export default router;
