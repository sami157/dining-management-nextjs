import axios from 'axios'

const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
    timeout: 10000,
});

export interface ApiRequestOptions {
    params: Record<string, unknown>,
    headers: Record<string, string>,
}

const httpGet = async(endpoint: string, options?: ApiRequestOptions) => {
    try {
        const response = await instance.get(endpoint, {
            params: options?.params,
            headers: options?.headers,
        })
        return response.data
    } catch (error) {
        console.log(`Get request to ${endpoint} failed`);
        throw error     
    }
}

const httpDelete = async(endpoint: string, options?: ApiRequestOptions) => {
    try {
        const response = await instance.delete(endpoint, {
            params: options?.params,
            headers: options?.headers,
        })
        return response.data
    } catch (error) {
        console.log(`Delete request to ${endpoint} failed`);
        throw error     
    }
}

const httpPost = async(endpoint: string, data: unknown, options: ApiRequestOptions) => {
    try {
        const response = await instance.post(endpoint, data, {
            params: options?.params,
            headers: options?.headers,
        })
        return response.data
    } catch (error) {
        console.log(`Post request to ${endpoint} failed`);
        throw error     
    }
}

const httpPut = async(endpoint: string, data: unknown, options: ApiRequestOptions) => {
    try {
        const response = await instance.put(endpoint, data, {
            params: options?.params,
            headers: options?.headers,
        })
        return response.data
    } catch (error) {
        console.log(`Put request to ${endpoint} failed`);
        throw error     
    }
}

const httpPatch = async(endpoint: string, data: unknown, options: ApiRequestOptions) => {
    try {
        const response = await instance.patch(endpoint, data, {
            params: options?.params,
            headers: options?.headers,
        })
        return response.data
    } catch (error) {
        console.log(`Patch request to ${endpoint} failed`);
        throw error     
    }
}



export const httpClient = {
    get: httpGet,
    delete: httpDelete,
    post: httpPost,
    patch: httpPatch,
    put: httpPut
}