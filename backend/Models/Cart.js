import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      bookId: String,
      title: String,
      author: String,
      image: String,
      price: Number,
      quantity: Number,
    },
  ],
});

export default mongoose.model("Cart", cartSchema);
