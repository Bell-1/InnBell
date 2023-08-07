/** 模拟接口响应数据 */
export declare const SUCCESS_RESPONSE_DATA: {
    code: number;
    data: {};
    message: string;
};
/** 模拟请求接口成功 */
export declare function getSuccessApi(): Promise<{
    code: number;
    data: {};
    message: string;
}>;
/** 模拟请求接口失败 */
export declare function getErrorApi(): Promise<unknown>;
