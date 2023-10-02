import React from "react";
import { DefaultApi, ProductReadDto } from "../../../apiDefinitions";

export default function ordersPage() {
  const fetchTodos = async () => {
    const data: ProductReadDto[] = await new DefaultApi().getProductsAsync();
    console.log(data);
  };

  return <div>Orders Page</div>;
}
