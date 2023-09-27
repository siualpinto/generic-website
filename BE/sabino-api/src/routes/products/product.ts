import { Router } from "express";
import { ProductController, createProductAsync } from "../../api/controllers/productsController.js";

const productsRoutes = Router();

productsRoutes.get("/", async (_req, res) => {
  const response = await new ProductController().getProductsAsync();
  return res.send(response);
});
productsRoutes.post("/", createProductAsync);

export default productsRoutes;
