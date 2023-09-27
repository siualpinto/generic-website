/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductReadDto } from '../models/ProductReadDto';

import { NextFunction, Request, Response } from 'express';
import { ParsedQs } from 'qs';

export interface DefaultGenerated {
    /**
     * @returns ProductReadDto Ok
     * @throws ApiError
     */

  getProductsAsync(req: Request<{  }, unknown, {}, {  } & ParsedQs, Record<string, unknown>>, res: Response<Array<ProductReadDto>, Record<string, unknown>>, next: NextFunction): Promise<unknown> 

}
