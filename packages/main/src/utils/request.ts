import request from '@innbell/api'
import { ElMessage } from 'element-plus'
import { useStorage } from '@innbell/utils'
import { useUserStoreHook } from '@/store/modules/user'
import { get, merge } from 'lodash-es'

const { getStorage } = useStorage()

const getToken = () => getStorage('user-token', '')

/** 退出登录并强制刷新页面（会重定向到登录页） */
function logout() {
	useUserStoreHook().logout()
	location.reload()
}

// 忽略的错误码
const excludeCodes = [401, 403]

function requestInterceptor(config: any) {
	// Do something before request is sent
	const token = getToken()
	config.headers['Authorization'] = token ? `Bearer ${token}` : undefined
	return config
}

function responseInterceptor(apiData: any) {
	return apiData
}

function requestErrorInterceptor(error: any) {
	// Do something with request error
	console.error('request Error code', error)
	if (error.code && !excludeCodes.includes(error.code)) {
		ElMessage.error(error.message)
	}

	const status = get(error, 'error.status')
	switch (status) {
		case 400:
			error.message = '请求错误'
			break
		case 401:
			// Token 过期时
			logout()
			break
		case 403:
			error.message = '拒绝访问'
			break
		case 404:
			error.message = '请求地址出错'
			break
		case 408:
			error.message = '请求超时'
			break
		case 500:
			error.message = '服务器内部错误'
			break
		case 501:
			error.message = '服务未实现'
			break
		case 502:
			error.message = '网关错误'
			break
		case 503:
			error.message = '服务不可用'
			break
		case 504:
			error.message = '网关超时'
			break
		case 505:
			error.message = 'HTTP 版本不受支持'
			break
		default:
			break
	}
	ElMessage.error(error.message)
	return Promise.reject(error)
}

request.instance.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
request.instance.interceptors.response.use(responseInterceptor, requestErrorInterceptor)
