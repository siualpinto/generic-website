import { startApolloServerAsync } from "./graphql";
import { startMongooseAsync } from "./models";

await startApolloServerAsync();
await startMongooseAsync();
