/**
 * Scrolls a number from a start value to an end value, updating a callback function with the current value.
 *
 * @param {number} start - The starting value of the number.
 * @param {number} end - The ending value of the number.
 * @param {Function} updateCallback - The callback function to be called after the number is updated.
 * @return {void}
 */
export declare function useScrollNumber(duration?: number, step?: number): {
    scrollNumber: (start: number, end: number, updateCallback: (currentNum: number) => void) => void;
};
