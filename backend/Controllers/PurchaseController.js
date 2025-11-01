import Purchase from "../Models/PurchaseModel.js";

export const createPurchase = async (req, res) => {
  try {
    const { userName, bookName, author, price, quantity } = req.body;

    if (!userName || !bookName || !author || !price) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const newPurchase = new Purchase({
      userName,
      bookName,
      author,
      price,
      quantity,
    });

    await newPurchase.save();

    res.status(201).json({
      message: "Purchase saved successfully",
      data: newPurchase,
    });
  } catch (error) {
    console.error("Error in createPurchase:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
