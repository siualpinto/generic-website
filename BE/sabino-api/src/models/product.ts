import { UUID, randomUUID } from "crypto";
import { Schema } from "mongoose";

export interface Product {
  id: UUID;
  name: string;
  type: ProductType;
  createdDate: Date;
  updatedDate: Date;
}

export enum ProductType {
  Unknown = "Unknown",
  Wood = "Wood",
  Steel = "Steel",
}

const productSchema = new Schema<Product>({
  id: { type: String, default: () => randomUUID(), required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ProductType, required: true },
  createdDate: { type: Date, default: () => new Date(), required: true },
  updatedDate: { type: Date, default: () => new Date(), required: true },
});

export default productSchema;
