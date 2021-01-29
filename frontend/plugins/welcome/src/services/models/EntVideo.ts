/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EntVideoEdges,
    EntVideoEdgesFromJSON,
    EntVideoEdgesFromJSONTyped,
    EntVideoEdgesToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntVideo
 */
export interface EntVideo {
    /**
     * Description holds the value of the "description" field.
     * @type {string}
     * @memberof EntVideo
     */
    description?: string;
    /**
     * 
     * @type {EntVideoEdges}
     * @memberof EntVideo
     */
    edges?: EntVideoEdges;
    /**
     * ID of the ent.
     * @type {number}
     * @memberof EntVideo
     */
    id?: number;
    /**
     * Imgurl holds the value of the "imgurl" field.
     * @type {string}
     * @memberof EntVideo
     */
    imgurl?: string;
    /**
     * Timestamp holds the value of the "timestamp" field.
     * @type {string}
     * @memberof EntVideo
     */
    timestamp?: string;
    /**
     * Title holds the value of the "title" field.
     * @type {string}
     * @memberof EntVideo
     */
    title?: string;
    /**
     * URL holds the value of the "url" field.
     * @type {string}
     * @memberof EntVideo
     */
    url?: string;
}

export function EntVideoFromJSON(json: any): EntVideo {
    return EntVideoFromJSONTyped(json, false);
}

export function EntVideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntVideo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'edges': !exists(json, 'edges') ? undefined : EntVideoEdgesFromJSON(json['edges']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'imgurl': !exists(json, 'imgurl') ? undefined : json['imgurl'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function EntVideoToJSON(value?: EntVideo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'edges': EntVideoEdgesToJSON(value.edges),
        'id': value.id,
        'imgurl': value.imgurl,
        'timestamp': value.timestamp,
        'title': value.title,
        'url': value.url,
    };
}


