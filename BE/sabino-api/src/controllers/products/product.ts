import { Request, Response } from "express";
import { DbProduct } from "../../models/index.js";

export async function getProductsAsync(req: Request, res: Response) {
  var products = await DbProduct.find();
  console.log(products);
  return res.json(products);
}
