import { Router } from "express";
import { ProductController, createProductAsync, getProductsAsync } from "../../api/controllers/productsController.js";

const productsRoutes = Router();

// productsRoutes.get("/", getProductsAsync);
productsRoutes.get("/", async (_req, res) => {
  const controller = new ProductController();
  const response = await controller.getProductsAsync();
  return res.send(response);
});
productsRoutes.post("/", createProductAsync);

export default productsRoutes;
