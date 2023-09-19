import { ApolloServer } from "@apollo/server";
import { ProductResolvers, ProductTypeDefs } from "./src/graphql/typeDefs/product";
import { ClientResolvers, ClientTypeDefs } from "./src/graphql/typeDefs/client";
import { startStandaloneServer } from "@apollo/server/standalone";
import startMongooseAsync from "./src/models";
import { startApolloServerAsync } from "./src/graphql";
console.log("tes2tss");

await startMongooseAsync();
await startApolloServerAsync();

const typeDefs = [ProductTypeDefs, ClientTypeDefs];
const resolvers = [ProductResolvers, ClientResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
