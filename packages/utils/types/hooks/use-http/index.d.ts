import { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
export type BeforeRequest = (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
export type BeforeResponse = (response: AxiosResponse) => AxiosResponse;
export type UseHttpOptions = {
    baseURL?: string;
    timeout?: number;
    beforeRequest?: BeforeRequest;
    beforeResponse?: BeforeResponse;
};
/**
 * useHttp 自定义 Hook，封装了 axios 库的常用请求方法
 * @param options 配置项
 * @returns 包含 get、post、put、del、instance、newAbortController 方法的对象
 */
export declare function useHttp(options?: UseHttpOptions): {
    get: <T = any>(url: string, params?: any) => Promise<AxiosResponse<T, any>>;
    post: <T_1 = any>(url: string, data?: any, params?: any) => Promise<AxiosResponse<T_1, any>>;
    put: <T_2 = any>(url: string, data?: any, params?: any) => Promise<AxiosResponse<T_2, any>>;
    del: <T_3 = any>(url: string, params?: any) => Promise<AxiosResponse<T_3, any>>;
    instance: import("axios").AxiosInstance;
    newAbortController: () => AbortController;
};
