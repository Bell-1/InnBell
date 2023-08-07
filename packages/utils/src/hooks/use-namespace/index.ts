export function useNamespace(block: string, namespace?: string) {
	const prefix = namespace ? `${namespace}-${block}` : block

	function b() {
		return prefix
	}

	function e(element: string) {
		return `${prefix}__${element}`
	}

	function m(modifier: string) {
		return `${prefix}--${modifier}`
	}

	function is(condition: string, isBool: boolean) {
		return isBool ? `${prefix}--${condition}` : ''
	}

	return { b, e, m, is }
}
