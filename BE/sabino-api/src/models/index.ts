import mongoose, { model } from "mongoose";
import productSchema, { Product, ProductType } from "./product.js";
import clientSchema, { Client } from "./client.js";
import config from "../../config/index.js";
import { randomUUID } from "crypto";

export const DbProduct = model<Product>("Product", productSchema);
export const DbClient = model<Client>("Client", clientSchema);

export default async function startMongooseAsync(): Promise<void> {
  let conn = await mongoose.connect(config.db, { appName: "Sabino Express js app", dbName: config.dbName });
  mongoose.connection.on("error", () => {
    throw new Error(`unable to connect to database: ${config.db}`);
  });
  console.log(`🚀 mongoose connected`);
  await populateDbAsync();
}

async function populateDbAsync() {
  const initialProduct = new DbProduct({
    name: " ",
    type: ProductType.Wood,
  });
  await initialProduct.save();
}
