import React from "react";
import { DefaultApi, ProductReadDto } from "../../../apiDefinitions";
import { Fieldset } from "primereact/fieldset";

export default function ordersPage() {
  return <div>
    <h1>Orders Page</h1>
    {getProducts()}
  </div>
};

async function getProducts() {
  const data: ProductReadDto[] = await new DefaultApi().getProductsAsync();

  return data.map(el => <Fieldset legend={el.name}>
    <p className="m-0">
      {el.type} at {el.createdDate.toLocaleDateString()}
    </p>
  </Fieldset>
  )
}