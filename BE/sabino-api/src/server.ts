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

  // var whitelist = ['http://localhost:3000/', 'http://localhost:3000']
  // var corsOptions = {
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  //   origin: function (origin, callback) {
  //     if (whitelist.indexOf(origin) !== -1) {
  //       callback(null, true)
  //     } else {
  //       callback(new Error('Not allowed by CORS'))
  //     }
  //   }
  // }

  var corsOptions = {
    origin: "http://localhost:3000",
  };
  app.use(cors(corsOptions));
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
  app.get("/api", (req: Request, res: Response) => {
    res.send("HSabino API");
  });
  app.use("/api/products", productsRoutes);
}
