export const ProductTypeDefs = `#graphql
  type Product {
    name: String
    type: String
  }
`;

export const ProductResolvers = {
  Query: {
    products: () => [{ name: "ola", type: "Wood" }],
  },
};
