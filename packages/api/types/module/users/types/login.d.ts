import { ApiResponseData } from '@innbell/types';
export interface User {
    /** 用户名 */
    username: string;
    roles: string[];
}
export interface getUsersParams {
    /** 页码 */
    page: number;
    /** 每页条数 */
    limit: number;
    /** 用户名 */
    keyword?: string;
}
export interface LoginRequestData {
    username: 'admin' | 'editor';
    password: string;
    confirmPassword: string;
    code: string;
}
export type LoginCodeResponseData = ApiResponseData<string>;
export type LoginResponseData = ApiResponseData<{
    user: User;
    token: string;
}>;
export type UserInfoResponseData = ApiResponseData<{
    username: string;
    roles: string[];
}>;
