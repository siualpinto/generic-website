/* tslint:disable */
/* eslint-disable */
/**
 * sabino-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProductType } from './ProductType';
import {
    ProductTypeFromJSON,
    ProductTypeFromJSONTyped,
    ProductTypeToJSON,
} from './ProductType';

/**
 * 
 * @export
 * @interface ProductReadDto
 */
export interface ProductReadDto {
    /**
     * Stringified UUIDv4.
     * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
     * @type {string}
     * @memberof ProductReadDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReadDto
     */
    name: string;
    /**
     * 
     * @type {ProductType}
     * @memberof ProductReadDto
     */
    type: ProductType;
    /**
     * 
     * @type {Date}
     * @memberof ProductReadDto
     */
    createdDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProductReadDto
     */
    updatedDate: Date;
}

/**
 * Check if a given object implements the ProductReadDto interface.
 */
export function instanceOfProductReadDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "createdDate" in value;
    isInstance = isInstance && "updatedDate" in value;

    return isInstance;
}

export function ProductReadDtoFromJSON(json: any): ProductReadDto {
    return ProductReadDtoFromJSONTyped(json, false);
}

export function ProductReadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductReadDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': ProductTypeFromJSON(json['type']),
        'createdDate': (new Date(json['createdDate'])),
        'updatedDate': (new Date(json['updatedDate'])),
    };
}

export function ProductReadDtoToJSON(value?: ProductReadDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': ProductTypeToJSON(value.type),
        'createdDate': (value.createdDate.toISOString()),
        'updatedDate': (value.updatedDate.toISOString()),
    };
}

