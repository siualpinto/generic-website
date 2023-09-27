import { Request, Response } from "express";
import { DbProduct } from "../../models/index.js";
import { IProduct } from "src/models/product.js";

export async function getProductsAsync(req: Request, res: Response) {
  var products = await DbProduct.find();
  // console.log(products);
  return res.json(products);
}

export default class PingController {
  public async getProductsAsync(): Promise<Array<IProduct>> {
    var products = await DbProduct.find();
    return products;
  }
}

export async function createProductAsync(req: Request, res: Response) {
  const newProduct = new DbProduct({ ...req.body });
  const createdProduct = await newProduct.save();
  return res.status(201).json(createdProduct);
}
