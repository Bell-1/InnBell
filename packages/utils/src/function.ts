// 防抖
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
	let timer: any = null
	return function () {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(fn, delay)
	}
}

// 节流，支持立即执行
export function throttle<T extends (...args: any[]) => void>(fn: T, delay: number, options: { leading?: boolean, trailing?: boolean } = {}) {
	let timer: ReturnType<typeof setTimeout> | null = null
	let lastExecTime: number | null = null

	function throttled(this: any, ...args: Parameters<T>) {
		if (!lastExecTime && options.leading === false) {
			lastExecTime = Date.now()
		}

		const currentTime = Date.now()
		const elapsedTime = lastExecTime ? currentTime - lastExecTime : 0

		if (elapsedTime >= delay) {
			if (timer) {
				clearTimeout(timer)
				timer = null
			}
			fn.apply(this, args)
			lastExecTime = currentTime
		} else if (!timer && options.trailing !== false) {
			timer = setTimeout(() => {
				fn.apply(this, args)
				lastExecTime = options.leading === false ? null : Date.now()
				timer = null
			}, delay - elapsedTime)
		}
	}

	throttled.cancel = () => {
		timer && clearTimeout(timer)
		timer = null
		lastExecTime = null
	}

	return throttled
}
