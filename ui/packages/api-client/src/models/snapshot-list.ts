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
import { Snapshot } from './snapshot';

/**
 * 
 * @export
 * @interface SnapshotList
 */
export interface SnapshotList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof SnapshotList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof SnapshotList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof SnapshotList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<Snapshot>}
     * @memberof SnapshotList
     */
    'items': Array<Snapshot>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof SnapshotList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof SnapshotList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof SnapshotList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof SnapshotList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof SnapshotList
     */
    'totalPages': number;
}

