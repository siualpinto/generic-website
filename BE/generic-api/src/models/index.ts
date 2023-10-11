import mongoose, { model } from "mongoose";
import productSchema, { IProduct, Product, ProductType } from "./product.js";
import clientSchema, { Client } from "./client.js";
import config from "../../config/index.js";
import { randomUUID } from "crypto";
import userSchema, { User } from "../auth/model/user.js";

export const DbProduct = model<IProduct>("Product", productSchema);
export const DbClient = model<Client>("Client", clientSchema);
export const DbUser = model<User>("User", userSchema);

export default async function startMongooseAsync(): Promise<void> {
  await mongoose.connect(config.db!, { appName: "Sabino Express js app", dbName: config.dbName });
  mongoose.connection.on("error", () => {
    throw new Error(`unable to connect to database: ${config.db}`);
  });
  console.log(`🚀 mongoose connected`);
  await clearDbAsync();
  await populateDbAsync();
}

async function clearDbAsync() {
  await DbProduct.deleteMany();
  await DbClient.deleteMany();
  await DbUser.deleteMany();
}

async function populateDbAsync() {
  const initialProduct = new DbProduct({
    name: " ",
    type: ProductType.Wood,
    id: randomUUID(),
  });
  await initialProduct.save();
  
  let p: Product = new Product();
  p.name = "asd";
  p.type = ProductType.Steel;
  await DbProduct.create(p);

  await createTestProduct();
  await createTestUser();
  
}

async function createTestProduct() {
  let testProduct: Product = new Product();
  testProduct.name = "new product";
  testProduct.type = ProductType.Steel;

  await DbProduct.create(testProduct);
}

async function createTestUser() {
  let testUser: User = new User("AlcinoSousa", "basic", "testpassword");

  await DbUser.create(testUser);
}

