import express, { Request, Response } from "express";
import productsRoutes from "./routes/products/product.js";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

export default function startExpressServer() {
  const app = express();
  const port = process.env.PORT || 8000;
  app.use(express.json());
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

  configureCors(app);
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

function configureCors(app) {
  var corsOptions = {
    origin: "http://localhost:3000",
  };
  app.use(cors(corsOptions));
}

function configureRoutes(app) {
  app.get("/api", (req: Request, res: Response) => {
    res.send("HSabino API");
  });
  app.use("/api/products", productsRoutes);
}
