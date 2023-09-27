/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductType } from './ProductType';
import type { UUID } from './UUID';

export type ProductReadDto = {
    id: UUID;
    name: string;
    type: ProductType;
    createdDate: string;
    updatedDate: string;
};
