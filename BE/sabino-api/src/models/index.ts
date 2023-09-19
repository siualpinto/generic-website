import mongoose, { model } from "mongoose";
import productSchema, { Product } from "./product";
import clientSchema, { Client } from "./client";
import config from "../../config";

export const Products = model<Product>("Product", productSchema);
export const Clients = model<Client>("Client", clientSchema);

export async function startMongooseAsync(): Promise<void> {
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
