import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  bookName: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  purchaseDate: { type: Date, default: Date.now },
});

export default mongoose.model("Purchase", purchaseSchema);
