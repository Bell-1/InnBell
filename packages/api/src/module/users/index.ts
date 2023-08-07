import request from '../../request'
import type * as Login from './types/user'
export * from './types/user'

/** 获取登录验证码 */
export function getLoginCodeApi<T = Login.LoginCodeResponseData>() {
	return request.get('api/login/code') as T
}

/** 登录并返回 Token */
export function loginApi<T = Login.LoginResponseData>(data: Login.LoginRequestData) {
	return request.post('api/users/login', data) as T
}

/** 获取用户详情 */
export function getUserInfoApi<T = Login.UserInfoResponseData>() {
	return request.get('api/users/info') as T
}

// 获取用户列表
export const getUsers = (params: Login.getUsersParams) => {
	return request.get('api/users/list', params)
}

// 修改用户信息
export const updateUser = (data: Login.User) => {
	return request.put('api/users/update', data)
}
