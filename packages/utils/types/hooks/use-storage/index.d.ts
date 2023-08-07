/**
 * @description: Returns functions to interact with local storage
 * @returns {Object} Object containing functions to set, get, and remove items from local storage
 */
export declare function useStorage(): {
    setStorage: <T>(key: string, value: T) => void;
    getStorage: <T_1>(key: string, defaultValue: T_1) => T_1;
    removeStorage: (key: string) => void;
};
