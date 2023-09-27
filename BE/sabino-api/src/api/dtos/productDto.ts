import { ProductType } from "../../models/product.js";
import { UUID } from "./UUID.js";

export interface ProductDto {
  id: UUID;
  name: string;
  type: ProductType;
  createdDate: Date;
  updatedDate: Date;
}
