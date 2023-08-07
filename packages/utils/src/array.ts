// 获取数组的第一个元素
export function arrayFirst<T = any>(arr: T[]): T | undefined {
	return arr[0]
}

// 获取数组的最后一个元素
export function ArrayLast<T = any>(arr: T[]): T | undefined {
	return arr[arr.length - 1]
}

// 对数组进行去重
export function arrayUnique<T = any>(arr: T[]): T[] {
	return Array.from(new Set(arr))
}

// 删除数组中的元素
export function arrayRemoveItem<T = any>(arr: T[], value: unknown){
	const index = arr.findIndex(item => item === value)
	if(index > -1){
		arr.splice(index, 1)
	}
}