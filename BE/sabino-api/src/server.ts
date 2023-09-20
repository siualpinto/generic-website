import express, { Request, Response } from "express";
import productsRoutes from "./routes/products/product.js";

export default function startExpressServer() {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.json());
  configureRoutes(app);
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

function configureRoutes(app) {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Express!");
  });
  app.use("/products", productsRoutes);
}
