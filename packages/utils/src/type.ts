// 检查是否为 undefined
export function isUndefined(value: unknown): value is undefined {
	return typeof value === 'undefined'
}

// 检查是否为 null
export function isNull(value: unknown): value is null {
	return value === null
}

// 检查是否为日期对象
export function isDate(value: unknown): value is Date {
	return value instanceof Date
}

// 检查是否为正则表达式对象
export function isRegExp(value: unknown): value is RegExp {
	return value instanceof RegExp
}

// 检查是否为 Promise 对象
export function isPromise(value: unknown): value is Promise<any> {
	return isObject(value) && isFunction((value as Promise<any>).then)
}

// 检查数组是否为空
export function isEmptyArray(arr: unknown): boolean {
	return isArray(arr) && arr.length === 0
}

// 检查是否为空字符串
export function isEmptyString(value: unknown): value is string {
	return isString(value) && value.trim() === ''
}

// 检查是否为空对象
export function isEmptyObject(value: unknown): value is object {
	if (!isObject(value)) {
		return false
	}

	for (const key in value) {
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			return false
		}
	}

	return true
}

// 检查是否为空
export function isEmpty(value: unknown): boolean {
	return (
		isUndefined(value) ||
    isNull(value) ||
    isEmptyString(value) ||
    isEmptyArray(value as any[]) ||
    isEmptyObject(value)
	)
}

// 检查是否为数字
export function isNumber(value: unknown): value is number {
	return typeof value === 'number' && !isNaN(value)
}

// 检查是否为字符串
export function isString(value: unknown): value is string {
	return typeof value === 'string'
}

// 检查是否为数组
export function isArray(value: unknown): value is any[] {
	return Array.isArray(value)
}

// 检查是否为对象
export function isObject(value: unknown): value is object {
	return typeof value === 'object' && value !== null && !isArray(value)
}

// 检查是否为函数
export function isFunction<T extends (...args: any[]) => any>(value: unknown): value is T {
	return typeof value === 'function'
}

// 检查是否为布尔值
export function isBoolean(value: unknown): value is boolean {
	return typeof value === 'boolean'
}
