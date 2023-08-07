export declare function isUndefined(value: unknown): value is undefined;
export declare function isNull(value: unknown): value is null;
export declare function isDate(value: unknown): value is Date;
export declare function isRegExp(value: unknown): value is RegExp;
export declare function isPromise(value: unknown): value is Promise<any>;
export declare function isEmptyArray(arr: unknown): boolean;
export declare function isEmptyString(value: unknown): value is string;
export declare function isEmptyObject(value: unknown): value is object;
export declare function isEmpty(value: unknown): boolean;
export declare function isNumber(value: unknown): value is number;
export declare function isString(value: unknown): value is string;
export declare function isArray(value: unknown): value is any[];
export declare function isObject(value: unknown): value is object;
export declare function isFunction<T extends (...args: any[]) => any>(value: unknown): value is T;
export declare function isBoolean(value: unknown): value is boolean;