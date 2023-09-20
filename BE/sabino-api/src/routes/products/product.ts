import { Router } from "express";
import { createProductAsync, getProductsAsync } from "../../controllers/products/product.js";

const productsRoutes = Router();

productsRoutes.get("/", getProductsAsync);
productsRoutes.post("/", createProductAsync);

export default productsRoutes;
