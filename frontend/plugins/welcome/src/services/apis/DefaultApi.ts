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


import * as runtime from '../runtime';
import {
    EntUser,
    EntUserFromJSON,
    EntUserToJSON,
    EntVideo,
    EntVideoFromJSON,
    EntVideoToJSON,
} from '../models';

export interface CreateUserRequest {
    user: EntUser;
}

export interface CreateVideoRequest {
    video: EntVideo;
}

export interface DeleteUserRequest {
    id: number;
}

export interface DeleteVideoRequest {
    id: number;
}

export interface GetUserRequest {
    id: number;
}

export interface GetVideoRequest {
    id: number;
}

export interface ListUserRequest {
    limit?: number;
    offset?: number;
}

export interface ListVideoRequest {
    limit?: number;
    offset?: number;
}

export interface UpdateUserRequest {
    id: number;
    user: EntUser;
}

export interface UpdateVideoRequest {
    id: number;
    video: EntVideo;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Create user
     * Create user
     */
    async createUserRaw(requestParameters: CreateUserRequest): Promise<runtime.ApiResponse<EntUser>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling createUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntUserToJSON(requestParameters.user),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntUserFromJSON(jsonValue));
    }

    /**
     * Create user
     * Create user
     */
    async createUser(requestParameters: CreateUserRequest): Promise<EntUser> {
        const response = await this.createUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create video
     * Create video
     */
    async createVideoRaw(requestParameters: CreateVideoRequest): Promise<runtime.ApiResponse<EntVideo>> {
        if (requestParameters.video === null || requestParameters.video === undefined) {
            throw new runtime.RequiredError('video','Required parameter requestParameters.video was null or undefined when calling createVideo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/videos`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntVideoToJSON(requestParameters.video),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntVideoFromJSON(jsonValue));
    }

    /**
     * Create video
     * Create video
     */
    async createVideo(requestParameters: CreateVideoRequest): Promise<EntVideo> {
        const response = await this.createVideoRaw(requestParameters);
        return await response.value();
    }

    /**
     * get user by ID
     * Delete a user entity by ID
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * get user by ID
     * Delete a user entity by ID
     */
    async deleteUser(requestParameters: DeleteUserRequest): Promise<object> {
        const response = await this.deleteUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * get video by ID
     * Delete a video entity by ID
     */
    async deleteVideoRaw(requestParameters: DeleteVideoRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteVideo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/videos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * get video by ID
     * Delete a video entity by ID
     */
    async deleteVideo(requestParameters: DeleteVideoRequest): Promise<object> {
        const response = await this.deleteVideoRaw(requestParameters);
        return await response.value();
    }

    /**
     * get user by ID
     * Get a user entity by ID
     */
    async getUserRaw(requestParameters: GetUserRequest): Promise<runtime.ApiResponse<EntUser>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntUserFromJSON(jsonValue));
    }

    /**
     * get user by ID
     * Get a user entity by ID
     */
    async getUser(requestParameters: GetUserRequest): Promise<EntUser> {
        const response = await this.getUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * get video by ID
     * Get a video entity by ID
     */
    async getVideoRaw(requestParameters: GetVideoRequest): Promise<runtime.ApiResponse<EntVideo>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getVideo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/videos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntVideoFromJSON(jsonValue));
    }

    /**
     * get video by ID
     * Get a video entity by ID
     */
    async getVideo(requestParameters: GetVideoRequest): Promise<EntVideo> {
        const response = await this.getVideoRaw(requestParameters);
        return await response.value();
    }

    /**
     * list user entities
     * List user entities
     */
    async listUserRaw(requestParameters: ListUserRequest): Promise<runtime.ApiResponse<Array<EntUser>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntUserFromJSON));
    }

    /**
     * list user entities
     * List user entities
     */
    async listUser(requestParameters: ListUserRequest): Promise<Array<EntUser>> {
        const response = await this.listUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * list video entities
     * List video entities
     */
    async listVideoRaw(requestParameters: ListVideoRequest): Promise<runtime.ApiResponse<Array<EntVideo>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/videos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntVideoFromJSON));
    }

    /**
     * list video entities
     * List video entities
     */
    async listVideo(requestParameters: ListVideoRequest): Promise<Array<EntVideo>> {
        const response = await this.listVideoRaw(requestParameters);
        return await response.value();
    }

    /**
     * update user by ID
     * Update a user entity by ID
     */
    async updateUserRaw(requestParameters: UpdateUserRequest): Promise<runtime.ApiResponse<EntUser>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateUser.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling updateUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EntUserToJSON(requestParameters.user),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntUserFromJSON(jsonValue));
    }

    /**
     * update user by ID
     * Update a user entity by ID
     */
    async updateUser(requestParameters: UpdateUserRequest): Promise<EntUser> {
        const response = await this.updateUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * update video by ID
     * Update a video entity by ID
     */
    async updateVideoRaw(requestParameters: UpdateVideoRequest): Promise<runtime.ApiResponse<EntVideo>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateVideo.');
        }

        if (requestParameters.video === null || requestParameters.video === undefined) {
            throw new runtime.RequiredError('video','Required parameter requestParameters.video was null or undefined when calling updateVideo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/videos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EntVideoToJSON(requestParameters.video),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntVideoFromJSON(jsonValue));
    }

    /**
     * update video by ID
     * Update a video entity by ID
     */
    async updateVideo(requestParameters: UpdateVideoRequest): Promise<EntVideo> {
        const response = await this.updateVideoRaw(requestParameters);
        return await response.value();
    }

}
