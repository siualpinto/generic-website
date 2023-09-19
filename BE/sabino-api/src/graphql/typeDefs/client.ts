export const ClientTypeDefs = `#graphql
  type Client {
    name: String
    type: String
  }
`;

export const ClientResolvers = {
  Query: {
    clients: () => [{ name: "ola", email: "ole@ola.com" }],
  },
};
