import { ApiResponseData } from '@innbell/types'

export interface User {
  /** 用户名 */
  username: string
  roles: string[]
}

// 获取用户列表条件
export interface getUsersParams {
  /** 页码 */
  page: number
  /** 每页条数 */
  limit: number
  /** 用户名 */
  keyword?: string
}

export interface LoginRequestData {
  // admin 或 editor
  username: 'admin' | 'editor'
  // 密码
  password: string
  // 确认密码
  confirmPassword: string 
  // 验证码
  code: string
}

export type LoginCodeResponseData = ApiResponseData<string>

export type LoginResponseData = ApiResponseData<{ user: User, token: string }>

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>
