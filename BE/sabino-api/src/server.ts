import express, { Request, Response, Router } from "express";
import productsRoutes from "./routes/products/product.js";
import morgan from "morgan";
import cors from "cors";
import { Express } from "express-serve-static-core";
import swaggerUi from "swagger-ui-express";

export default function startExpressServer() {
  const app = express();
  const port = process.env.PORT || 8000;
  app.use(express.json());
  configureMiddlewares(app);
  configureCors(app);
  configureRoutes(app);
  configureSwagger(app);
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

function configureMiddlewares(app: Express) {
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  app.use(express.json()); //built-in middleware to parse the request body
  app.use(morgan("tiny")); //used to logs the requests
  app.use(express.static("public")); //built-in middleware used to serve the static files
}

function configureCors(app: Express) {
  var corsOptions = {
    origin: "http://localhost:3000",
  };
  app.use(cors(corsOptions));
}

function configureRoutes(app: Express) {
  app.get("/api", (req: Request, res: Response) => {
    res.send("HSabino API");
  });
  app.use("/api/products", productsRoutes);
}

function configureSwagger(app: Express) {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );
}
