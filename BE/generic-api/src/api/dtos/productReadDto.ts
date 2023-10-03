import { ProductDto } from "./productDto.js";

export interface ProductReadDto extends ProductDto {
  createdDate: Date;
  updatedDate: Date;
}
