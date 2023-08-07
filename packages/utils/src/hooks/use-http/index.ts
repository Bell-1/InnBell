import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

// 定义请求拦截器函数类型
export type BeforeRequest = (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
// 定义响应拦截器函数类型
export type BeforeResponse = (response: AxiosResponse) => AxiosResponse
// 定义 useHttp 函数的参数类型
export type UseHttpOptions = {
	baseURL?: string // 请求的基础 URL
	timeout?: number // 请求超时时间
	beforeRequest?: BeforeRequest // 请求拦截器函数
	beforeResponse?: BeforeResponse // 响应拦截器函数
}

/**
 * useHttp 自定义 Hook，封装了 axios 库的常用请求方法
 * @param options 配置项
 * @returns 包含 get、post、put、del、instance、newAbortController 方法的对象
 */
export function useHttp(options: UseHttpOptions = {}) {
	const { baseURL = '/', timeout = 5000, beforeRequest, beforeResponse } = options
	let abortController: AbortController | null = null

	// 实例
	const instance = axios.create({
		baseURL,
		timeout,
		headers: {
			'Content-Type': 'application/json',
		},
	})

	// 请求拦截器
	if (beforeRequest) instance.interceptors.request.use(beforeRequest)
	// 响应拦截器
	if (beforeResponse) instance.interceptors.response.use(beforeResponse)

	// 新建一个AbortController
	function newAbortController() {
		abortController = new window.AbortController()
		return abortController
	}

	// 获取AbortController的signal
	function getSignal() {
		const signal = abortController?.signal
		abortController = null
		return signal
	}

	/**
	 * get 请求
	 * @param url 网址
	 * @param params query 参数
	 * @returns Promise
	 */
	function get<T = any>(url: string, params?: any) {
		// 如果有控制器则使用
		return instance.get<T>(url, { signal: getSignal(), params })
	}

	/**
	 * post 请求
	 * @param url 网址
	 * @param [data] body json 数据
	 * @param [params] query 参数
	 * @returns Promise
	 */
	function post<T = any>(url: string, data?: any, params?: any) {
		return instance.post<T>(url, data, { signal: getSignal(), params, data })
	}

	/**
	 * put 请求
	 * @param url 网址
	 * @param [data] body json 数据
	 * @param [params] query 参数
	 * @returns Promise
	 */
	function put<T = any>(url: string, data?: any, params?: any) {
		return instance.put<T>(url, data, { signal: getSignal(), params, data })
	}

	/**
	 * delete 请求
	 * @param url 网址
	 * @param [params] query 参数
	 * @returns Promise
	 */
	function del<T = any>(url: string, params?: any) {
		return instance.delete<T>(url, { signal: getSignal(), params })
	}

	return {
		get,
		post,
		put,
		del,
		instance,
		newAbortController,
	}
}