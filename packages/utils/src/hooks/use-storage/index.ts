/**
 * @description: Returns functions to interact with local storage
 * @returns {Object} Object containing functions to set, get, and remove items from local storage
 */
export function useStorage() {
	/**
	 * @description: Sets an item in local storage
	 * @param {string} key - The key to set the item under
	 * @param {T} value - The value to set
	 * @returns {void}
	 */
	function setStorage<T>(key: string, value: T): void {
		localStorage.setItem(key, JSON.stringify(value))
	}

	/**
	 * @description: Gets an item from local storage
	 * @param {string} key - The key to get the item from
	 * @param {T} defaultValue - The default value to return if the item is not found
	 * @returns {T} The value of the item, or the default value if the item is not found
	 */
	function getStorage<T>(key: string, defaultValue: T): T {
		const value = localStorage.getItem(key)
		if (value) {
			return JSON.parse(value) as T
		}
		return defaultValue
	}

	/**
	 * @description: Removes an item from local storage
	 * @param {string} key - The key of the item to remove
	 * @returns {void}
	 */
	function removeStorage(key: string): void {
		localStorage.removeItem(key)
	}

	return {
		setStorage,
		getStorage,
		removeStorage,
	}
}
