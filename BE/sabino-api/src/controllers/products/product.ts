import { Request, Response } from "express";
import { DbProduct } from "../../models/index.js";
import { IProduct, ProductType } from "src/models/product.js";
import { Controller, Get, Route } from "tsoa";
import { UUID } from "crypto";

export async function getProductsAsync(req: Request, res: Response) {
  var products = await DbProduct.find();
  // console.log(products);
  return res.json(products);
}

export interface IProduct2 {
  id: string;
  name: string;
  createdDate: Date;
  updatedDate: Date;
}

@Route("products")
export default class ProductController extends Controller {
  @Get("/")
  public async getProductsAsync(): Promise<Array<IProduct2>> {
    var products = await DbProduct.find();
    return products;
  }
}

export async function createProductAsync(req: Request, res: Response) {
  const newProduct = new DbProduct({ ...req.body });
  const createdProduct = await newProduct.save();
  return res.status(201).json(createdProduct);
}
