import startMongooseAsync from "./models/index.js";
import startExpressServer from "./server.js";

async function run() {
  console.clear();
  await startMongooseAsync();
  startExpressServer();
}

run();
