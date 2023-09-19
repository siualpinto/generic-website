// The ApolloServer constructor requires two parameters: your schema

import { ApolloServer } from "@apollo/server";
import { ProductResolvers, ProductTypeDefs } from "./typeDefs/product";
import { ClientResolvers, ClientTypeDefs } from "./typeDefs/client";
import { startStandaloneServer } from "@apollo/server/dist/esm/standalone";

const typeDefs = [ProductTypeDefs, ClientTypeDefs];
const resolvers = [ProductResolvers, ClientResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

export async function startApolloServerAsync(): Promise<void> {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}
