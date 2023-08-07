import { useHttp } from '../src/hooks/use-http'

describe('useHttp', () => {
	const baseURL = 'https://jsonplaceholder.typicode.com'
	const timeout = 5000

	it('should return an object with get, post, put, del, instance, and newAbortController methods', () => {
		const http = useHttp({ baseURL, timeout })
		expect(http).toHaveProperty('get')
		expect(http).toHaveProperty('post')
		expect(http).toHaveProperty('put')
		expect(http).toHaveProperty('del')
		expect(http).toHaveProperty('instance')
		expect(http).toHaveProperty('newAbortController')
	})

	it('should make a GET request and return data', async () => {
		const http = useHttp({ baseURL, timeout })
		const response = await http.get('/posts/1')
		expect(response.data).toHaveProperty('userId')
		expect(response.data).toHaveProperty('id')
		expect(response.data).toHaveProperty('title')
		expect(response.data).toHaveProperty('body')
	})

	it('should make a POST request and return data', async () => {
		const http = useHttp({ baseURL, timeout })
		const data = { title: 'foo', body: 'bar', userId: 1 }
		const response = await http.post('/posts', data)
		expect(response.data).toHaveProperty('id')
		expect(response.data).toHaveProperty('title', data.title)
		expect(response.data).toHaveProperty('body', data.body)
		expect(response.data).toHaveProperty('userId', data.userId)
	})

	it('should make a PUT request and return data', async () => {
		const http = useHttp({ baseURL, timeout })
		const data = { title: 'foo', body: 'bar', userId: 1 }
		const response = await http.put('/posts/1', data)
		expect(response.data).toHaveProperty('id')
		expect(response.data).toHaveProperty('title', data.title)
		expect(response.data).toHaveProperty('body', data.body)
		expect(response.data).toHaveProperty('userId', data.userId)
	})

	it('should make a DELETE request and return data', async () => {
		const http = useHttp({ baseURL, timeout })
		const response = await http.del('/posts/1')
		expect(response.data).toEqual({})
	})
})