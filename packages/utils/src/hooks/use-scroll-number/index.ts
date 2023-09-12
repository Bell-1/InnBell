/**
 * Scrolls a number from a start value to an end value, updating a callback function with the current value.
 *
 * @param {number} start - The starting value of the number.
 * @param {number} end - The ending value of the number.
 * @param {Function} updateCallback - The callback function to be called after the number is updated.
 * @return {void}
 */
export function useScrollNumber(duration = 2000, step = 66.7) {
	/**
	 * Scrolls a number from a start value to an end value, updating a callback function with the current value.
	 *
	 * @param {number} start - The starting value of the number.
	 * @param {number} end - The ending value of the number.
	 * @param {Function} updateCallback - The callback function to be called after the number is updated.
	 */
	function scrollNumber(start: number, end: number, updateCallback: (currentNum: number) => void){
		if(typeof updateCallback !== 'function') throw 'updateCallback must be a function'
		// 当前数
		let currentValue = start;
		// 增量
		const increment = (end - start) / (duration / 1000 * step)
		/**
		 * Updates the counter value based on the specified increment and end value.
		 *
		 * @param {number} currentValue - The current value of the counter.
		 * @param {number} end - The end value for the counter.
		 * @param {number} increment - The increment value for the counter.
		 * @param {Function} updateCallback - The callback function to be called after the counter is updated.
		 */
		function updateCounter() {
			if (currentValue < end) {
				currentValue += increment;
				requestAnimationFrame(updateCounter);
			} else {
				currentValue = end;
			}
			// 调用回调 更新
			updateCallback(currentValue)
		}

		updateCounter()
	}

	return {
		scrollNumber,
	}

}
