import type * as Login from './types/login';
export * from './types/login';
/** 获取登录验证码 */
export declare function getLoginCodeApi<T = Login.LoginCodeResponseData>(): T;
/** 登录并返回 Token */
export declare function loginApi<T = Login.LoginResponseData>(data: Login.LoginRequestData): T;
/** 获取用户详情 */
export declare function getUserInfoApi<T = Login.UserInfoResponseData>(): T;
export declare const getUsers: (params: Login.getUsersParams) => Promise<import("axios").AxiosResponse<any, any>>;
