import { Request, Response } from "express";
import { DbProduct } from "../../models/index.js";
import { Controller, Get, Route } from "tsoa";
import { ProductReadDto } from "../dtos/productReadDto.js";

@Route("products")
export class ProductController extends Controller {
  @Get("/")
  public async getProductsAsync(): Promise<Array<ProductReadDto>> {
    var products = await DbProduct.find();
    return products;
  }
}

export async function createProductAsync(req: Request, res: Response) {
  const newProduct = new DbProduct({ ...req.body });
  const createdProduct = await newProduct.save();
  return res.status(201).json(createdProduct);
}
