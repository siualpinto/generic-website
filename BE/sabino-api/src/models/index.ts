import mongoose, { model } from "mongoose";
import productSchema, { Product } from "./product.js";
import clientSchema, { Client } from "./client.js";
import config from "../../config/index.js";

export const Products = model<Product>("Product", productSchema);
export const Clients = model<Client>("Client", clientSchema);

export default async function startMongooseAsync(): Promise<void> {
  /**
   * Connecting Mongoose
   */
  mongoose.connect(config.db, {
    keepAlive: true,
    socketTimeoutMS: 0,
  });

  /**
   * Throw error when not able to connect to database
   */
  mongoose.connection.on("error", () => {
    throw new Error(`unable to connect to database: ${config.db}`);
  });
  console.log(`🚀 mongoose connected`);
}
