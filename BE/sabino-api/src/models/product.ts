import { Schema, Types } from "mongoose";

export interface Product {
  id: string;
  name: string;
  type: ProductType;
}

export enum ProductType {
  Unknown = "Unknown",
  Wood = "Wood",
  Steel = "Steel",
}

const productSchema = new Schema<Product>({
  id: Types.ObjectId,
  name: { type: String, required: true },
  type: { type: String, enum: ProductType, required: true },
});

export default productSchema;
