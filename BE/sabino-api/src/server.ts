import express, { Request, Response } from "express";
import productsRoutes from "./routes/products/product.js";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

export default function startExpressServer() {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.json());
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  app.use(express.json()); //built-in middleware to parse the request body
  app.use(morgan("tiny")); //used to logs the requests
  app.use(express.static("public")); //built-in middleware used to serve the static files
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );
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
