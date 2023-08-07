import { useHttp } from '@innbell/utils'

const request = useHttp({
	baseURL: '/',
	timeout: 30000,
})

function responseInterceptor(response: any) {
	// Do something with response data
	const apiData = response.data
	// 二进制数据则直接返回
	const responseType = response.request?.responseType
	if (responseType === 'blob' || responseType === 'arraybuffer') return apiData

	// 这个 code 是和后端约定的业务 code
	if (response.data?.code !== 0) {
		return Promise.reject(apiData)
	}
	return apiData
}

function requestErrorInterceptor(error: any) {
	// Do something with request error
	console.error('request Error code', error)
	return Promise.reject(error)
}

request.instance.interceptors.response.use(responseInterceptor, requestErrorInterceptor)

export default request
