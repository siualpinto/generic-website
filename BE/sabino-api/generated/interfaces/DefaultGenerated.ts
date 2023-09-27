/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IProduct2 } from '../models/IProduct2';

import { NextFunction, Request, Response } from 'express';
import { ParsedQs } from 'qs';

export interface DefaultGenerated {
    /**
     * @returns IProduct2 Ok
     * @throws ApiError
     */

  getProductsAsync(req: Request<{  }, unknown, {}, {  } & ParsedQs, Record<string, unknown>>, res: Response<Array<IProduct2>, Record<string, unknown>>, next: NextFunction): Promise<unknown> 

}
