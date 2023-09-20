import { Router } from "express";
import { getProductsAsync } from "../../controllers/products/product.js";

const productsRoutes = Router();

productsRoutes.get("/", getProductsAsync);

export default productsRoutes;
