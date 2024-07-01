/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { NotifierInfo } from './notifier-info';
// May contain unused imports in some cases
// @ts-ignore
import { ReasonTypeInfo } from './reason-type-info';

/**
 * 
 * @export
 * @interface ReasonTypeNotifierMatrix
 */
export interface ReasonTypeNotifierMatrix {
    /**
     * 
     * @type {Array<NotifierInfo>}
     * @memberof ReasonTypeNotifierMatrix
     */
    'notifiers'?: Array<NotifierInfo>;
    /**
     * 
     * @type {Array<ReasonTypeInfo>}
     * @memberof ReasonTypeNotifierMatrix
     */
    'reasonTypes'?: Array<ReasonTypeInfo>;
    /**
     * 
     * @type {Array<Array<boolean>>}
     * @memberof ReasonTypeNotifierMatrix
     */
    'stateMatrix'?: Array<Array<boolean>>;
}

