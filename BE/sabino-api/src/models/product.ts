import { UUID, randomUUID } from "crypto";
import { Schema } from "mongoose";

export class Product implements IProduct {
  id: UUID;
  name: string;
  type: ProductType;
  createdDate: Date;
  updatedDate: Date;

  constructor() {
    this.id = randomUUID();
  }
}

export interface IProduct {
  id: string;
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

const productSchema = new Schema(
  {
    // id: { type: String, default: () => randomUUID(), required: true },
    _id: { type: "UUID", required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ProductType, required: true },
    createdDate: { type: Date, default: () => new Date(), required: true },
    updatedDate: { type: Date, default: () => new Date(), required: true },
  },
  {
    statics: {
      create(product: Product) {
        return new this(product).save();
      },
    },
  }
);

productSchema.pre("updateOne", function () {
  this.set({ updatedDate: new Date() });
});

export default productSchema;
