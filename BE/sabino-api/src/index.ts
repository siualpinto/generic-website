import startMongooseAsync from "./models/index.js";

async function run() {
  await startMongooseAsync();
}

run();
