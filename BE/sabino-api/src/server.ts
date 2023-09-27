import express, { Request, Response } from "express";
import productsRoutes from "./routes/products/product.js";
import morgan from "morgan";

export default function startExpressServer() {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.json());
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  app.use(express.json());
  app.use(morgan("tiny"));
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
