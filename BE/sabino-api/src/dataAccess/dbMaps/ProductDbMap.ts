import { Schema, model, connect } from "mongoose";
import mongoose from "mongoose";
import Product from "../../BL/entities/products/Product";

const productSchema = new Schema<Product>({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
});

export default model<Product>("Product", productSchema);
