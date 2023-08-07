declare const request: {
    get: <T = any>(url: string, params?: any) => Promise<import("axios").AxiosResponse<T, any>>;
    post: <T_1 = any>(url: string, data?: any, params?: any) => Promise<import("axios").AxiosResponse<T_1, any>>;
    put: <T_2 = any>(url: string, data?: any, params?: any) => Promise<import("axios").AxiosResponse<T_2, any>>;
    del: <T_3 = any>(url: string, params?: any) => Promise<import("axios").AxiosResponse<T_3, any>>;
    instance: import("axios").AxiosInstance;
    newAbortController: () => AbortController;
};
export default request;
