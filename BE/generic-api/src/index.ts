import startMongooseAsync from "./models/index.js";
import startExpressServer from "./server.js";

async function run() {
  await startMongooseAsync();
  startExpressServer();
}

run();
