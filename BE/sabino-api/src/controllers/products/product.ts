import { Request, Response } from "express";
import { DbProduct } from "../../models/index.js";

export async function getProductsAsync(req: Request, res: Response) {
  var products = await DbProduct.find();
  console.log(products);
  return res.json(products);
}

export async function createProductAsync(req: Request, res: Response) {
  const newProduct = new DbProduct({ ...req.body });
  const createdProduct = await newProduct.save();
  return res.status(201).json(createdProduct);
}
